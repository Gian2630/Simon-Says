import "./App.css";
import { useState } from "react";
import CardWrapper from "./components/card-wrapper";
import GameControls from "./components/game-controls";
import ScoreDisplay from "./components/score-display";
import DifficultySelector from "./components/difficulty-selector";
import GameLogic from "./util/game-logic";

function App() {
  const [isOn, setIsOn] = useState(false)
  const [difficulty, setDifficulty] = useState(1)
  const colorList = ["green", "red", "yellow", "blue"]

  const { play, flashColor, cardClickHandle } = GameLogic(
    colorList,
    difficulty,
    isOn
  );

  function startHandle() {
    setIsOn(true);
  }

  function closeHandle() {
    setIsOn(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Simon Says</h1>
        {!isOn && (
          <DifficultySelector
            setDifficulty={setDifficulty}
            selectedDifficulty={difficulty}
            isOn={isOn}
          />
        )}
        {isOn && (
          <h2 className="difficulty-level">
            Dificultad:{" "}
            {difficulty === 1
              ? "Fácil"
              : difficulty === 2
              ? "Normal"
              : difficulty === 3
              ? "Difícil"
              : "Extremo"}
          </h2>
        )}

        <div className="game-container">
          <CardWrapper
            colorList={colorList}
            flashColor={flashColor}
            onCardClick={cardClickHandle}
          />

          <GameControls
            isOn={isOn}
            play={play}
            startHandle={startHandle}
            closeHandle={closeHandle}
          />

          <ScoreDisplay isOn={isOn} play={play} />
        </div>
      </header>
    </div>
  );
}

export default App;