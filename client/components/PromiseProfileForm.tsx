import { Pledge, PledgeDraft } from '../../models/pledge_models'

interface Props {
  promise?: Pledge
  handleSubmit: (promise: Pledge | PledgeDraft) => void
}

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

    props.handleSubmit(form)
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
        <label htmlFor="friendUserId">Add Friend</label>
        <input
          type="text"
          name="friendUserId"
          id="friendUserId"
          required
          defaultValue={props.promise?.friendUserId}
        />
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
