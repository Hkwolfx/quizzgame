import React, { useEffect } from 'react';

interface CountProps {
  secondsLeft: number; // Prop pour le nombre de secondes restantes
  setSecondsLeft: React.Dispatch<React.SetStateAction<number>>; // Prop pour la fonction de mise à jour de secondsLeft
  duration: number;
  responseTime: number;
  currentQuestionId: number;
  onCountdownFinish: () => void;
}

const Count: React.FC<CountProps> = ({
  secondsLeft, 
  setSecondsLeft, 
  duration, 
  responseTime, 
  currentQuestionId, 
  onCountdownFinish
}) => {

  // Réinitialiser le compteur pour chaque nouvelle question
  useEffect(() => {
    setSecondsLeft(responseTime);
  }, [responseTime, currentQuestionId, setSecondsLeft]); // Inclure setSecondsLeft dans le tableau de dépendances

  // Décompte
  useEffect(() => {
    if (secondsLeft === 0) {
      onCountdownFinish();
      return;
    }

    const timerId = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [secondsLeft, setSecondsLeft, onCountdownFinish]);

  return (
    <div className="count">
      {secondsLeft} secondes restantes
    </div>
  );
};

export default Count;
