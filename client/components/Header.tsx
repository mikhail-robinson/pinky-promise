function Header() {
  return (
    <div className="absolute top-0 left-0 w-full h-20 inset-0 z-10 ">
      <div className="flex flex-col max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4 ">
        <h1 className="font-primary text-pink text-center text-5xl drop-shadow mt-3">
          Pinky
        </h1>
        <h1 className="font-primary text-pink text-center text-5xl drop-shadow">
          Promise
        </h1>
      </div>
    </div>
  )
}

export default Header
