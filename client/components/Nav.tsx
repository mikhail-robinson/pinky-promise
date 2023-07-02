import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'
import LogoutButton from './LogoutButton'

function Nav() {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function goTo(link: string) {
    navigate(link)
  }

  function handleLogout() {
    LogoutButton()
  }

  return (
    <div className="app">
      <div className="fixed bottom-0 left-0 w-full h-20">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium pl-8">
          <div className="w-16 h-16 bg bg-pink hover:bg-darkPink rounded-full flex items-center justify-center">
            <button
              onClick={() => goTo('/my-promises')}
              className="fa-solid fa-house fa-lg"
              style={{ color: '#464fa3' }}
            ></button>
          </div>

          <div className="w-16 h-16 bg bg-pink hover:bg-darkPink rounded-full flex items-center justify-center">
            <button
              onClick={() => goTo('/add-promise')}
              className="fa-thin fa-plus fa-2xl"
              style={{ color: '#464fa3' }}
            ></button>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-16 h-16 bg bg-pink hover:bg-darkPink rounded-full flex items-center justify-center text-white focus:outline-none"
            >
              <i
                className="fa-solid fa-bars fa-lg"
                style={{ color: '#464fa3' }}
              ></i>
            </button>

            {isDropdownOpen && (
              <div className="absolute -inset-x-72 flex justify-start pl-40 z-10 bottom-20 mt-3 rounded-lg shadow bg-purple">
                <ul className="text-base">
                  <li>
                    <a
                      href="/my-friends"
                      className="block px-4 py-6 text-base text-gray-700 dark:text-gray-200 dark:hover:bg-pink dark:hover:text-black"
                    >
                      Friends
                    </a>
                  </li>
                  <li>
                    <a
                      href="/my-promises"
                      className="block px-4 py-6 text-base text-gray-700 dark:text-gray-200 dark:hover:bg-pink dark:hover:text-black"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-6 text-base text-gray-700 dark:text-gray-200 dark:hover:bg-pink dark:hover:text-black"
                    >
                      Log out
                    </button>
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
