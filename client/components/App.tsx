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
      {/* <div className="relative w-screen h-screen bg-space bg-center bg-cover inset-0 z-0"></div> */}
      <div
        className="relative w-screen h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url(public/image/background3.png)' }}
      >
        {isAuthenticated ? (
          <>
            <Header />
            <Outlet />
            <Nav />
            <LogoutButton />
          </>
        ) : (
          <>
            <Home />
            <LoginButton />
            <RegisterButton />
          </>
        )}
      </div>
    </>
  )
}

export default App
