import React, { useState, useEffect } from 'react';
import { questions, Question } from './dataset';
import Card from './components/Card';
import ProgressBar from './components/ProgressBar';
import TestResults from './components/TestResults';
import { FaPlay, FaPause } from 'react-icons/fa';
import './App.css';
import { initializeDragAndDrop } from './dragnDrop';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [showResponse, setShowResponse] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const responseTime = 3000; // 3 secondes pour afficher la réponse

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    if (secondsLeft > 0 && isPlaying && !isPaused) {
      interval = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setShowResponse(true);
      timeout = setTimeout(() => {
        setShowResponse(false);
        setCurrentQuestionIndex((prevIndex) => 
          prevIndex < questions.length - 1 ? prevIndex + 1 : 0
        );
        setSecondsLeft(5);
      }, responseTime);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [secondsLeft, isPlaying, isPaused]);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePauseClick = () => {
    setIsPlaying(false);
    setIsPaused(true);
  };

  useEffect(() => {
    initializeDragAndDrop();
}, []);

  const currentQuestion: Question = questions[currentQuestionIndex];

  
    return (
      <div className="App">
        <div className="cube-handle">
       <div className="cube">
    <div className="face front"></div>
    <div className="face back"></div>
    <div className="face right"></div>
    <div className="face left"></div>
    <div className="face top"></div>
    <div className="face bottom"></div>
    </div>
</div>

        {isPlaying 
          ? <button className="pause-button" onClick={handlePauseClick}><FaPause size={30} /></button>
          : <button className="play-button" onClick={handlePlayClick}><FaPlay size={30} /></button>
        }
        <Card 
          question={currentQuestion.question} 
          reponses={currentQuestion.reponses} 
          bonneReponse={currentQuestion.bonneReponse}
          showResponse={showResponse}
        />
        {!showResponse && (
          <ProgressBar value={secondsLeft} maxValue={5} />
        )}
        <TestResults/> 
      </div>
    );
};

export default App;
