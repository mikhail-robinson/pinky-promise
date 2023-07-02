import { Pledge, PledgeDraft } from '../../../models/pledge_models'
import { useQuery } from 'react-query'
import { getAllFriendsById } from '../../apis/friends'
import { useAuth0 } from '@auth0/auth0-react'
import { FriendNames } from '../../../models/friends_models'

interface Props {
  promise?: Pledge
  handleSubmit: (promise: Pledge | PledgeDraft) => void
}

function AddPromiseForm(props: Props) {
  const { getAccessTokenSilently } = useAuth0()

  const friendsQuery = useQuery('getAllFriendsById', async () => {
    const token = await getAccessTokenSilently()
    return await getAllFriendsById(token)
  })

  // TO DO: friendsQuery is possible undefined

  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const promiseName = formData.get('promiseName') as string
    const friendUserId = formData.get('friendUserId') as string
    const promiseDescription = formData.get('promiseDescription') as string
    const dateDue = formData.get('date') as string
    // TO DO: date is null
    console.log('DateDue', dateDue)

    const form = {
      promiseName: promiseName,
      promiseDescription: promiseDescription,
      friendUserId: friendUserId,
      // TO DO: Remove userId from types
      status: 'pending',
      // TO DO: date is null
      dateDue: dateDue,
    }
    props.handleSubmit(form)
  }

  return (
    <div>
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
            {friendsQuery?.data?.map((friend) => (
              <option key={friend.friendUserId} value={friend.username}>
                {friend.friendName}
              </option>
            ))}
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
          <button>New Promise!</button>
        </div>
      </form>
    </div>
  )
}

export default AddPromiseForm
