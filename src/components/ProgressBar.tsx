import React from 'react';
import './ProgressBar.css'; // Assurez-vous d'ajouter le fichier CSS correspondant

interface ProgressBarProps {
  value: number; // La valeur actuelle de la jauge (par exemple, le nombre de secondes restantes)
  maxValue: number; // La valeur maximale de la jauge (par exemple, la durée totale en secondes)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, maxValue }) => {
  const widthPercentage = (value / maxValue) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${widthPercentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;