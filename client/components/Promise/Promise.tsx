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
    <div className="font-sans center">
      <div className="promise">
        <h1 className="text-slate-50 font-bold text-base p-2 text-xl">
          {promiseName}
          <span className="text-base font-bold text-bold text-fuchsia-200 p-2">
          {friendName}
        </span>
        </h1>

        <div className="text-base p-2 font-bold text-bold text-fuchsia-200">
          {dateCreated}
        </div>

        <p className="text-slate-50 text-base p-2">{promiseDescription}</p>

        <button onClick={() => props.handleResolvePromise('broken')}>
          <img src="/promiseBroken.svg" alt="Promise Broken!" />
          <span className="text-slate-50 font-bold text-base py">
            Promise Broken!
          </span>
        </button>

        <button onClick={() => props.handleResolvePromise('kept')}>
          <img src="/promiseKept.svg" alt="Promise Kept!" />
          <span className="text-slate-50 font-bold text-base pb-2">
            Promise Kept!
          </span>
        </button>
        <div className="flex">
          <FacebookShareButton
            // TO DO: update when app is deployed with deployment site
            url={`kahikatea-2023-mikhail.au.auth0.com`}
            title={`Check out my promise with, ${friendName}!`}
            hashtag="#PinkyPromise"
            name="Facebook Share Button"
            className="items-center"
          >
            <FacebookIcon className="ml-4" size={48} borderRadius={50} />
          </FacebookShareButton>
          <TwitterShareButton
            title={`Check out my promise with, ${friendName}!`}
            url={`${window.location.href}/my-promises/`}
            hashtags={['PinkyPromise']}
            name="Twitter Share Button"
            className="items-center"
          >
            <TwitterIcon className="ml-4" size={48} borderRadius={50} />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  )
}

export default Promise
