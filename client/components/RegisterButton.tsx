import { useAuth0 } from '@auth0/auth0-react'

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="flex justify-end items-start">
      <button
        className="font-body text-pink bg-purple text-2xl hover:bg-lightPurple py-2 px-4 p-2 rounded-lg -mt-32 mr-14 "
        onClick={() => {
          loginWithRedirect({
            authorizationParams: {
              screen_hint: 'signup',
              redirect_uri: `${window.location.origin}/my-profile`,
            },
          })
        }}
      >
        REGISTER
      </button>
    </div>
  )
}

export default RegisterButton
