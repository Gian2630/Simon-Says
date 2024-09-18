import React from "react";

const DifficultySelector = ({ setDifficulty, selectedDifficulty, isOn }) => {
  return (
    <div className="difficulty-selector">
      <h3>Selecciona la dificultad:</h3>
      <button
        onClick={() => setDifficulty(1)}
        disabled={isOn}
        className={selectedDifficulty === 1 ? "active" : ""}
      >
        Fácil
      </button>
      <button
        onClick={() => setDifficulty(2)}
        disabled={isOn}
        className={selectedDifficulty === 2 ? "active" : ""}
      >
        Normal
      </button>
      <button
        onClick={() => setDifficulty(3)}
        disabled={isOn}
        className={selectedDifficulty === 3 ? "active" : ""}
      >
        Difícil
      </button>
      <button
        onClick={() => setDifficulty(5)}
        disabled={isOn}
        className={selectedDifficulty === 5 ? "active" : ""}
      >
        Extremo
      </button>
    </div>
  );
};

export default DifficultySelector;