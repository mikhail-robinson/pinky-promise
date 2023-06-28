import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'

import store from './store'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
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
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  )
})
