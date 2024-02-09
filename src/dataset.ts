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
    reponses: { a: " réponse A -> Lyon", b: "réponse B -> Marseille", c: "réponse C -> Paris", d: "réponse D -> Nice" },
    bonneReponse: "C",
  },
  {
    question: "Qui est l'auteur du livre 1984 ?",
    reponses: {
      a: "George Orwell",
      b: "Aldous Huxley",
      c: "William Shakespeare",
      d: "Mark Twain",
    },
    bonneReponse: "a",
  },
  {
    question: "Quel est le plus grand océan?",
    reponses: { a: "Atlantique", b: "Indien", c: "Pacifique", d: "Arctique" },
    bonneReponse: "c",
  },
  {
    question: "Combien de planètes dans le système solaire?",
    reponses: { a: "7", b: "8", c: "9", d: "10" },
    bonneReponse: "b",
  },
  {
    question: "Combien de continents dans le monde?",
    reponses: { a: "4", b: "5", c: "6", d: "7" },
    bonneReponse: "d",
  },
  {
    question: "Capitale de la France?",
    reponses: { a: "Lyon", b: "Marseille", c: "Paris", d: "Nice" },
    bonneReponse: "c",
  },
  {
    question: "Symbole chimique de l'Oxygène?",
    reponses: { a: "Or", b: "Osmium", c: "Oxygène", d: "Oganesson" },
    bonneReponse: "c",
  },
  {
    question: "Kyoto est dans quel pays?",
    reponses: { a: "Chine", b: "Japon", c: "Corée du Sud", d: "Thaïlande" },
    bonneReponse: "b",
  },
  {
    question: "Peintre de La Nuit étoilée?",
    reponses: {
      a: "Pablo Picasso",
      b: "Leonardo Da Vinci",
      c: "Vincent Van Gogh",
      d: "Claude Monet",
    },
    bonneReponse: "c",
  },
  {
    question: "L'eau bout à quel degré?",
    reponses: { a: "Vrai", b: "Faux" },
    bonneReponse: "a",
  },
  {
    question: "Quel est le plus long fleuve du monde ?",
    reponses: {
      a: "Le Nil",
      b: "L'Amazone",
      c: "Le Yangtsé",
      d: "Le Mississippi"
    },
    bonneReponse: "b"
  },
  {
    question: "Qui a inventé l'ampoule électrique ?",
    reponses: {
      a: "Nikola Tesla",
      b: "Thomas Edison",
      c: "Alexander Graham Bell",
      d: "Albert Einstein"
    },
    bonneReponse: "b"
  },
  {
    question: "Quelle planète est connue comme la 'Planète Rouge' ?",
    reponses: {
      a: "Mars",
      b: "Vénus",
      c: "Jupiter",
      d: "Saturne"
    },
    bonneReponse: "a"
  },
  {
    question: "Dans quel pays se trouve la ville de Venise ?",
    reponses: {
      a: "France",
      b: "Espagne",
      c: "Italie",
      d: "Portugal"
    },
    bonneReponse: "c"
  },
  {
    question: "Qui est l'auteur de 'La Joconde' ?",
    reponses: {
      a: "Vincent Van Gogh",
      b: "Pablo Picasso",
      c: "Leonardo da Vinci",
      d: "Claude Monet"
    },
    bonneReponse: "c"
  },
  {
    question: "Quel est l'élément chimique avec le symbole 'H' ?",
    reponses: {
      a: "Oxygène",
      b: "Hydrogène",
      c: "Hélium",
      d: "Azote"
    },
    bonneReponse: "b"
  },
  {
    question: "Quelle est la capitale du Canada ?",
    reponses: {
      a: "Toronto",
      b: "Montreal",
      c: "Vancouver",
      d: "Ottawa"
    },
    bonneReponse: "d"
  },
  {
    question: "Qui a composé les Quatre Saisons ?",
    reponses: {
      a: "Ludwig van Beethoven",
      b: "Antonio Vivaldi",
      c: "Johann Sebastian Bach",
      d: "Wolfgang Amadeus Mozart"
    },
    bonneReponse: "b"
  },
  {
    question: "Quel pays a pour capitale Berlin ?",
    reponses: {
      a: "France",
      b: "Allemagne",
      c: "Autriche",
      d: "Belgique"
    },
    bonneReponse: "b"
  },
  {
    question: "Quelle est la plus grande planète du système solaire ?",
    reponses: {
      a: "Saturne",
      b: "Jupiter",
      c: "Mars",
      d: "Terre"
    },
    bonneReponse: "b"
  },
  {
    question: "Quelle est la capitale du Canada ?",
    reponses: {
      a: "Toronto",
      b: "Montreal",
      c: "Vancouver",
      d: "Ottawa"
    },
    bonneReponse: "d"
  },
  {
    question: "Qui a composé les Quatre Saisons ?",
    reponses: {
      a: "Ludwig van Beethoven",
      b: "Antonio Vivaldi",
      c: "Johann Sebastian Bach",
      d: "Wolfgang Amadeus Mozart"
    },
    bonneReponse: "b"
  },
  {
    question: "Quel pays a pour capitale Berlin ?",
    reponses: {
      a: "France",
      b: "Allemagne",
      c: "Autriche",
      d: "Belgique"
    },
    bonneReponse: "b"
  },
  {
    question: "Quelle est la plus grande planète du système solaire ?",
    reponses: {
      a: "Saturne",
      b: "Jupiter",
      c: "Mars",
      d: "Terre"
    },
    bonneReponse: "b"
  },
  {
    question: "Quel pays est connu comme le pays du Soleil-Levant ?",
    reponses: {
      a: "Inde",
      b: "Égypte",
      c: "Japon",
      d: "Australie"
    },
    bonneReponse: "c"
  },
  {
    question: "Qui a écrit 'L'Ingénu' ?",
    reponses: {
      a: "Voltaire",
      b: "Molière",
      c: "Victor Hugo",
      d: "Émile Zola"
    },
    bonneReponse: "a"
  },
  {
    question: "Dans quelle ville peut-on visiter la Tour Eiffel ?",
    reponses: {
      a: "Londres",
      b: "Berlin",
      c: "Paris",
      d: "Bruxelles"
    },
    bonneReponse: "c"
  },
  {
    question: "Quel est le plus long fleuve du monde ?",
    reponses: {
      a: "Nil",
      b: "Amazone",
      c: "Yangtsé",
      d: "Mississippi"
    },
    bonneReponse: "b"
  },
  {
    question: "Quel compositeur est célèbre pour la 'Lettre à Élise' ?",
    reponses: {
      a: "Frédéric Chopin",
      b: "Ludwig van Beethoven",
      c: "Wolfgang Amadeus Mozart",
      d: "Johann Sebastian Bach"
    },
    bonneReponse: "b"
  },
  {
    question: "Qui a peint 'La Nuit étoilée' ?",
    reponses: {
      a: "Pablo Picasso",
      b: "Leonardo da Vinci",
      c: "Vincent van Gogh",
      d: "Claude Monet"
    },
    bonneReponse: "c"
  },
  {
    question: "Quel est l'océan le plus profond du monde ?",
    reponses: {
      a: "Océan Atlantique",
      b: "Océan Indien",
      c: "Océan Arctique",
      d: "Océan Pacifique"
    },
    bonneReponse: "d"
  },
  {
    question: "Quelle structure est considérée comme la plus ancienne des sept merveilles du monde ?",
    reponses: {
      a: "La Statue de Zeus à Olympie",
      b: "Le Colosse de Rhodes",
      c: "La Grande Pyramide de Gizeh",
      d: "Le Phare d'Alexandrie"
    },
    bonneReponse: "c"
  },
  {
    question: "Quel dirigeant est connu pour avoir été le fondateur de l'Empire mongol ?",
    reponses: {
      a: "Gengis Khan",
      b: "Kubilai Khan",
      c: "Tamerlan",
      d: "Attila"
    },
    bonneReponse: "a"
  },
  {
    question: "Quelle est la capitale de la Nouvelle-Zélande ?",
    reponses: {
      a: "Auckland",
      b: "Christchurch",
      c: "Wellington",
      d: "Hamilton"
    },
    bonneReponse: "c"
  },
  {
    question: "Qui a écrit 'À la recherche du temps perdu' ?",
    reponses: {
      a: "Marcel Proust",
      b: "Victor Hugo",
      c: "Gustave Flaubert",
      d: "Honoré de Balzac"
    },
    bonneReponse: "a"
  },
  {
    question: "Quel élément a pour numéro atomique 79 ?",
    reponses: {
      a: "Fer",
      b: "Or",
      c: "Argent",
      d: "Plomb"
    },
    bonneReponse: "b"
  },
  {
    question: "Quelle ville est surnommée 'La Ville Lumière' ?",
    reponses: {
      a: "New York",
      b: "Paris",
      c: "Londres",
      d: "Tokyo"
    },
    bonneReponse: "b"
  },
  {
    question: "Qui est considéré comme le père de l'informatique ?",
    reponses: {
      a: "Charles Babbage",
      b: "Alan Turing",
      c: "Bill Gates",
      d: "Steve Jobs"
    },
    bonneReponse: "a"
  },
  {
    question: "Quel est le plus grand animal terrestre ?",
    reponses: {
      a: "Le rhinocéros blanc",
      b: "L'éléphant d'Afrique",
      c: "Le gorille",
      d: "Le tigre de Sibérie"
    },
    bonneReponse: "b"
  },
  {
    question: "Dans quel pays se trouve le Taj Mahal ?",
    reponses: {
      a: "Inde",
      b: "Pakistan",
      c: "Bangladesh",
      d: "Népal"
    },
    bonneReponse: "a"
  }
  // Ajoutez d'autres questions ici
];
