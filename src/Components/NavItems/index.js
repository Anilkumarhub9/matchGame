import './index.css'

const NavItems = props => {
  const {details, time} = props
  return (
    <div className="lists">
      <li className="list">
        <p className="score">Score: {details}</p>
      </li>
      <li className="list">
        <div className="time-logo-time">
          <img
            className="time-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            alt="timer"
          />
          <p className="time">{time} Sec</p>
        </div>
      </li>
    </div>
  )
}
export default NavItems
