import "./Card.css";

export default function Card({ image, gameCardBackground, handleChoice }) {
  const handleClick = (e) => {
    console.log("clicked");
    handleChoice(image.card, image.key);
  };

  return (
    <div className="card" onClick={!image.click ? handleClick : null}>
      <div>
        <img
          className="front"
          src={!image.isMatched ? gameCardBackground : image.card}
          alt=""
        />
      </div>
    </div>
  );
}
