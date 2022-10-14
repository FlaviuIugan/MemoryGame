import { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Button from "./components/Button";
import Footer from "./components/Footer";
import GameTable from "./components/GameTable";
import Modal from "./components/Modal";

import { matchPath } from "react-router-dom";

function App() {
  const [isModal, setIsModal] = useState(true);
  const [turns, setTurns] = useState(0);
  // GAME IMAGES

  const [gameImages, setGameImages] = useState([]);

  // CARD BACKGROUND

  const [gameCardBackground, setGameCardBackground] = useState([]);

  const shuffleCards = () => {
    const shuffledCards = [...gameImages, ...gameImages]
      .sort(() => Math.random() - 0.5)
      .map((card, i) => {
        return {
          card,
          isMatched: false,
          key: i,
        };
      });

    setGameImages(shuffledCards);
  };

  return (
    <>
      {!isModal && (
        <>
          <Header />
          <Button
            setIsModal={setIsModal}
            setTurns={setTurns}
            setGameImages={setGameImages}
            setGameCardBackground={setGameCardBackground}
          />
          <GameTable
            setTurns={setTurns}
            gameImages={gameImages}
            gameCardBackground={gameCardBackground}
            setGameImages={setGameImages}
          />
          <Footer turns={turns} />
        </>
      )}

      {isModal && (
        <Modal
          setGameImages={setGameImages}
          setGameCardBackground={setGameCardBackground}
          setIsModal={setIsModal}
          shuffleCards={shuffleCards}
        />
      )}
    </>
  );
}

export default App;
