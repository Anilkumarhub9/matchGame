import './index.css'

const TabsItem = props => {
  const {details, onClicked, isActive} = props
  const {tabId, displayText} = details

  const value = isActive ? 'color' : null

  const putFruitId = () => {
    onClicked(tabId)
  }
  return (
    <li className="list" onClick={putFruitId}>
      <button type="button" className={`tab-Item ${value}`}>
        <p>{displayText}</p>
      </button>
    </li>
  )
}

export default TabsItem
