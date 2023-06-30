import { useMutation, useQuery, useQueryClient } from 'react-query'
import LoginButton from './LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import RegisterButton from './RegisterButton'
import { Pledge } from '../../models/promise_models'
import { useState } from 'react'
import PromiseDetailPage from './PromiseDetailPage'
import Header from './Header'
import Home from './Home'
import Nav from './Nav'

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
      <div className="w-screen h-screen bg-space bg-center bg-cover"> </div>

      {isAuthenticated ? (
        <>
          <Header />
          <Outlet />
          <LogoutButton />
          <Nav />
        </>
      ) : (
        <>
          <Home />
          <LoginButton />
          <RegisterButton />
        </>
      )}
    </>
  )
}

export default App
