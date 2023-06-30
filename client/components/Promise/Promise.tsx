import { PledgeFrontEnd } from "../../../models/pledge_models"

interface FakePromise {
  promiseName: string
  promiseDescription: string
  userId: string
  friendUserId: string
  status: string
}

interface Props {
  promise: PledgeFrontEnd
}

function Promise(props: Props) {
  const { promiseName, promiseDescription, status, friendName } =
    props.promise
  return (
    <div>
      <div className="promise">
        <div>Name: {promiseName}</div>
        <div>Desc: {promiseDescription}</div>
        <div>Status: {status}</div>
        <div>Friend: {friendName}</div>
        <button>Promise Broken!</button>
        <button>Promise Kept!</button>
      </div>
    </div>
  )
}

export default Promise
