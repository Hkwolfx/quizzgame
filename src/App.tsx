import React, { useState, useEffect } from "react";
import { questions, Question } from "./dataset";
import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";
import TestResults from "./components/TestResults";
import { FaPlay, FaPause } from "react-icons/fa";
import "./App.css";
import { initializeDragAndDrop } from "./dragnDrop";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(30); // Initialisé à 30 secondes
  const [showResponse, setShowResponse] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true); // Nouvel état pour la visibilité de Card


  const responseTime = 5000; // 5 secondes pour afficher la réponse

  useEffect(() => {
    let interval: NodeJS.Timeout;
  
    if (secondsLeft > 0 && isPlaying && !isPaused && !showResponse) {
      // Vérifiez si c'est le début du timer
      if (secondsLeft === 30 && !showResponse) { // Déclenchez /start au début du timer
        setTimeout(() => {
        fetch('http://localhost:3000/start')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Received data:', data);
            setIsAudioPlayed(data.audioPlayed);
          })
          .catch(error => {
            console.error('An error occurred during the request:', error);
          });
      }, 3000)
    }
  
      interval = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setShowResponse(true);
  
      setTimeout(() => {
        setShowResponse(false);
        setCurrentQuestionIndex((prevIndex) =>
          prevIndex < questions.length - 1 ? prevIndex + 1 : 0
        );
        setSecondsLeft(30); // Réinitialisé à 30 secondes
      }, responseTime);
    }

    if (showResponse) {
      fetch('/stop', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log('Received data:', data);
      })
      .catch(error => {
        console.error('An error occurred during the request:', error);
      });
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [secondsLeft, isPlaying, isPaused, showResponse]);

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
