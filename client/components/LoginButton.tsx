import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="flex justify-start items-start">
      <button
        className="font-body text-purple bg-pink text-2xl hover:bg-darkPink py-2 px-4 p-2 rounded-lg -mt-32 ml-16"
        onClick={() => {
          loginWithRedirect({
            authorizationParams: {
              screen_hint: 'signin',
              redirect_uri: `${window.location.origin}/my-promises`,
            },
          })
        }}
      >
        LOGIN
      </button>
    </div>
  )
}

export default LoginButton


