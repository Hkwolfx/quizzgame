// Dans SessionTracker.tsx
import React, { useState, useEffect } from "react";

interface SessionTrackerProps {
  sessionStatus: string;
}

const SessionTracker: React.FC<SessionTrackerProps> = ({ sessionStatus }) => {
  const [startedSessions, setStartedSessions] = useState<number>(0);
  const [previousStatus, setPreviousStatus] = useState<string>("inactive");

  useEffect(() => {
    // Chaque fois que le statut de la session passe de 'inactive' à 'active', cela signifie qu'une nouvelle session a commencé.
    if (sessionStatus === "active" && previousStatus === "inactive") {
      setStartedSessions((prev) => prev + 1);
    }
    // Mettre à jour le statut précédent pour la prochaine vérification
    setPreviousStatus(sessionStatus);
  }, [sessionStatus, previousStatus]); // Dépendance à sessionStatus et previousStatus pour réagir aux changements

  return (
    <div>
      {Array.from({ length: startedSessions }, (_, index) => (
        <span key={index}>🟢</span>
      ))}
    </div>
  );
};

export default SessionTracker;
