import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      onClick={() => {
        loginWithRedirect()
      }}
    >
      Login
    </button>
  )
}

export default LoginButton

// async function handleAccessToken() {
//   const token = await getAccessTokenSilently()
//   console.log(token)
// }
