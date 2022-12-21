import {Component} from 'react'
import TabsItem from '../TabsItem'
import PuzzleItem from '../PuzzleItem'
import Result from '../Result'
import NavItems from '../NavItems'
import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    seconds: 60,
    timer: '',
    type: 'FRUIT',
    imageUrl: '',
    isActive: true,
  }

  componentDidMount() {
    this.getImage()
    this.renderTime()
  }

  getImage = () => {
    const number = Math.floor(Math.random() * 20)
    const {imgData} = this.props
    const data = imgData[number]
    const image = data.imageUrl
    this.setState({imageUrl: image})
  }

  update = () => {
    const {seconds, timer} = this.state
    if (seconds === 0) {
      clearInterval(timer)
      this.setState({isActive: false})
    } else {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1,
      }))
    }
  }

  renderTime = () => {
    const timerId = setInterval(this.update, 1000)
    this.setState({timer: timerId})
  }

  getFruitId = Id => {
    this.setState({type: Id})
  }

  checkImage = url => {
    const {imageUrl, timer} = this.state
    console.log(imageUrl)
    if (url === imageUrl) {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.getImage()
    } else {
      clearInterval(timer)
      this.setState({isActive: false})
    }
  }

  playRepeat = () => {
    this.setState({score: 0, isActive: true, seconds: 60})
    this.renderTime()
  }

  render() {
    const {score, seconds, type, imageUrl, isActive} = this.state
    const {tabsData, imgData} = this.props
    const filter = imgData.filter(eachItem => eachItem.category === type)

    return (
      <div>
        <nav className="navbar">
          <div>
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
              alt="website logo"
            />
          </div>
          <div className="score-timer">
            <ul>
              <NavItems details={score} time={seconds} />
            </ul>
          </div>
        </nav>
        <div className="container">
          {isActive ? (
            <div>
              <div className="image-container">
                <img className="random-image" src={imageUrl} alt="match" />
              </div>
              <ul className="tabs-list">
                {tabsData.map(eachItem => (
                  <TabsItem
                    details={eachItem}
                    key={eachItem.tabId}
                    onClicked={this.getFruitId}
                    isActive={eachItem.tabId === type}
                  />
                ))}
              </ul>
              <ul className="thumb-container">
                {filter.map(eachItem => (
                  <PuzzleItem
                    puzzleDetails={eachItem}
                    key={eachItem.id}
                    onClicked={this.checkImage}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <Result details={score} onClicked={this.playRepeat} />
          )}
        </div>
      </div>
    )
  }
}

export default MatchGame
