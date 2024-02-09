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
    reponses: { A: " réponse A -> Lyon", B: "réponse B -> Marseille", C: "réponse C -> Paris", D: "réponse D -> Nice" },
    bonneReponse: "C",
  },
  {
    question: "Qui a écrit 'Le Petit Prince'?",
    reponses: { A: "réponse A -> Victor Hugo", B: "réponse B -> Antoine de Saint-Exupéry", C: "réponse C -> Marcel Proust", D: "réponse D -> Émile Zola" },
    bonneReponse: "B",
  },
  {
    question: "Quel élément chimique a pour symbole 'O'?",
    reponses: { A: "réponse A -> Or", B: "réponse B -> Osmium", C: "réponse C -> Oxygène", D: "réponse D -> Oganesson" },
    bonneReponse: "C",
  },
  {
    question: "En quelle année l'homme a-t-il marché sur la Lune?",
    reponses: { A: "réponse A -> 1969", B: "réponse B -> 1972", C: "réponse C -> 1958", D: "réponse D -> 1984" },
    bonneReponse: "A",
  },
  {
    question: "Quel est le plus long fleuve du monde?",
    reponses: { A: "réponse A -> Le Nil", B: "réponse B -> L'Amazone", C: "réponse C -> Le Yangtsé", D: "réponse D -> Le Mississippi" },
    bonneReponse: "B",
  },
  {
    question: "Qui a peint 'La Nuit étoilée'?",
    reponses: { A: "réponse A -> Pablo Picasso", B: "réponse B -> Leonardo da Vinci", C: "réponse C -> Vincent van Gogh", D: "réponse D -> Claude Monet" },
    bonneReponse: "C",
  },
  {
    question: "Qui est l'auteur des livres 'Harry Potter'?",
    reponses: { A: "réponse A -> J.K. Rowling", B: "réponse B -> Stephen King", C: "réponse C -> J.R.R. Tolkien", D: "réponse D -> George R.R. Martin" },
    bonneReponse: "A",
  },
  {
    question: "Quel est le plus grand océan du monde?",
    reponses: { A: "réponse A -> Atlantique", B: "réponse B -> Indien", C: "réponse C -> Arctique", D: "réponse D -> Pacifique" },
    bonneReponse: "D",
  },
  {
    question: "Dans quel pays se trouve la ville de Dubaï?",
    reponses: { A: "réponse A -> Arabie Saoudite", B: "réponse B -> Qatar", C: "réponse C -> Émirats Arabes Unis", D: "réponse D -> Oman" },
    bonneReponse: "C",
  },
  {
    question: "Quelle est la langue officielle du Brésil?",
    reponses: { A: "réponse A -> Espagnol", B: "réponse B -> Portugais", C: "réponse C -> Français", D: "réponse D -> Anglais" },
    bonneReponse: "B",
  },
  {
    question: "Quel compositeur a écrit la célèbre 5ème Symphonie?",
    reponses: { A: "réponse A -> Wolfgang Amadeus Mozart", B: "réponse B -> Johann Sebastian Bach", C: "réponse C -> Ludwig van Beethoven", D: "réponse D -> Pyotr Ilyich Tchaikovsky" },
    bonneReponse: "C",
  },
  {
    question: "Le livre le plus vendu au monde après la Bible?",
    reponses: { A: "réponse A -> Le Seigneur des Anneaux", B: "réponse B -> Le Petit Prince", C: "réponse C -> Harry Potter à l'école des sorciers", D: "réponse D -> Le Livre des Morts" },
    bonneReponse: "B",
  },
  {
    question: "Une ville surnommée 'La Ville des Lumières'?",
    reponses: { A: "réponse A -> New York", B: "réponse B -> Paris", C: "réponse C -> Tokyo", D: "réponse D -> Londres" },
    bonneReponse: "B",
  },
  {
    question: "Dans quel pays se trouve le Machu Picchu?",
    reponses: { A: "réponse A -> Bolivie", B: "réponse B -> Pérou", C: "réponse C -> Colombie", D: "réponse D -> Équateur" },
    bonneReponse: "B",
  },
  {
    question: "Qui a inventé l'ampoule électrique ?",
    reponses: { A: "réponse A -> Nikola Tesla", B: "réponse B -> Thomas Edison", C: "réponse C -> Alexander Graham Bell", D: "réponse D -> Albert Einstein" },
    bonneReponse: "B",
  },
  {
    question: "Quelle est la monnaie officielle du Japon?",
    reponses: { A: "réponse A -> Yen", B: "réponse B -> Won", C: "réponse C -> Yuan", D: "réponse D -> Dollar" },
    bonneReponse: "A",
  },
  {
    question: "Quel pays est connu comme le pays du Matin Calme?",
    reponses: { A: "réponse A -> Chine", B: "réponse B -> Japon", C: "réponse C -> Corée du Sud", D: "réponse D -> Vietnam" },
    bonneReponse: "C",
  },
  {
    question: "Quel est le plus grand animal terrestre?",
    reponses: { A: "réponse A -> Girafe", B: "réponse B -> Éléphant d'Afrique", C: "réponse C -> Rhinocéros", D: "réponse D -> Hippopotame" },
    bonneReponse: "B",
  },
  {
    question: "Qui a écrit '1984'?",
    reponses: { A: "réponse A -> George Orwell", B: "réponse B -> Aldous Huxley", C: "réponse C -> Arthur C. Clarke", D: "réponse D -> Ray Bradbury" },
    bonneReponse: "A",
  },
  {
    question: "Quelle ville est la capitale de l'Australie?",
    reponses: { A: "réponse A -> Sydney", B: "réponse B -> Melbourne", C: "réponse C -> Canberra", D: "réponse D -> Perth" },
    bonneReponse: "C",
  },
  {
    question: "Quel artiste est célèbre pour avoir coupé son oreille ?",
    reponses: { A: "réponse A -> Pablo Picasso", B: "réponse B -> Vincent van Gogh", C: "réponse C -> Salvador Dalí", D: "réponse D -> Claude Monet" },
    bonneReponse: "B",
  },
  {
    question: "Quel est le plus petit pays du monde?",
    reponses: { A: "réponse A -> Monaco", B: "réponse B -> Liechtenstein", C: "réponse C -> Vatican", D: "réponse D -> Nauru" },
    bonneReponse: "C",
  },
  {
    question: "Qui est le dieu de la guerre dans la mythologie grecque?",
    reponses: { A: "réponse A -> Zeus", B: "réponse B -> Arès", C: "réponse C -> Apollon", D: "réponse D -> Hermès" },
    bonneReponse: "B",
  },
  {
    question: "Quel film a remporté l'Oscar du meilleur film en 1994?",
    reponses: { A: "réponse A -> Pulp Fiction", B: "réponse B -> Forrest Gump", C: "réponse C -> Le Roi Lion", D: "réponse D -> Shawshank Redemption" },
    bonneReponse: "B",
  }
  // Ajoutez d'autres questions ici
];
