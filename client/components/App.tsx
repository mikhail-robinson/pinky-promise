import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import RegisterButton from './RegisterButton'
import { Pledge } from '../../models/pledge_models'
import { useState } from 'react'
import PromiseDetailPage from './PromiseDetailPage'
import UserProfilePage from './UserProfilePage'
import { useQueryClient } from 'react-query'
import PromiseProfilePage from './PromiseProfilePage'

function App() {
  const [form, setForm] = useState()
  const queryClient = useQueryClient()
  // const navigate = useNavigate()
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  function goTo(link: string) {
    navigate(link)
  }

  return (
    <>
      <div>
        <h1>Pinky Promise!</h1>
        <PromiseProfilePage />
        <Outlet />
        <button onClick={() => goTo(`promise-detail/${1}`)}>
          Promise Detail
        </button>

        {isAuthenticated ? (
          <>
            <LogoutButton />
          </>
        ) : (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
        <ul></ul>
      </div>
    </>
  )
}

export default App
function getPromises():
  | {
      promise_name: string
      promise_description: string
      user_id: string
      friend_user_id: string
      status: string
      date_created: Date
      date_due: Date
      id: number
    }[]
  | PromiseLike<
      {
        promise_name: string
        promise_description: string
        user_id: string
        friend_user_id: string
        status: string
        date_created: Date
        date_due: Date
        id: number
      }[]
    > {
  throw new Error('Function not implemented.')
}
