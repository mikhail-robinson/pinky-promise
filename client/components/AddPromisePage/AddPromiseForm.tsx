import {
  Pledge,
  PledgeDraftSchemaFrontEnd,
} from '../../../models/pledge_models'
import { useQuery } from 'react-query'
import { getAllFriendsById } from '../../apis/friends'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  promise?: PledgeDraftSchemaFrontEnd
  handleSubmit: (promise: Pledge | PledgeDraftSchemaFrontEnd) => void
}

function AddPromiseForm(props: Props) {
  const { getAccessTokenSilently } = useAuth0()

  const friendsQuery = useQuery('getAllFriendsById', async () => {
    const token = await getAccessTokenSilently()
    return await getAllFriendsById(token)
  })

  if (friendsQuery.isLoading) {
    return <div>Loading ...</div>
  }

  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const promiseName = formData.get('promiseName') as string
    const friendUserId = formData.get('friendUserId') as string
    const promiseDescription = formData.get('promiseDescription') as string
    const dateDue = formData.get('dateDue') as string

    const form = {
      promiseName: promiseName,
      promiseDescription: promiseDescription,
      friendUserId: friendUserId,
      status: 'pending',
      dateDue: dateDue,
    }

    props.handleSubmit(form)
  }

  return (
    <div className="flex mt-20 justify-center h-screen">
      <form onSubmit={handleSave} className="w-80 h-auto">
        <div className="pb-4">
          <label
            className="font-secondary text-slate-50 pb-2"
            htmlFor="promiseName"
          >
            Name
          </label>
          <input
            className="p-2 w-full text-sm text-slate-50 bg-slate-950 bg-opacity-25 rounded-lg font-body"
            type="text"
            name="promiseName"
            id="promiseName"
            required
            defaultValue={props.promise?.promiseName}
          />
        </div>
        <div className="pb-4">
          <label
            className="font-secondary text-slate-50"
            htmlFor="friendUserId"
          >
            Add a Friend
          </label>
          <select
            className="p-2 w-full text-sm text-slate-50 bg-slate-950 bg-opacity-25 rounded-lg font-body"
            name="friendUserId"
            id="friendUserId"
          >
            <option>Select a Friend</option>
            {friendsQuery?.data?.map((friend) => (
              <option key={friend.friendUserId} value={friend.friendUserId}>
                {friend.friendName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="text-start align-top place-items-start font-secondary text-slate-50"
            htmlFor="promiseDescription"
          >
            Describe your promise
          </label>
          <textarea
            className="p-2 pb-20 w-80 m text-sm text-slate-50 bg-slate-950 bg-opacity-25 rounded-lg font-body resize-none overflow-wrap-normal"
            name="promiseDescription"
            id="promiseDescription"
            required
            defaultValue={props.promise?.promiseDescription}
          />
        </div>
        <div>
          <label
            className="text-start align-top place-items-start font-secondary text-slate-50"
            htmlFor="dateDue"
          >
            Date (optional)
          </label>
          <input
            className="p-2 w-full text-sm text-slate-50 bg-slate-950 bg-opacity-25 rounded-lg font-body"
            type="date"
            name="dateDue"
            id="dateDue"
            defaultValue={'none'}
          />
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="font-body text-purple bg-pink text-2x0 hover:bg-darkPink drop-shadow-xl py-2 px-4 p-2  rounded-lg">
            Make A Promise!
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPromiseForm
