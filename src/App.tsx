import React, { useState, useEffect } from 'react';
import { questions, Question } from './dataset';
import Card from './components/Card';
import ProgressBar from './components/ProgressBar';
import './App.css';
import TestResults from './components/TestResults';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [showResponse, setShowResponse] = useState(false);
  const displayTime = 5000; // 5 secondes pour chaque question
  const responseTime = 3000; // 3 secondes pour afficher la réponse

  useEffect(() => {
    if (secondsLeft === 0) {
      setShowResponse(true); // Affiche la réponse

      const timeout = setTimeout(() => {
        setShowResponse(false); // Cache la réponse après un certain temps
        setCurrentQuestionIndex((prevIndex) => 
          prevIndex < questions.length - 1 ? prevIndex + 1 : 0
        );
        setSecondsLeft(5); // Réinitialise le compteur pour la question suivante
      }, responseTime);

      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const currentQuestion: Question = questions[currentQuestionIndex];

  return (
    <div className="App">
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
