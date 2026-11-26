import withMessage from './withMessage'
import user from "./user"
const EnhancedUser= withMessage(user)
function MaintainData() {
  return (
    <div>
        <h2>MaintainData</h2>
        <EnhancedUser/>

    </div>
  )
}

export default MaintainData