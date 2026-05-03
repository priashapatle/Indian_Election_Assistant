import React, { useState } from 'react';

const cardData = [
  {
    id: 1,
    front: "EVM",
    back: "Electronic Voting Machine: A device used to record votes electronically, replacing the old paper ballot system. It consists of a Control Unit and a Balloting Unit.",
    hint: "Click to flip for full form"
  },
  {
    id: 2,
    front: "VVPAT",
    back: "Voter Verifiable Paper Audit Trail: A machine attached to the EVM that prints a slip showing the candidate you voted for. The slip is visible for 7 seconds before dropping into a sealed box.",
    hint: "Click to flip for full form"
  },
  {
    id: 3,
    front: "NOTA",
    back: "None of the Above: A ballot option allowing voters to indicate their disapproval of all the candidates in a voting system.",
    hint: "Click to flip for full form"
  },
  {
    id: 4,
    front: "EPIC",
    back: "Elector's Photo Identity Card: Commonly known as the Voter ID card. It is issued by the ECI to eligible voters to prevent electoral fraud.",
    hint: "Click to flip for full form"
  },
  {
    id: 5,
    front: "ECI",
    back: "Election Commission of India: The autonomous constitutional authority responsible for administering election processes in India at national, state and district levels.",
    hint: "Click to flip for full form"
  },
  {
    id: 6,
    front: "MCC",
    back: "Model Code of Conduct: A set of guidelines issued by the ECI for conduct of political parties and candidates during elections mainly with respect to speeches, polling day, polling booths, and portfolios.",
    hint: "Click to flip for full form"
  }
];

function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flashcard-scene" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`flashcard glass-panel ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-face front">
          <h2>{card.front}</h2>
          <span className="hint">{card.hint}</span>
        </div>
        <div className="card-face back">
          <h2>{card.front}</h2>
          <p>{card.back}</p>
        </div>
      </div>
    </div>
  );
}

export default function Flashcards() {
  return (
    <div className="flashcards-grid animate-fade-in">
      {cardData.map(card => (
        <Flashcard key={card.id} card={card} />
      ))}
    </div>
  );
}
