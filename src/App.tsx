import React, { useState, useEffect } from "react";
import { questions, Question } from "./dataset";
import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";
import TestResults from "./components/TestResults";
import { FaPlay, FaPause } from "react-icons/fa";
import "./App.css";
import { initializeDragAndDrop } from "./dragnDrop";
import Ranking from "./components/Ranking";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [showResponse, setShowResponse] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [startSent, setStartSent] = useState(false); // Ajouté pour contrôler l'envoi de la requête

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
      setStartSent(true); // Empêcher les envois multiples
      const currentQuestionData = {
        question: currentQuestionIndex,
        bonneReponse: questions[currentQuestionIndex].bonneReponse,
      };
      console.log(currentQuestion, "1")
      console.log(currentQuestionData, "2")
      console.log(currentQuestionIndex, "3")
      console.log('Données émises :', currentQuestion.bonneReponse)
      console.log('Données émises :', currentQuestion.question)
      fetch('http://localhost:3000/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentQuestionData),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setIsAudioPlayed(data.audioPlayed);
      })
      .catch(error => {
        console.error('An error occurred during the request:', error);
      });
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

      <Ranking />

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
