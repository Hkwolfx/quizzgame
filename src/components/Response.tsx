// Response.tsx
import React from 'react';

interface ResponseProps {
  reponses: Record<string, string>;
}

const Response: React.FC<ResponseProps> = ({ reponses }) => {
  return (
    <ul>
      {Object.entries(reponses).map(([key, value]) => (
        <li key={key}>{value}</li>
      ))}
    </ul>
  );
};

export default Response;


