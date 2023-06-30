import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import RegisterButton from './RegisterButton'
import { Pledge } from '../../models/pledge_models'
import { useState } from 'react'
import PromiseDetailPage from './PromiseDetailPage'
import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import UserProfilePage from './UserProfilePage'
import { useQueryClient } from 'react-query'

function App() {
  // const navigate = useNavigate()
  const { isAuthenticated } = useAuth0()

  return (
    <>
      

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
