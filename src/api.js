export const sendQuestionToOCR = async (questionText) => {
    try {
      const response = await fetch('http://localhost:3000/start-ocr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: questionText })
      });
      return response.json();
    } catch (error) {
      console.error('Erreur lors de l’envoi de la question au serveur:', error);
    }
  };
  