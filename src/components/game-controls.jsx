const GameControls = ({ isOn, play, startHandle, closeHandle }) => {
    return (
      <>
        {isOn && !play.isDisplay && !play.userPlay && play.score ? (
          <div className="lost">
            <div>Resultado final: {play.score - 1} </div>
            <button onClick={closeHandle} className="close">Aceptar</button>
          </div>
        ) : null}
        
        {!isOn && !play.score && (
          <button onClick={startHandle} className="startButton">
            Empezar
          </button>
        )}
      </>
    );
  };
  
  export default GameControls;