import "./Card.css";
import { useState, useEffect } from "react";

export default function Card({ image, gameCardBackground, handleChoice }) {
  // const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    handleChoice(image.card, image.key);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div>
        <img
          className="front"
          src={!image.isMatched ? gameCardBackground : image.card}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
