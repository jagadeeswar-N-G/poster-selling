export const PRODUCT_CATOGORIES = [
  {
    label: "Hollyhood",
    value: "hollywood" as const, //this is like a keyword, that we can put in any url
    featured: [
      {
        name: "Oppenheimer",
        price: 799,
        imageSrc: "/nav/Hollyhood/oppenheimer.jpg",
        description:
          "Oppenheimer is a Christopher Nolan-directed biographical drama focusing on J. Robert Oppenheimer, the physicist behind the atomic bomb. The film delves into Oppenheimer's moral struggles and ethical dilemmas, offering a nuanced exploration of the man behind the scientific breakthrough that altered the course of history.",
      },
      {
        name: "Interstallar",
        price: 699,
        imageSrc: "/nav/Hollyhood/interstallar.jpg",
        description:
          "Interstellar, directed by Christopher Nolan, is an epic space odyssey. Starring Matthew McConaughey, the film follows a group of astronauts on a perilous mission to find a new habitable planet for humanity. With breathtaking visuals and a poignant exploration of love and time dilation, Interstellar is a cinematic journey through cosmic wonders.",
      },
      {
        name: "Inception",
        price: 399,
        imageSrc: "/nav/Hollyhood/inception.jpg",
        description:
          "Christopher Nolan's Inception is a mesmerizing sci-fi thriller starring Leonardo DiCaprio. The film explores the intricacies of dream infiltration for corporate espionage. With a gripping narrative, stunning visuals, and a haunting score, Inception blurs the line between reality and dreams, delivering a mind-bending cinematic experience.",
      },
    ],
  },
  {
    label: "Bollyhood",
    value: "bollyhood" as const, //this is like a keyword, that we can put in any url
    featured: [
      {
        name: "Animal",
        price: 199,
        imageSrc: "/nav/Bollyhood/animal.jpg",
        description:
          "Animal is an intense thriller film that explores the dark consequences of human-animal experimentation. Directed by sandeep reddy vanga, the movie delves into ethical dilemmas and the blurred line between humans and animals.",
      },
      {
        name: "Devdas",
        price: 399,
        imageSrc: "/nav/Bollyhood/devdas.jpg",
        description:
          "Devdas is a classic Bollywood film directed by Sanjay Leela Bhansali. It depicts the tragic love story of Devdas, played by Shah Rukh Khan, and Paro portrayed by Aishwarya Rai. The movie explores themes of unrequited love, societal expectations, and self-destructive behavior, set against opulent backdrops and emotional intensity.",
      },
      {
        name: "Sholay",
        price: 599,
        imageSrc: "/nav/Bollyhood/sholay.jpg",
        description:
          "Sholay is a classic Bollywood film directed by Ramesh Sippy. Released in 1975, it's an iconic action-adventure featuring an ensemble cast, including Amitabh Bachchan and Dharmendra. The story revolves around two ex-cons hired to combat a ruthless dacoit. Renowned for its memorable characters, dialogues, and timeless music, Sholay remains a cinematic masterpiece.",
      },
    ],
  },
];
