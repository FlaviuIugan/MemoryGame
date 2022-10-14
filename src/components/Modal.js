import "./Modal.css";
import { useState } from "react";
import IMAGES from "../utils/ImagesSrc";
import ICONS from "../utils/Icons.js";

const Modal = ({
  setIsModal,
  setGameCardBackground,
  shuffleCards,
  setGameImages,
}) => {
  const [items, setItems] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [cardsBackground, setCardBackground] = useState([ICONS[0], ICONS[1]]);

  const [cardsPicture, setCardsPicture] = useState([
    ICONS[2],
    ICONS[3],
    ICONS[4],
  ]);

  const [dificulty, setDificulty] = useState([ICONS[5], ICONS[6], ICONS[7]]);

  const handleBackgroundCard = (id) => {
    if (id.tag === "starShip") {
      setGameCardBackground([IMAGES.cardsBackground[0]]);
    } else setGameCardBackground([IMAGES.cardsBackground[1]]);
    setCardBackground((prevState) =>
      prevState.filter((element) => element.key === id.key)
    );
    shuffleCards();
    setTimeout(() => {
      setIsModal(false);
    }, 400);
  };

  const handlePictureCard = (id, e) => {
    if (items) {
      e.currentTarget.className.baseVal += " checkedCard";
      const choices = id.tag;
      setGameImages((prevState) => [...prevState, ...IMAGES[choices]]);
      setItems(items - 1);
    }
  };

  const handleSetDifficulty = (el) => {
    setItems(el.tag);
    setDificulty((prevState) =>
      prevState.filter((element) => element.key === el.key)
    );
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>1. Choose Dificulty</h2>
        {dificulty.map((element) => (
          <element.name
            key={element.key}
            className="fontsIcon"
            onClick={() => {
              handleSetDifficulty(element);
            }}
          />
        ))}

        <h2>2. Choose {items} cards pictures</h2>
        {cardsPicture.map((element) => (
          <element.name
            key={element.key}
            tag={element.tag}
            className="fontsIcon"
            onClick={(e) => handlePictureCard(element, e)}
          />
        ))}
        <h2>3. Chose Background Card</h2>
        {cardsBackground.map((element) => (
          <element.name
            key={element.key}
            className="fontsIcon"
            tag={element.tag}
            onClick={() => handleBackgroundCard(element)}
          />
        ))}
      </div>
    </div>
  );
};

export default Modal;
