interface FakePromise {
  promiseName: string
  promiseDescription: string
  userId: string
  friendUserId: string
  status: string
}

interface Props {
  promise: FakePromise
}

function Promise(props: Props) {
  const { promiseName, promiseDescription, userId, friendUserId, status } =
    props.promise
  return (
    <div className="promise">
      <div>Name: {promiseName}</div>
      <div>Desc: {promiseDescription}</div>
      <div>Status: {status}</div>
      <button>Promise Broken!</button>
      <button>Promise Kept!</button>
    </div>
  )
}

export default Promise
