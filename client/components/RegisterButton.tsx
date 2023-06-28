import { useAuth0 } from '@auth0/auth0-react'

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      onClick={() => {
        loginWithRedirect({
          authorizationParams: {
            screen_hint: 'signin',
            // redirect_uri: '/',
          },
        })
      }}
    >
      Register
    </button>
  )
}

export default RegisterButton
