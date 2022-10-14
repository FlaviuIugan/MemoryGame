import "./GameTable.css";
import { useState, useEffect } from "react";
import Card from "./Card.js";

const GameTable = ({
  gameImages,
  gameCardBackground,
  setGameImages,
  setTurns,
}) => {
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // nu din cauza asta merge greutz

  const handleChoice = (card, key) => {
    console.log(card, key);
    setGameImages((prevState) => {
      return prevState.map((image) => {
        if (image.key === key) {
          return { ...image, isMatched: true };
        } else {
          return { ...image };
        }
      });
    });
    choiceOne ? setChoiceTwo({ card, key }) : setChoiceOne({ card, key });
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);

    // prepare turn increase
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.card === choiceTwo.card) {
        console.log("cards matched");
        setTurns((prevState) => prevState + 1);
      } else {
        setTimeout(() => {
          setGameImages((prevState) => {
            return prevState.map((image) => {
              if (image.key === choiceOne.key || image.key === choiceTwo.key) {
                return { ...image, isMatched: false };
              } else {
                return { ...image };
              }
            });
          });
        }, 1000);
        setTurns((prevState) => prevState + 1);
      }
      resetTurn();
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="card-grid">
      {gameImages.map((image) => (
        <Card
          key={image.key}
          image={image}
          gameCardBackground={gameCardBackground}
          handleChoice={handleChoice}
        />
      ))}
    </div>
  );
};

export default GameTable;
