// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onUpdateState = () => {
    updateActiveTabId(tabId)
  }
  const isActiveTab = isActive ? 'active-tab' : ''

  return (
    <li className="list-tab-container">
      <button
        className={`button ${isActiveTab}`}
        type="button"
        onClick={onUpdateState}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
