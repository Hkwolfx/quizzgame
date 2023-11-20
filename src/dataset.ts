// dataset.ts
export interface Question {
    question: string;
    reponses: Record<string, string>;
    bonneReponse: string;
    // Vous pouvez ajouter d'autres propriétés ici, comme le type de question
  }
  
  export const questions: Question[] = [
    {
      question: "Quelle est la capitale de la France?",
      reponses: { a: "Lyon", b: "Marseille", c: "Paris", d: "Nice" },
      bonneReponse: "c"
    },
    {
        question: "Qui a écrit '1984'?",
        reponses: { a: "George Orwell", b: "Aldous Huxley", c: "William Shakespeare", d: "Mark Twain" },
        bonneReponse: "a"
      },
      {
        question: "Quel est l'élément chimique de symbole 'O'?",
        reponses: { a: "Or", b: "Osmium", c: "Oxygène", d: "Oganesson" },
        bonneReponse: "c"
      },
      {
        question: "Dans quel pays se trouve la ville de Kyoto?",
        reponses: { a: "Chine", b: "Japon", c: "Corée du Sud", d: "Thaïlande" },
        bonneReponse: "b"
      },
      {
        question: "Qui a peint 'La Nuit étoilée'?",
        reponses: { a: "Pablo Picasso", b: "Leonardo Da Vinci", c: "Vincent Van Gogh", d: "Claude Monet" },
        bonneReponse: "c"
      },
      {
        question: "L'eau bout à 100 degrés Celsius à niveau de la mer.",
        reponses: { a: "Vrai", b: "Faux" },
        bonneReponse: "a"
      },
      {
        question: "Le soleil tourne autour de la Terre.",
        reponses: { a: "Vrai", b: "Faux" },
        bonneReponse: "b"
      },
      {
        question: "Le cheval blanc d'Henri IV est blanc.",
        reponses: { a: "Vrai", b: "Faux" },
        bonneReponse: "a"
      },
      {
        question: "Le son voyage plus vite dans l'air que dans l'eau.",
        reponses: { a: "Vrai", b: "Faux" },
        bonneReponse: "b"
      },
      {
        question: "La lumière du soleil met environ 8 minutes pour atteindre la Terre.",
        reponses: { a: "Vrai", b: "Faux" },
        bonneReponse: "a"
      },
    // Ajoutez d'autres questions ici
  ];