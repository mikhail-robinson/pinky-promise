import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { Outlet, useNavigate } from 'react-router-dom'
import RegisterButton from './RegisterButton'
import { Pledge } from '../../models/promise_models'
import { useState } from 'react'
import PromiseDetailPage from './PromiseDetailPage'
import UserProfilePage from './UserProfilePage'
import { useQueryClient } from 'react-query'

function App() {
  const [form, setForm] = useState()
  const queryClient = useQueryClient()
  // const navigate = useNavigate()
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <div className="app">
        <h1>Pinky Promise!</h1>
        <Outlet />
        <PromiseDetailPage />

        {isAuthenticated ? (
          <>
            <LogoutButton />
            <UserProfilePage />
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
