import { PledgeFrontEnd } from '../../../models/pledge_models'
import { useNavigate } from 'react-router-dom'

interface Props {
  promises: PledgeFrontEnd[]
}

function AllPromisesItem(props: Props) {
  const navigate = useNavigate()
  const { promises } = props

  function redirectToDetailsPage(promiseId: number) {
    navigate(`/promises/${promiseId}`)
  }

  return (
    <>
      <h2>Your Promises</h2>
      {promises.map((promise) => {
        return (
          //TODO add button to details page
          <li key={promise.promiseId}>
            <div>{promise.promiseName}</div>
            <div>{promise.friendName}</div>
            <button
              className="fa-solid fa-angle-right"
              onClick={() => redirectToDetailsPage(promise.promiseId)}
            ></button>
          </li>
        )
      })}
    </>
  )
}

export default AllPromisesItem
