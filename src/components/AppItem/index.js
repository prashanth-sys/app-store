// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} />
      <h1 className="description">{appName}</h1>
    </li>
  )
}
export default AppItem
