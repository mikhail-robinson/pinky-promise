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

        <div className="flex flex-col gap-4 ">
          {promises.map((promise) => {
            return (
              <div key={promise.promiseId} className="flex  dark:hover:bg-pink dark:hover:text-black">
                
                <div className="flex w-3/4 p-2 text-slate-50 bg-slate-950 bg-opacity-50 rounded-l text-lg font-sans font-bold">
                  <a href="/promises">
                    <ul className="list-disc">
                      <div className="">{promise.promiseName}</div>
                      <span className="font-sans font-bold text-bold text-fuchsia-200">
                        {promise.friendName}
                      </span>
                    </ul>
                  </a>
                </div>
                <div className="flex items-center justify-center w-1/4 text-base  text-slate-50 bg-slate-950 bg-opacity-50 rounded-r-lg font-body ">
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
