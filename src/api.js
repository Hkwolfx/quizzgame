export const sendQuestionToOCR = async (questionText) => {
    try {
      const response = await fetch('http://localhost:3000/start-ocr-tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: questionText })
      });
  
      if (!response.ok) {
        // Si la réponse n'est pas OK (par exemple, erreur 404 ou 500), lance une erreur
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Erreur lors de l envoi de la question au serveur:', error);
      // Tu pourrais choisir de renvoyer ici une valeur par défaut ou propager l'erreur
    }
  };
  