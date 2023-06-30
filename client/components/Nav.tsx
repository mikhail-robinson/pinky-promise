function Nav() {
  return (
    <div className="app">
      <div className="flex flex-row justify-between h-screen">
      <button
        className="bg-pink hover:bg-darkPink py-2 px-4 p-2 rounded-full"
        onClick={() => {
          loginWithRedirect()
        }}
      >
        House
      </button>
      <button
        className="bg-pink hover:bg-darkPink py-2 px-4 p-2 rounded-full"
        onClick={() => {
          loginWithRedirect()
        }}
      >
        Plus
      </button>
      <button
        className="bg-pink hover:bg-darkPink py-2 px-4 p-2 rounded-full"
        onClick={() => {
          loginWithRedirect()
        }}
      >
        Menu
      </button>
      </div>
    </div>
  )
}

export default Nav
