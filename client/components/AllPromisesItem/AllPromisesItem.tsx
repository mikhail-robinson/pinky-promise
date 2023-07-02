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
      <div className="mt-20 w-80 ml-10">
        <h2 className="font-secondary text-slate-50 text-2xl font-medium pb-4">
          Your Promises
        </h2>

        <div className="flex flex-col gap-4">
          {promises.map((promise) => {
            return (
              //TODO add button to details page
              <div key={promise.promiseId} className="flex">
                <ul className="list-disc">
                  <div className="flex-initial p-2 w-72 text-base  text-slate-50 bg-slate-950 bg-opacity-25 rounded-l-lg font-body ">
                    <div className="">
                      <div className="">{promise.promiseName}</div>
                      <span className=" text-bold text-gray-500">
                        {promise.friendName}
                      </span>
                    </div>
                  </div>
                </ul>
                <div className="flex-initial flex items-center justify-center w-10  text-base  text-slate-50 bg-slate-950 bg-opacity-25 rounded-r-lg font-body">
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
