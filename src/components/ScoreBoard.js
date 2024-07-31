
const ScoreBoard = ({ score, timer }) => {
  return (
    <div className="score-board">
      <h2>Score: {score}</h2>
      <h3>Time: {Math.floor(timer / 60)}:{timer % 60}</h3>
    </div>
  );
};


export default ScoreBoard;
