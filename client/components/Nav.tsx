import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'
import { useAuth0 } from '@auth0/auth0-react'

function Nav() {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { logout } = useAuth0()
  function goTo(link: string) {
    navigate(link)
  }

  function handleLogout() {
    logout()
  }

  return (
    <div className="app">
      <div className="fixed bottom-0 left-0 w-full h-20">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium pl-12">
          <div className="w-16 h-16 bg bg-pink hover:bg-darkPink rounded-full flex items-center justify-center">
            <button
              onClick={() => goTo('/my-promises')}
              className="fa-solid fa-house fa-lg "
              style={{ color: '#464fa3' }}
            ></button>
          </div>

          <div className="w-16 h-16 bg bg-pink hover:bg-darkPink rounded-full flex items-center justify-center">
            <button
              onClick={() => goTo('/add-promise')}
              className="fa-thin fa-plus fa-2xl mb-2"
              style={{ color: '#464fa3' }}
            ></button>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-16 h-16 bg bg-pink hover:bg-darkPink rounded-full flex items-center justify-center text-white focus:outline-none"
            >
              <i
                className="fa-solid fa-bars fa-lg ml-0.5"
                style={{ color: '#464fa3' }}
              ></i>
            </button>

            {isDropdownOpen && (
              <div className="absolute -inset-x-60 right-5  z-10 bottom-24 mt-3 rounded-lg bg-purple shadow-inner">
                <ul className="text-xl flex flex-col items-center w-full">
                  <li className=" w-full flex items-center justify-center rounded-lg px-4 py-6 text-gray-700 dark:text-gray-200 dark:hover:bg-pink dark:hover:text-black">
                    <a href="/my-profile">Profile</a>
                  </li>
                  <li className=" w-full flex items-center justify-center rounded-lg px-4 py-6 text-gray-700 dark:text-gray-200 dark:hover:bg-pink dark:hover:text-black">
                    <a href="/my-friends">Friends</a>
                  </li>
                  <li className=" w-full flex items-center justify-center rounded-lg px-4 py-6 text-gray-700 dark:text-gray-200 dark:hover:bg-pink dark:hover:text-black">
                    <button onClick={handleLogout}>Log out</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
