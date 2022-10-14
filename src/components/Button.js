import "./Button.css";

const Button = ({
  setIsModal,
  setGameImages,
  setGameCardBackground,
  setTurns,
}) => {
  return (
    <button
      className="btn"
      onClick={() => {
        setIsModal(true);
        setGameImages([]);
        setGameCardBackground([]);
        setTurns(0);
      }}
    >
      New Game
    </button>
  );
};

export default Button;
