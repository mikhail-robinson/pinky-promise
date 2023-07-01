import { PledgeFrontEnd } from '../../../models/pledge_models'

interface Props {
  promises: PledgeFrontEnd[]
}

function AllPromisesItem(props: Props) {
  const { promises } = props

  return (
    <>
      <h2>Your Promises</h2>
      {promises.map((promise) => {
        return (
          <li key={promise.promiseId}>
            <div>{promise.promiseName}</div>
            <div>{promise.friendName}</div>
          </li>
        )
      })}
    </>
  )
}

export default AllPromisesItem
