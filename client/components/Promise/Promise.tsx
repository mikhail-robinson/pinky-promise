import { PledgeFrontEnd } from '../../../models/pledge_models'

interface Props {
  promise: PledgeFrontEnd
  handleResolvePromise: (status: string) => void

}

function Promise(props: Props) {
  const { promiseName, promiseDescription, friendName } = props.promise
  //TODO: replace hardcoded date with acutal date
  const dateCreated = '28/06/3000'
  return (
    <div>
      <div className="promise">
        <h1>{promiseName}</h1>

        <div>{dateCreated}</div>
        <div>{friendName}</div>
        <p>{promiseDescription}</p>

        <button onClick={() => props.handleResolvePromise('broken')}>
          <img
            src="/promiseBroken.svg"
            alt="promiseBroken"
            aria-label="Promise broken"
          />
          Promise Broken!
        </button>

        <button onClick={() => props.handleResolvePromise('kept')}>
          <img
            src="/promiseMade.svg"
            alt="promisekept"
            aria-label="Promise kept"
          />
          Promise Kept!
        </button>
        <div>Twitter</div>
        <div>Facebook</div>
      </div>
    </div>
  )
}

export default Promise

// /promiseMade.svg
