import { User, UserDraft } from '../../models/user_models'

interface Props {
  profile?: User
  handleSubmit: (profile: User | UserDraft) => void
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
    <>
      <div className="flex items-center justify-center h-screen w-">
        <div className="">
          <form onSubmit={handleSubmit} className="w-80 h-auto">
            <h1 className="font-secondary text-slate-50 text-2xl font-medium pb-4 pt-7">
              {props.profile ? 'Your Profile' : 'Introduce Yourself'}
            </h1>
            <div className="pb-4">
              <label
                className="font-secondary  text-slate-50 pb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="p-2 w-full text-sm text-gray-900 bg-black -50 opacity-30 rounded-lg font-body"
                type="text"
                name="name"
                id="name"
                placeholder="Insert tour title here"
                required
                defaultValue={props.profile?.name}
              />
            </div>
            <div className="pb-4">
              <label
                className="font-secondary text-slate-50"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="p-2 w-full text-sm text-gray-900 bg-black -50 opacity-30 rounded-lg font-body"
                type="text"
                name="username"
                id="username"
                placeholder="Who is your friend?"
                required
                defaultValue={props.profile?.username}
              />
            </div>
            <div>
              <label
                className="font-secondary text-slate-50 block"
                htmlFor="bio"
              >
                Bio
              </label>
              <input
                className="p-2 w-full min-h-1/2 text-sm text-gray-900 bg-black -50 opacity-30 rounded-lg font-body"
                type="text"
                name="bio"
                id="bio"
                placeholder=""
                required
                defaultValue={props.profile?.bio}
              />
            </div>
            <div className="flex items-center justify-center mt-10">
              <button className="font-body text-purple bg-pink text-2xl hover:bg-darkPink drop-shadow-xl py-2 px-4 p-2 rounded-lg ">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UserProfileForm
