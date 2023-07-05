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
      <div className="mt-20 p-10">
        <h2 className="font-sans font-bold text-slate-50 text-2xl pb-4">
          Your Promises
        </h2>

        <div className="flex flex-col gap-4">
          {promises.map((promise) => {
            return (
              <div key={promise.promiseId} className="flex ">
                <div className="flex w-3/4 p-2 text-slate-50 truncate pr-5 bg-slate-950 bg-opacity-50 rounded-lg text-lg font-sans font-bold">
                  <ul className="list-disc">
                    <div className="flex truncate">{promise.promiseName}</div>
                    <span className="font-sans font-bold text-bold text-fuchsia-200">
                      {promise.friendName}
                    </span>
                  </ul>
                </div>
                <div className="flex items-center justify-center w-1/4 text-base  text-slate-50 bg-slate-950 bg-opacity-50 rounded-lg font-body ">
                  <button
                    className="fa-solid fa-angle-right"
                    onClick={() => redirectToDetailsPage(promise.promiseId)}
                  ></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AllPromisesItem
