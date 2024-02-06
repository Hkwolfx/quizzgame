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
    bonneReponse: "c",
  },
  {
    question: "Qui a écrit 1984?",
    reponses: {
      a: "George Orwell",
      b: "Aldous Huxley",
      c: "William Shakespeare",
      d: "Mark Twain",
    },
    bonneReponse: "a",
  },
  {
    question: "Quel est l'élément chimique de symbole 'O'?",
    reponses: { a: "Or", b: "Osmium", c: "Oxygène", d: "Oganesson" },
    bonneReponse: "c",
  },
  {
    question: "Dans quel pays se trouve la ville de Kyoto?",
    reponses: { a: "Chine", b: "Japon", c: "Corée du Sud", d: "Thaïlande" },
    bonneReponse: "b",
  },
  {
    question: "Qui a peint La Nuit étoilée?",
    reponses: {
      a: "Pablo Picasso",
      b: "Leonardo Da Vinci",
      c: "Vincent Van Gogh",
      d: "Claude Monet",
    },
    bonneReponse: "c",
  },
  {
    question: "L'eau bout à 100 degrés Celsius.",
    reponses: { a: "Vrai", b: "Faux" },
    bonneReponse: "a",
  },
  {
    question: "Le soleil tourne autour de la Terre.",
    reponses: { a: "Vrai", b: "Faux" },
    bonneReponse: "b",
  },
  {
    question: "Le cheval blanc d'Henri IV est blanc.",
    reponses: { a: "Vrai", b: "Faux" },
    bonneReponse: "a",
  },
  {
    question: "Le son va plus vite dans l'air.",
    reponses: { a: "Vrai", b: "Faux" },
    bonneReponse: "b",
  },
  {
    question: "les UV traversent les nuages.",
    reponses: { a: "Vrai", b: "Faux" },
    bonneReponse: "a",
  },
  {
    question: "Créateur de Unus Annus?",
    reponses: {
      a: "Mark & Ethan",
      b: "Jake & Logan",
      c: "Dan & Phil",
      d: "Rhett & Link",
    },
    bonneReponse: "a",
  },
  {
    question: "Origine du Renegade sur TikTok?",
    reponses: {
      a: "Addison Rae",
      b: "Charli D'Amelio",
      c: "Jalaiah Harmon",
      d: "Bella Poarch",
    },
    bonneReponse: "c",
  },
  {
    question: "Gourou de Minecraft sur Twitch?",
    reponses: { a: "Ninja", b: "Pokimane", c: "TommyInnit", d: "Shroud" },
    bonneReponse: "c",
  },
  {
    question: "Fondateur du Dream SMP?",
    reponses: { a: "Dream", b: "George", c: "Sapnap", d: "Wilbur Soot" },
    bonneReponse: "a",
  },
  {
    question: "Précurseur de la dance Renegade?",
    reponses: {
      a: "Jalaiah Harmon",
      b: "Charli D'Amelio",
      c: "Addison Rae",
      d: "Bella Poarch",
    },
    bonneReponse: "a",
  },
  {
    question: "Animateur de Meme Review?",
    reponses: {
      a: "PewDiePie",
      b: "Jacksepticeye",
      c: "Markiplier",
      d: "MrBeast",
    },
    bonneReponse: "a",
  },
  {
    question: "Popularisateur de Among Us?",
    reponses: {
      a: "xQc",
      b: "Disguised Toast",
      c: "Pokimane",
      d: "Corpse Husband",
    },
    bonneReponse: "b",
  },
  {
    question: "Auteur de Everyday Bro?",
    reponses: {
      a: "Logan Paul",
      b: "Jake Paul",
      c: "David Dobrik",
      d: "Casey Neistat",
    },
    bonneReponse: "b",
  },
  {
    question: "Qui commence par ses lives Hi Sisters?",
    reponses: {
      a: "James Charles",
      b: "Jeffree Star",
      c: "Nikita Dragun",
      d: "Tati Westbrook",
    },
    bonneReponse: "a",
  },
  {
    question: "Pionnier de la Cradles dance sur TikTok?",
    reponses: {
      a: "Tony Lopez",
      b: "Michael Le",
      c: "Spencer Knight",
      d: "Rod Contreras",
    },
    bonneReponse: "b",
  },
  {
    question: "Inventeur du 'Dab'?",
    reponses: { a: "Logan Paul", b: "PewDiePie", c: "Squeezie", d: "Migos" },
    bonneReponse: "d",
  },
  {
    question: "Star de TikTok et boxeur?",
    reponses: { a: "Jake Paul", b: "KSI", c: "Logan Paul", d: "AnEsonGib" },
    bonneReponse: "c",
  },
  {
    question: "‘Roi du YouTube français’?",
    reponses: { a: "Cyprien", b: "Norman", c: "Squeezie", d: "Amixem" },
    bonneReponse: "c",
  },
  {
    question: "Streamer célèbre pour ses raids sur Twitch?",
    reponses: { a: "xQc", b: "Zerator", c: "Sardoche", d: "TheGrefg" },
    bonneReponse: "b",
  },
  {
    question: "TikTokeuse connue pour ses danses?",
    reponses: {
      a: "Addison Rae",
      b: "Charli D'Amelio",
      c: "Dixie D'Amelio",
      d: "Loren Gray",
    },
    bonneReponse: "b",
  },
  {
    question: "YouTubeur spécialiste en survivalisme?",
    reponses: {
      a: "Fritz Meinecke",
      b: "Primitive Technology",
      c: "Survival Lilly",
      d: "My Self Reliance",
    },
    bonneReponse: "b",
  },
  {
    question: "Qui a popularisé le terme 'E-boy'?",
    reponses: {
      a: "Chase Hudson",
      b: "Noen Eubanks",
      c: "Jacob Sartorius",
      d: "Cameron Dallas",
    },
    bonneReponse: "a",
  },
  {
    question: "Première 'YouTubeuse' beauté française?",
    reponses: { a: "EnjoyPhoenix", b: "Sananas", c: "Horia", d: "Natoo" },
    bonneReponse: "a",
  },
  {
    question: "Créateur de 'Salut les geeks'?",
    reponses: {
      a: "MisterJDay",
      b: "Joueur Du Grenier",
      c: "Mathieu Sommet",
      d: "Antoine Daniel",
    },
    bonneReponse: "c",
  },
  {
    question: "Phénomène musical découvert sur YouTube?",
    reponses: {
      a: "Justin Bieber",
      b: "Billie Eilish",
      c: "Shawn Mendes",
      d: "Lil Nas X",
    },
    bonneReponse: "a",
  },
  {
    question: "Qui a lancé le 'Hot Ones'?",
    reponses: {
      a: "Sean Evans",
      b: "Gordon Ramsay",
      c: "Jamie Oliver",
      d: "Guy Fieri",
    },
    bonneReponse: "a",
  },
  {
    question: "Pionnier du 'Let's Play' sur YouTube?",
    reponses: {
      a: "Markiplier",
      b: "PewDiePie",
      c: "Jacksepticeye",
      d: "TheRadBrad",
    },
    bonneReponse: "b",
  },
  {
    question: "Star de TikTok pour ses lip-syncs?",
    reponses: {
      a: "Loren Gray",
      b: "Bella Poarch",
      c: "Charli D'Amelio",
      d: "Zach King",
    },
    bonneReponse: "b",
  },
  {
    question: "Innovateur de vlogs sur YouTube?",
    reponses: {
      a: "Casey Neistat",
      b: "David Dobrik",
      c: "Logan Paul",
      d: "PewDiePie",
    },
    bonneReponse: "a",
  },
  {
    question: "Champion de 'Fortnite' sur Twitch?",
    reponses: { a: "Ninja", b: "Tfue", c: "Bugha", d: "Myth" },
    bonneReponse: "c",
  },
  {
    question: "TikTok pour défis de danse?",
    reponses: {
      a: "Addison Rae",
      b: "Charli D'Amelio",
      c: "Dixie D'Amelio",
      d: "Les Twins",
    },
    bonneReponse: "b",
  },
  {
    question: "Analyse de films sur YouTube?",
    reponses: {
      a: "CinemaSins",
      b: "Screen Junkies",
      c: "MrBeast",
      d: "Nerdwriter1",
    },
    bonneReponse: "d",
  },
  {
    question: "Expert en 'speedrun' sur YouTube?",
    reponses: { a: "Dream", b: "Karl Jobst", c: "Cheese", d: "Summoning Salt" },
    bonneReponse: "d",
  },
  {
    question: "YouTube pour critiques tech?",
    reponses: {
      a: "Linus Tech Tips",
      b: "Marques Brownlee",
      c: "Unbox Therapy",
      d: "Dave Lee",
    },
    bonneReponse: "b",
  },
  {
    question: "Streamer Twitch osée pour 'Just Chatting'?",
    reponses: { a: "Pokimane", b: "xQc", c: "Amouranth", d: "Ludwig" },
    bonneReponse: "c",
  },
  {
    question: "Qui anime 'Last Week Tonight'?",
    reponses: {
      a: "John Oliver",
      b: "Stephen Colbert",
      c: "Trevor Noah",
      d: "Jimmy Fallon",
    },
    bonneReponse: "a",
  },
  {
    question: "Créateur de contenu VR célèbre?",
    reponses: {
      a: "Jacksepticeye",
      b: "Nathie",
      c: "PewDiePie",
      d: "Markiplier",
    },
    bonneReponse: "b",
  },
  {
    question: "Influenceuse mode sur TikTok?",
    reponses: {
      a: "Emma Chamberlain",
      b: "Addison Rae",
      c: "Wisdom Kaye",
      d: "Charli D'Amelio",
    },
    bonneReponse: "c",
  },
  {
    question: "YouTubeur spécialisé en science?",
    reponses: {
      a: "Vsauce",
      b: "Mark Rober",
      c: "AsapSCIENCE",
      d: "SmarterEveryDay",
    },
    bonneReponse: "a",
  },
  {
    question: "Streamer Twitch le plus fort de League of Legends?",
    reponses: { a: "Tyler1", b: "Faker", c: "Sneaky", d: "Doublelift" },
    bonneReponse: "b",
  },
  {
    question: "Commentateur politique sur YouTube?",
    reponses: {
      a: "Philip DeFranco",
      b: "Steven Crowder",
      c: "Kyle Kulinski",
      d: "Ben Shapiro",
    },
    bonneReponse: "c",
  },
  {
    question: "Qui a popularisé 'Ok Boomer' sur TikTok?",
    reponses: {
      a: "Neekolul",
      b: "Bella Poarch",
      c: "Brittany Broski",
      d: "Dixie D'Amelio",
    },
    bonneReponse: "a",
  },
  {
    question: "Streamer spécialisé en 'Minecraft Hardcore'?",
    reponses: {
      a: "Philza",
      b: "Dream",
      c: "Technoblade",
      d: "GeorgeNotFound",
    },
    bonneReponse: "a",
  },
  {
    question: "Expert en 'life hacks' sur YouTube?",
    reponses: {
      a: "5-Minute Crafts",
      b: "Troom Troom",
      c: "MrGear",
      d: "CrazyRussianHacker",
    },
    bonneReponse: "d",
  },
  {
    question: "TikTokeur connu pour ses illusions?",
    reponses: {
      a: "Zach King",
      b: "Kevin Parry",
      c: "Johannes Bartl",
      d: "Julius Dein",
    },
    bonneReponse: "a",
  },
  {
    question: "Reine du 'cleaning' sur TikTok?",
    reponses: {
      a: "Mrs Hinch",
      b: "Marie Kondo",
      c: "Vanessa Amaro",
      d: "Sophie Hinchliffe",
    },
    bonneReponse: "d",
  },
  {
    question: "Expert en survie sur YouTube?",
    reponses: {
      a: "Bear Grylls",
      b: "Survival Russia",
      c: "Joe Robinet",
      d: "Cody Lundin",
    },
    bonneReponse: "c",
  },
  {
    question: "TikTokeur célèbre pour ses voix off?",
    reponses: {
      a: "Chris Collins",
      b: "Brock Baker",
      c: "Spencewuah",
      d: "Charlie D'Amelio",
    },
    bonneReponse: "b",
  },
  {
    question: "YouTubeur voyageur en van?",
    reponses: {
      a: "Eamon & Bec",
      b: "Max & Lee",
      c: "Jinti Fell",
      d: "Kombi Life",
    },
    bonneReponse: "a",
  },
  {
    question: "YouTube pour DIY et bricolage?",
    reponses: {
      a: "DIY Perks",
      b: "The Q",
      c: "I Like To Make Stuff",
      d: "LaurDIY",
    },
    bonneReponse: "c",
  },
  {
    question: "Gourou de fitness sur YouTube?",
    reponses: {
      a: "Chloe Ting",
      b: "Pamela Reif",
      c: "Jeff Nippard",
      d: "Jeremy Ethier",
    },
    bonneReponse: "a",
  },
  {
    question: "Star TikTok pour conseils financiers?",
    reponses: {
      a: "Graham Stephan",
      b: "Andrei Jikh",
      c: "Nate O'Brien",
      d: "Erika Kullberg",
    },
    bonneReponse: "a",
  },
  {
    question: "Cuisinier célèbre sur Twitch?",
    reponses: {
      a: "Joshua Weissman",
      b: "Binging with Babish",
      c: "Rosanna Pansino",
      d: "TheHungerService",
    },
    bonneReponse: "d",
  },
  {
    question: "YouTubeur pour critiques de cinéma?",
    reponses: {
      a: "Chris Stuckmann",
      b: "Jeremy Jahns",
      c: "CinemaSins",
      d: "RedLetterMedia",
    },
    bonneReponse: "a",
  },
  {
    question: "TikTokeur pour sketchs humoristiques?",
    reponses: {
      a: "Brent Rivera",
      b: "King Bach",
      c: "Zach King",
      d: "Sarah Cooper",
    },
    bonneReponse: "b",
  },
  // Ajoutez d'autres questions ici
];
