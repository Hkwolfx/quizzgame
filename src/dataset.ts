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
  },
  
{
    question: "Qui a fondé la compagnie Apple?",
    reponses: { A: "réponse A -> Bill Gates et Paul Allen", B: "réponse B -> Steve Jobs et Steve Wozniak", C: "réponse C -> Larry Page et Sergey Brin", D: "réponse D -> Mark Zuckerberg" },
    bonneReponse: "B",
  },
  {
    question: "Quel océan borde la côte ouest des États-Unis?",
    reponses: { A: "réponse A -> Océan Atlantique", B: "réponse B -> Océan Indien", C: "réponse C -> Océan Arctique", D: "réponse D -> Océan Pacifique" },
    bonneReponse: "D",
  },
  {
    question: "Quelle est la durée d'un match de football (sans prolongations)?",
    reponses: { A: "réponse A -> 60 minutes", B: "réponse B -> 90 minutes", C: "réponse C -> 80 minutes", D: "réponse D -> 100 minutes" },
    bonneReponse: "B",
  },
  {
    question: "Quel est l'élément chimique le plus abondant dans l'univers?",
    reponses: { A: "réponse A -> Oxygène", B: "réponse B -> Hydrogène", C: "réponse C -> Carbone", D: "réponse D -> Fer" },
    bonneReponse: "B",
  },
  {
    question: "Dans quelle ville se trouve la statue de la Liberté?",
    reponses: { A: "réponse A -> Boston", B: "réponse B -> Philadelphia", C: "réponse C -> New York", D: "réponse D -> Washington D.C." },
    bonneReponse: "C",
  },
  {
    question: "Quelle série télévisée a créé le personnage de Walter White?",
    reponses: { A: "réponse A -> Game of Thrones", B: "réponse B -> Breaking Bad", C: "réponse C -> Mad Men", D: "réponse D -> The Wire" },
    bonneReponse: "B",
  },
  {
    question: "Qui a gagné le premier prix Nobel de la paix?",
    reponses: { A: "réponse A -> Albert Schweitzer", B: "réponse B -> Henry Dunant", C: "réponse C -> Martin Luther King Jr.", D: "réponse D -> Mother Teresa" },
    bonneReponse: "B",
  },
  {
    question: "Quel pays est le plus peuplé du monde?",
    reponses: { A: "réponse A -> États-Unis", B: "réponse B -> Inde", C: "réponse C -> Chine", D: "réponse D -> Indonésie" },
    bonneReponse: "C",
  },
  {
    question: "Quel est le plus haut sommet du monde?",
    reponses: { A: "réponse A -> K2", B: "réponse B -> Mont Everest", C: "réponse C -> Mont Kilimandjaro", D: "réponse D -> Mont Blanc" },
    bonneReponse: "B",
  },
  {
    question: "Quelle est la plus longue rivière de France?",
    reponses: { A: "réponse A -> La Loire", B: "réponse B -> La Seine", C: "réponse C -> Le Rhône", D: "réponse D -> La Garonne" },
    bonneReponse: "A",
  },
  {
    question: "Qui était le roi soleil ?",
    reponses: { A: "réponse A -> Henri IV", B: "réponse B -> François Ier", C: "réponse C -> Louis XIV", D: "réponse D -> Charles de Gaulle" },
    bonneReponse: "C",
  },
  {
    question: "Quelle est la spécialité culinaire de la ville de Lyon ?",
    reponses: { A: "réponse A -> La bouillabaisse", B: "réponse B -> Le cassoulet", C: "réponse C -> La quenelle", D: "réponse D -> Le coq au vin" },
    bonneReponse: "C",
  },
  {
    question: "Quel musée français abrite la Joconde ?",
    reponses: { A: "réponse A -> Le musée d'Orsay", B: "réponse B -> Le Louvre", C: "réponse C -> Le Centre Pompidou", D: "réponse D -> Le musée Rodin" },
    bonneReponse: "B",
  },
  {
    question: "Dans quelle région se trouve le Mont Saint-Michel ?",
    reponses: { A: "réponse A -> Normandie", B: "réponse B -> Bretagne", C: "réponse C -> Pays de la Loire", D: "réponse D -> Nouvelle-Aquitaine" },
    bonneReponse: "A",
  },
  {
    question: "Quelle ville est surnommée la capitale des Gaules ?",
    reponses: { A: "réponse A -> Marseille", B: "réponse B -> Lyon", C: "réponse C -> Paris", D: "réponse D -> Lille" },
    bonneReponse: "B",
  },
  {
    question: "Quelle est la date de la prise de la Bastille, marquant le début de la Révolution Française ?",
    reponses: { A: "réponse A -> 14 juillet 1789", B: "réponse B -> 5 mai 1789", C: "réponse C -> 26 août 1789", D: "réponse D -> 9 novembre 1799" },
    bonneReponse: "A",
  },
  {
    question: "Qui a écrit 'Les Misérables' ?",
    reponses: { A: "réponse A -> Émile Zola", B: "réponse B -> Victor Hugo", C: "réponse C -> Alexandre Dumas", D: "réponse D -> Gustave Flaubert" },
    bonneReponse: "B",
  },
  {
    question: "Quelle est la plus haute montagne de France ?",
    reponses: { A: "réponse A -> Le Mont Blanc", B: "réponse B -> Le Pic du Midi", C: "réponse C -> Le Mont Ventoux", D: "réponse D -> Le Puy de Dôme" },
    bonneReponse: "A",
  },
  {
    question: "Quel festival de cinéma se déroule annuellement sur la Côte d'Azur ?",
    reponses: { A: "réponse A -> Le Festival de Cannes", B: "réponse B -> La Berlinale", C: "réponse C -> Le Festival de Venise", D: "réponse D -> Le Sundance Film Festival" },
    bonneReponse: "A",
  }
   // Ajoutez d'autres questions ici
];
