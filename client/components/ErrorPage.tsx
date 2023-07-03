import Header from './Header'
import Nav from './Nav'

function ErrorPage() {
  return (
    <>
      <div
        className="w-screen min-h-screen bg-fixed bg-center bg-cover "
        style={{ backgroundImage: 'url(/image/background3.png)' }}
      >
        <Header />
        <div className="text-fuchsia-500 flex min-h-screen items-center justify-center flex-col gap-10">
          <div className="text-5xl">
            <i className="fa-2xl fa-solid fa-triangle-exclamation"></i>
          </div>
          <p className=" font-bold ">Something went wrong</p>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default ErrorPage
