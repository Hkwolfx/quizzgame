import React from 'react';
import './ProgressBar.css'; // Assurez-vous que le fichier CSS correspondant est ajouté

interface ProgressBarProps {
  value: number; // La valeur actuelle de la jauge
  maxValue: number; // La valeur maximale de la jauge
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, maxValue }) => {
  const widthPercentage = (value / maxValue) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${widthPercentage}%` }}></div>
      <div className="progress-bar-timer">{`${value}`}</div>
    </div>
  );
};

export default ProgressBar;
