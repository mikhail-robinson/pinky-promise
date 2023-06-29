import { Promise } from "../../models/promise_models"

interface Props {
  promise: Promise
}

function Promise(props:Props) {
  const { promiseName, promiseDescription, userId, friendUserId, status } = props.promise
  return (
    <div className="promise" >
      {}
    </div>
  )
}

export default Promise