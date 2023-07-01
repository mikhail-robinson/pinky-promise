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
      <div className="flex items-center justify-center w-screen h-screen">
        <div className=" relative grid gap-6 mb-6">
          <form onSubmit={handleSubmit}>
            <h1 className="font-secondary text-slate-50">
              Introduce yourself:
            </h1>
            <div>
              <label className="font-secondary  text-slate-50" htmlFor="name">
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
            <div>
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
                className="font-secondary text-slate-50 block mb-2 text-sm font-medium dark:text-white"
                htmlFor="bio"
              >
                Bio
              </label>
              <input
                className="p-2 w-full text-sm text-gray-900 bg-black -50 opacity-30 rounded-lg font-body"
                type="text"
                name="bio"
                id="bio"
                placeholder="Add a description"
                required
                defaultValue={props.profile?.bio}
              />
            </div>
            <div className="flex items-center justify-center mt-10">
              <button className="font-body text-purple bg-pink text-2xl hover:bg-darkPink py-2 px-4 p-2 rounded-lg ">
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
