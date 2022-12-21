import './index.css'

const PuzzleItem = props => {
  const {puzzleDetails, onClicked} = props
  const {imageUrl, thumbnailUrl} = puzzleDetails

  const sendUrl = () => {
    onClicked(imageUrl)
  }
  return (
    <li className="thumb-list">
      <button type="button" className="thumb-button">
        <img
          className="thumb"
          src={thumbnailUrl}
          alt="thumbnail"
          onClick={sendUrl}
        />
      </button>
    </li>
  )
}

export default PuzzleItem
