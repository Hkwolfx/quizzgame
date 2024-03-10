import React, { useState, useEffect } from "react";
import { questions, Question } from "./dataset";
import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";
import TestResults from "./components/TestResults";
import { FaPlay, FaPause } from "react-icons/fa";
import "./App.css";
// import { initializeDragAndDrop } from "./_dragnDrop";
import Ranking from "./components/Ranking";

// typages

interface Joueur {
  userId: string;
  uniqueId: string;
  score: number;
  profilePictureUrl?: string;
}

interface Notification {
  userId: string;
  nickname: string;
  likeCount?: number; // pour les likes
  action?: string; // pour les actions sociales
  giftId?: string; // pour les cadeaux
  type: "like" | "social" | "gift"; // distingue le type de notification
}

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [showResponse, setShowResponse] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [revealAnswers, setRevealAnswers] = useState(false); // Cet état contrôle l'affichage des options de réponse
  const [startSent, setStartSent] = useState(false); // Ajouté pour contrôler l'envoi de la requête
  const [meilleursJoueurs, setMeilleursJoueurs] = useState<Joueur[]>([]);
  const [utilisateursNotifies, setUtilisateursNotifies] = useState<
    Notification[]
  >([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 600 secondes = 10 minutes
const [sessionStatus, setSessionStatus] = useState('inactive');

  const responseTime = 5000; // 5 secondes pour afficher la réponse

  // Timer pour le compte à rebours
  useEffect(() => {
    if (secondsLeft > 0 && isPlaying && !isPaused && !showResponse) {
      const interval = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (secondsLeft === 0 && !showResponse) {
      setShowResponse(true);
      setTimeout(() => {
        setShowResponse(false);
        setCurrentQuestionIndex((prevIndex) =>
          prevIndex < questions.length - 1 ? prevIndex + 1 : 0
        );
        setSecondsLeft(30); // Réinitialisation pour la prochaine question
        setStartSent(false); // Réinitialisation de l'envoi de la requête pour la prochaine question
      }, responseTime);
    }
  }, [secondsLeft, isPlaying, isPaused, showResponse]);

  useEffect(() => {
    if (secondsLeft === 30 && !startSent && !showResponse) {
      setStartSent(true); // Pour éviter les envois multiples
      setRevealAnswers(false); // Commencer par cacher les réponses

      // Révéler les réponses 1 seconde avant d'envoyer la requête /start
      setTimeout(() => {
        setRevealAnswers(true);
      }, 2000); // Attendre 2 secondes pour révéler les réponses, donc 1 seconde avant la requête /start

      // Ajout d'un délai total de 3 secondes avant d'exécuter l'envoi des données /start
      setTimeout(() => {
        const currentQuestionData = {
          question: currentQuestionIndex,
          bonneReponse: questions[currentQuestionIndex].bonneReponse,
        };

        console.log(
          "Envoi des données au serveur pour la question:",
          currentQuestionData.question
        );

        fetch("http://localhost:3000/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(currentQuestionData),
        })
          .then((response) =>
            response.ok ? response.json() : Promise.reject("Erreur réseau")
          )
          .then((data) => {
            setIsAudioPlayed(data.audioPlayed);
            // Ici, vous pouvez mettre à jour les états nécessaires après la réponse /start
          })
          .catch((error) => console.error("Erreur lors de la requête:", error));
      }, 3000); // 3000 millisecondes = 3 secondes pour l'envoi de la requête /start
    }
  }, [currentQuestionIndex, secondsLeft, showResponse, startSent]);

  useEffect(() => {
    if (showResponse) {
      fetch("http://localhost:3000/end", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bonneReponse: questions[currentQuestionIndex].bonneReponse,
        }),
      })
        .then((response) =>
          response.ok ? response.json() : Promise.reject("Erreur réseau")
        )
        .then((data) => {
          setMeilleursJoueurs((prevMeilleursJoueurs) => {
            const updatedScoresMap = new Map();

            data.meilleursJoueurs.forEach(
              (joueurFromServer: { userId: any }) => {
                updatedScoresMap.set(joueurFromServer.userId, joueurFromServer);
              }
            );

            const mergedScores = prevMeilleursJoueurs.map(
              (joueur) => updatedScoresMap.get(joueur.userId) || joueur
            );
            const uniqueMergedScores = Array.from(
              new Set([...mergedScores, ...data.meilleursJoueurs])
            );

            return uniqueMergedScores
              .sort((a, b) => b.score - a.score)
              .slice(0, 3); // Assurez-vous de ne garder que les trois meilleurs joueurs
          });

          console.log(
            "Mise à jour des meilleurs joueurs avec les nouveaux scores."
          );
        })
        .catch((error) =>
          console.error("Erreur lors de la requête /end:", error)
        );
    }
  }, [showResponse, currentQuestionIndex, questions]);

  // Boutons de contrôle
  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsPaused(false);
    // setIsCardVisible(true);
  };

  const handlePauseClick = () => {
    setIsPlaying(false);
    setIsPaused(true);
    // setIsCardVisible(false);
  };

  // useEffect(() => {
  //   initializeDragAndDrop();
  // }, []);

  const currentQuestion: Question = questions[currentQuestionIndex];

  const fetchUtilisateursNotifies = () => {
    Promise.all([
      fetch("http://localhost:3000/likes-notifies").then((res) => res.json()),
      fetch("http://localhost:3000/socials-notifies").then((res) => res.json()),
      fetch("http://localhost:3000/gifts-notifies").then((res) => res.json()),
    ])
      .then(([likesData, socialsData, cadeauxData]) => {
        // Combinez toutes les notifications en une liste, en ajoutant un champ pour indiquer le type
        const combinedData = [
          ...likesData.map(
            (item: Notification) => ({ ...item, type: "like" } as Notification)
          ),
          ...socialsData.map(
            (item: Notification) =>
              ({ ...item, type: "social" } as Notification)
          ),
          ...cadeauxData.map(
            (item: Notification) => ({ ...item, type: "gift" } as Notification)
          ),
        ];
        setUtilisateursNotifies(combinedData);
      })
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des notifications:",
          error
        )
      );
  };

  useEffect(() => {
    fetchUtilisateursNotifies();
  }, [currentQuestionIndex]); // Le tableau vide signifie que cela ne s'exécutera qu'une fois, après le premier rendu
  // sinon il faut mettre les états qu'on veut surveiller pour déclencher un useEffect.

  useEffect(() => {
    // On affiche un utilisateur si il y en a dans la liste et que l'index courant est inférieur à la longueur de la liste
    if (
      utilisateursNotifies.length > 0 &&
      currentUserIndex < utilisateursNotifies.length
    ) {
      setShowThankYou(true);
      const timer = setTimeout(() => {
        setShowThankYou(false);
        // On s'assure de ne pas dépasser la longueur de la liste
        if (currentUserIndex < utilisateursNotifies.length - 1) {
          setCurrentUserIndex(currentUserIndex + 1);
        }
      }, 5000); // Changer l'utilisateur après 5 secondes
      return () => clearTimeout(timer);
    } else {
      // On cache le message si tous ont été affichés
      setShowThankYou(false);
    }
  }, [currentUserIndex, utilisateursNotifies]);

  useEffect(() => {
    const fetchSessionInfo = () => {
      fetch("http://localhost:3000/session-info")
        .then((res) => res.json())
        .then((sessionData) => {
          console.log('Session data:', sessionData);
          setSessionStatus(sessionData.isActive ? 'active' : 'inactive'); // Correction ici
          if (sessionData.isActive) { // Et ici
            // Calculez le temps restant en secondes
            const endTime = new Date(sessionData.endTime).getTime();
            const now = new Date().getTime();
            const newTimeLeft = Math.round((endTime - now) / 1000);
            setTimeLeft(newTimeLeft > 0 ? newTimeLeft : 0);
          } else {
            // Si la session n'est pas active, réinitialisez le timer
            setTimeLeft(600); // Réinitialiser à 10 minutes
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des infos de session:", error);
        });
    };
  
    // Appeler immédiatement la fonction lors du chargement du composant
    fetchSessionInfo();
  
    // Configurer l'intervalle pour le rappel toutes les 2 minutes
    const interval = setInterval(fetchSessionInfo, 120000); // 120000 ms = 2 minutes
  
    // Nettoyer l'intervalle quand le composant se démonte
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval: number | null = null; // Declare 'interval' as 'number | null'
    if (sessionStatus === 'active' && timeLeft > 0) {
      interval = window.setInterval(() => { // Use 'window.setInterval' if in browser
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    } else if (sessionStatus !== 'active') {
      setTimeLeft(0); // Or your logic for when the session is not active
    }
    return () => {
      if (interval !== null) { // Check if 'interval' is not null
        clearInterval(interval); // TypeScript knows 'interval' is a number here
      }
    };
  }, [sessionStatus, timeLeft]);
  

  return (
    <div className="App">
      {isPlaying ? (
        <button className="pause-button" onClick={handlePauseClick}>
          <FaPause size={30} />
        </button>
      ) : (
        <button className="play-button" onClick={handlePlayClick}>
          <FaPlay size={30} />
        </button>
      )}
      <div className="timer">
  Temps restant : {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}
</div>
      {showThankYou && currentUserIndex < utilisateursNotifies.length && (
        <div className="thank-you-messages">
          <div className="star star1">★</div>
          <div className="star star2">★</div>
          <div className="star star3">★</div>
          <div className="star star4">★</div>
          <div>
            Merci, {utilisateursNotifies[currentUserIndex].nickname} pour{" "}
            {utilisateursNotifies[currentUserIndex].type === "like"
              ? `les likes`
              : utilisateursNotifies[currentUserIndex].type === "social"
              ? `l'action sociale`
              : `le cadeau ${
                  utilisateursNotifies[currentUserIndex].giftId
                    ? `ID: ${utilisateursNotifies[currentUserIndex].giftId}`
                    : ""
                }`}{" "}
          </div>
        </div>
      )}
      <div style={{ visibility: isCardVisible ? "visible" : "hidden" }}>
        <Card
          question={currentQuestion.question}
          reponses={currentQuestion.reponses}
          bonneReponse={currentQuestion.bonneReponse}
          showResponse={showResponse}
          revealAnswers={revealAnswers}
        />
      </div>

      <Ranking meilleursJoueurs={meilleursJoueurs} />
      <div className="wrap">
        <div className="x-container">
          <div className="group">
            <div className="icon"><div className="plusone">+1</div></div>
            <div className="icon1"><div className="plusone">+1</div></div>
            <div className="icon2"><div className="plusone">+1</div></div>
          </div>
        </div>
      </div>
      {!showResponse && <ProgressBar value={secondsLeft} maxValue={10} />}
      <TestResults />
    </div>
  );
};

export default App;
