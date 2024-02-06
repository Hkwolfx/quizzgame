import React, { useState, useEffect } from "react";
import { questions, Question } from "./dataset";
import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";
import TestResults from "./components/TestResults";
import { FaPlay, FaPause } from "react-icons/fa";
import "./App.css";
import { initializeDragAndDrop } from "./dragnDrop";
import Ranking from "./components/Ranking";

interface Joueur {
  userId: string;
  uniqueId: string;
  score: number;
}


const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [showResponse, setShowResponse] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [startSent, setStartSent] = useState(false); // Ajouté pour contrôler l'envoi de la requête
  const [meilleursJoueurs, setMeilleursJoueurs] = useState<Joueur[]>([]);

  const responseTime = 5000; // 5 secondes pour afficher la réponse

  // Timer pour le compte à rebours
  useEffect(() => {
    if (secondsLeft > 0 && isPlaying && !isPaused && !showResponse) {
      const interval = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (secondsLeft === 0 && !showResponse) {
      setShowResponse(true);
      setTimeout(() => {
        setShowResponse(false);
        setCurrentQuestionIndex((prevIndex) => prevIndex < questions.length - 1 ? prevIndex + 1 : 0);
        setSecondsLeft(30); // Réinitialisation pour la prochaine question
        setStartSent(false); // Réinitialisation de l'envoi de la requête pour la prochaine question
      }, responseTime);
    }
  }, [secondsLeft, isPlaying, isPaused, showResponse]);

  // Envoi de la requête au début de chaque question
  useEffect(() => {
    if (secondsLeft === 30 && !startSent && !showResponse) {
      setStartSent(true); // Pour éviter les envois multiples
      const currentQuestionData = {
        question: currentQuestionIndex,
        bonneReponse: questions[currentQuestionIndex].bonneReponse,
      };
      
      console.log('Envoi des données au serveur pour la question:', currentQuestionData.question);

      fetch('http://localhost:3000/start', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(currentQuestionData),
      })
      .then(response => response.ok ? response.json() : Promise.reject('Erreur réseau'))
      .then(data => {
        setIsAudioPlayed(data.audioPlayed);
        setMeilleursJoueurs((prevMeilleursJoueurs: Joueur[]) => {
          const updatedScores: Joueur[] = data.meilleursJoueurs.map((joueurFromServer: Joueur) => {
            const existingPlayerIndex = prevMeilleursJoueurs.findIndex(j => j.userId === joueurFromServer.userId);
            if (existingPlayerIndex !== -1) {
              const updatedPlayer: Joueur = {
                ...prevMeilleursJoueurs[existingPlayerIndex],
                score: prevMeilleursJoueurs[existingPlayerIndex].score + joueurFromServer.score,
              };
              return updatedPlayer;
            } else {
              return joueurFromServer;
            }
          });
      
          const filteredExistingPlayers = prevMeilleursJoueurs.filter(
            joueurPrev => !updatedScores.some(joueurUpdated => joueurUpdated.userId === joueurPrev.userId)
          );
      
          return [...filteredExistingPlayers, ...updatedScores].sort((a, b) => b.score - a.score);
        });
      
        console.log('Mise à jour des meilleurs joueurs avec les nouveaux scores.');
      })
      
      .catch(error => console.error('Erreur lors de la requête:', error));
    }
  }, [currentQuestionIndex, secondsLeft, showResponse, startSent]);

  // Boutons de contrôle
  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsPaused(false);
    setIsCardVisible(true);
  };

  const handlePauseClick = () => {
    setIsPlaying(false);
    setIsPaused(true);
    setIsCardVisible(false);
  };

  useEffect(() => {
    initializeDragAndDrop();
  }, []);

  const currentQuestion: Question = questions[currentQuestionIndex];

  return (
    <div className="App">
      <div className="cube-handle">
        <div className="cube">
          <div className="face front">
            <div className="blob"></div>
          </div>
          <div className="face back">
            <div className="blob"></div>
          </div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>

      <Ranking meilleursJoueurs={meilleursJoueurs} />

      {isPlaying ? (
        <button className="pause-button" onClick={handlePauseClick}>
          <FaPause size={30} />
        </button>
      ) : (
        <button className="play-button" onClick={handlePlayClick}>
          <FaPlay size={30} />
        </button>
      )}
      <div style={{ visibility: isCardVisible ? "visible" : "hidden" }} >
      <Card
          
        question={currentQuestion.question}
        reponses={currentQuestion.reponses}
        bonneReponse={currentQuestion.bonneReponse}
        showResponse={showResponse}
      />
      </div>
      {!showResponse && <ProgressBar value={secondsLeft} maxValue={10} />}
      <TestResults />
    </div>
  );
};

export default App;
