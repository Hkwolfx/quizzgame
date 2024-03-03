import React from 'react';
import Response from './Response';
import './Card.css';

interface CardProps {
  question: string;
  reponses: Record<string, string>;
  bonneReponse: string;
  showResponse: boolean;
  revealAnswers: boolean; // Ajoutez cette ligne
}

const Card: React.FC<CardProps> = ({ question, reponses, bonneReponse, showResponse, revealAnswers }) => {
  return (
    <div className="container"> {/* Conteneur Flexbox */}
      <div className="card">
        <div className="card-header">
          <h2>{question}</h2>
        </div>
        <div className="card-body">
        {revealAnswers && !showResponse ? (
            <Response reponses={reponses} />
          ) : showResponse ? (
            <div className='bonnereponse'>Bonne réponse: {reponses[bonneReponse]}</div>
          ) : (
            <div>Préparez-vous...</div> // Optionnel: Message pendant le délai
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
