const ScoreDisplay = ({ isOn, play }) => {
    return isOn && (play.isDisplay || play.userPlay) ? (
      <div className="score">{play.score}</div>
    ) : null;
  };
  
  export default ScoreDisplay;