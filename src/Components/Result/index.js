import './index.css'

const Result = props => {
  const {details, onClicked} = props

  const playAgain = () => {
    onClicked()
  }
  return (
    <div className="result-container">
      <img
        className="troph"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
        alt="trophy"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="score-number">{details}</p>
      <button type="button" className="button" onClick={playAgain}>
        <img
          className="reset"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default Result
