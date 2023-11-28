import React from 'react';
import Response from './Response';
import './Card.css';

interface CardProps {
  question: string;
  reponses: Record<string, string>;
  bonneReponse: string;
  showResponse: boolean;
}

const Card: React.FC<CardProps> = ({ question, reponses, bonneReponse, showResponse }) => {
  return (
    <div className="container"> {/* Conteneur Flexbox */}
      <div className="card">
        <div className="card-header">
          <h2>{question}</h2>
        </div>
        <div className="card-body">
          {!showResponse ? (
            <Response reponses={reponses} />
          ) : (
            <div className='bonnereponse'>Bonne réponse: {reponses[bonneReponse]}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
