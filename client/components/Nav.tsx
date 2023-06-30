import { useNavigate } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'

function Nav() {
  const navigate = useNavigate()
  function goTo(link: string) {
    navigate(link)
  }

  return (
    <div className="app">
      <div className="flex justify-around -mt-32">
        <div className="w-16 h-16 bg bg-pink hover:bg-darkPink rounded-full flex items-center  justify-center ">
          <button
            onClick={() => goTo('/')}
            className="fa-solid fa-house fa-lg"style={{color:"#464fa3",}}
          ></button>
        </div>

        <div className="w-16 h-16 bg bg-pink hover:bg-darkPink rounded-full flex items-center  justify-center ">
          <button
            onClick={() => goTo('/add-promise')}
            className="fa-thin fa-plus fa-2xl" style={{color:"#464fa3",}}
          ></button>
        </div>

        <div className="w-16 h-16 bg bg-pink hover:bg-darkPink rounded-full flex items-center  justify-center text-white ">
          <button onClick={() => goTo('/')}>
            <i className="fa-solid fa-bars fa-lg " style={{color:"#464fa3",}}></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
