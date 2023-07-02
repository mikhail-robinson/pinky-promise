import { createRoot } from 'react-dom/client'

import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { Suspense, lazy } from 'react'
import ProtectedComponent from './components/UI/ProtectedComponent'
import Loading from './components/UI/Loading'
import Home from './components/Home'

const UserProfilePage = lazy(() => import('./components/UserProfilePage'))
const PromiseDetailPage = lazy(
  () => import('./components/PromiseDetailPage/PromiseDetailPage')
)
const AddPromisePage = lazy(
  () => import('./components/AddPromisePage/AddPromisePage')
)

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route
      path="find-friends"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={Loading} />
        </Suspense>
      }
    />
    <Route
      path="my-friends"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={Loading} />
        </Suspense>
      }
    />
    <Route
      path="my-profile"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={UserProfilePage} />
        </Suspense>
      }
    />
    <Route
      path="my-promises"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={Loading} />
        </Suspense>
      }
    />
    <Route
      path="promises/:promiseId"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={PromiseDetailPage} />
        </Suspense>
      }
    />
    <Route
      path="add-promise"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={AddPromisePage} />
        </Suspense>
      }
    />
  </Route>
)

function AppProvider() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      domain={import.meta.env.VITE_AUTH0_DOMAIN as string}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID as string}
      cacheLocation="localstorage"
      authorizationParams={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        audience: import.meta.env.VITE_AUTH0_AUDIENCE as string,
        redirect_uri: window.location.origin,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AppProvider />
      </QueryClientProvider>
    </Auth0Provider>
  )
})
