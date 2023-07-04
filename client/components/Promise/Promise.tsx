import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'
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
          <img src="/promiseBroken.svg" alt="Promise Broken!" />
          Promise Broken!
        </button>

        <button onClick={() => props.handleResolvePromise('kept')}>
          <img src="/promiseMade.svg" alt="Promise Kept!" />
          Promise Kept!
        </button>

        <FacebookShareButton
          // TO DO: update when app is deployed with deployment site
          url={`kahikatea-2023-mikhail.au.auth0.com`}
          title={`Check out my promise with, ${friendName}!`}
          hashtag="#PinkyPromise"
          name="Facebook Share Button"
        >
          <FacebookIcon className="ml-4" size={48} borderRadius={50} />
        </FacebookShareButton>
        <TwitterShareButton
          title={`Check out my promise with, ${friendName}!`}
          url={`${window.location.href}/my-promises/`}
          hashtags={['PinkyPromise']}
          name="Twitter Share Button"
        >
          <TwitterIcon className="ml-4" size={48} borderRadius={50} />
        </TwitterShareButton>
      </div>
    </div>
  )
}

export default Promise
