import React, { useState, useEffect } from "react";
import { questions, Question } from "./dataset";
import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";
import TestResults from "./components/TestResults";
import { FaPlay, FaPause } from "react-icons/fa";
import "./App.css";
// import { initializeDragAndDrop } from "./_dragnDrop";
import Ranking from "./components/Ranking";

interface Joueur {
  userId: string;
  uniqueId: string;
  score: number;
  profilePictureUrl?: string;
}


const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [showResponse, setShowResponse] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [revealAnswers, setRevealAnswers] = useState(false); // Cet état contrôle l'affichage des options de réponse
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

  useEffect(() => {
    if (secondsLeft === 30 && !startSent && !showResponse) {
      setStartSent(true); // Pour éviter les envois multiples
      setRevealAnswers(false); // Commencer par cacher les réponses
  
      // Révéler les réponses 1 seconde avant d'envoyer la requête /start
      setTimeout(() => {
        setRevealAnswers(true);
      }, 2000); // Attendre 2 secondes pour révéler les réponses, donc 1 seconde avant la requête /start
  
      // Ajout d'un délai total de 3 secondes avant d'exécuter l'envoi des données /start
      setTimeout(() => {
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
          // Ici, vous pouvez mettre à jour les états nécessaires après la réponse /start
        })
        .catch(error => console.error('Erreur lors de la requête:', error));
      }, 3000); // 3000 millisecondes = 3 secondes pour l'envoi de la requête /start
    }
  }, [currentQuestionIndex, secondsLeft, showResponse, startSent]);
  

  // Envoyer la requête à `/end` pour évaluer les réponses une fois le temps écoulé
useEffect(() => {
  if (showResponse) { // Se déclenche uniquement à la fin du temps alloué pour répondre
    const bonneReponseData = {
      bonneReponse: questions[currentQuestionIndex].bonneReponse,
    };

    fetch('http://localhost:3000/end', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(bonneReponseData),
    })
    .then(response => response.ok ? response.json() : Promise.reject('Erreur réseau'))
    .then(data => {
      // setMeilleursJoueurs(data.meilleursJoueurs); // Mise à jour du classement avec les données reçues
        setMeilleursJoueurs((prevMeilleursJoueurs: Joueur[]) => {
            const updatedScores: Joueur[] = data.meilleursJoueurs.map((joueurFromServer: Joueur) => {
              const existingPlayerIndex = prevMeilleursJoueurs.findIndex(j => j.userId === joueurFromServer.userId);
              if (existingPlayerIndex !== -1) {
                const existingPlayer = prevMeilleursJoueurs[existingPlayerIndex];
                if (joueurFromServer.score > existingPlayer.score) {
                  const updatedPlayer: Joueur = {
                    ...existingPlayer,
                    score: joueurFromServer.score,
                  };
                  return updatedPlayer;
                }
              }
              return joueurFromServer;
            });
  
            const filteredExistingPlayers = prevMeilleursJoueurs.filter(
              joueurPrev => !updatedScores.some(joueurUpdated => joueurUpdated.userId === joueurPrev.userId)
            );
  
            return [...filteredExistingPlayers, ...updatedScores].sort((a, b) => b.score - a.score);
          });
  
          console.log('Mise à jour des meilleurs joueurs avec les nouveaux scores.');
      console.log('Classement mis à jour avec les nouveaux meilleurs joueurs.');
    })
    .catch(error => console.error('Erreur lors de la requête /end:', error));
  }
}, [showResponse, currentQuestionIndex]);


  
  // Boutons de contrôle
  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsPaused(false);
    // setIsCardVisible(true);
  };

  const handlePauseClick = () => {
    setIsPlaying(false);
    setIsPaused(true);
    // setIsCardVisible(false);
  };

  // useEffect(() => {
  //   initializeDragAndDrop();
  // }, []);

  const currentQuestion: Question = questions[currentQuestionIndex];


  return (
    <div className="App">
      <div className="cube-handle">
      </div>



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
        revealAnswers={revealAnswers}
      />
      
      </div>
      <Ranking meilleursJoueurs={meilleursJoueurs} />
      {!showResponse && <ProgressBar value={secondsLeft} maxValue={10} />}
      <TestResults />
    </div>
  );
};

export default App;
