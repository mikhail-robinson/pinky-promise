import { user, user_draft } from '../../models/user_models'

interface Props {
  profile?: user
  handleSubmit: (profile: user | user_draft) => void
}

function UserProfileForm(props: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const username = formData.get('username') as string
    const bio = formData.get('bio') as string

    const form = {
      name: name,
      username: username,
      bio: bio,
    }

    props.handleSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          defaultValue={props.profile?.name}
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          defaultValue={props.profile?.username}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          name="bio"
          id="bio"
          required
          defaultValue={props.profile?.bio}
        />
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  )
}

export default UserProfileForm
