import { Friend } from '../../models/friends_models'
import { Pledge, PledgeDraft } from '../../models/pledge_models'

interface Props {
  promise?: Pledge
  handleSubmit: (promise: Pledge | PledgeDraft) => void
  friends: Friend[]
}

//call the get friends

function PromiseProfileForm(props: Props) {
  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const promiseName = formData.get('promiseName') as string
    const friendUserId = formData.get('friendUserId') as string
    const promiseDescription = formData.get('promiseDescription') as string

    const form = {
      promiseName: promiseName,
      friendUserId: friendUserId,
      promiseDescription: promiseDescription,
    }

    return form
  }

  return (
    <form onSubmit={handleSave}>
      <div>
        <label htmlFor="promiseName">Name</label>
        <input
          type="text"
          name="promiseName"
          id="promiseName"
          required
          defaultValue={props.promise?.promiseName}
        />
      </div>
      <div>
        <label htmlFor="friendName">Add a Friend</label>
        <select name="friendName" id="friendName">
          <option value="">Select Friend</option>
          {/* {props.friends.map((friend) => ( */}
          {/*         
           <option key={friend.friendUserId} value={friend.friendUserId}>
             {}
           </option>
           ))} */}
          {/* this will only finish once getFriendbyId */}
        </select>
      </div>
      <div>
        <label htmlFor="promiseDescription">Describe your promise</label>
        <input
          type="text"
          name="promiseDescription"
          id="promiseDescription"
          required
          defaultValue={props.promise?.promiseDescription}
        />
      </div>
      <div>
        <label htmlFor="promiseDescription">Date (optional)</label>
        <input
          type="date"
          name="promiseDescription"
          id="promiseDescription"
          required
          defaultValue={'none'}
        />
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  )
}

export default PromiseProfileForm
