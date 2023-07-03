//@vitest-environment jsdom
import { expect, describe, it, vi, beforeEach } from 'vitest'

import { cleanup, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'
import * as auth0 from '@auth0/auth0-react'

import PromiseDetailPage from './PromiseDetailPage'
import { PledgeFrontEnd } from '../../../models/pledge_models'
import { MemoryRouter, Params, Route } from 'react-router-dom'

const queryClient = new QueryClient()


expect.extend(matchers)
vi.mock('client/apis/promises.ts')
vi.mock('@auth0/auth0-react')
vi.mock('react-router-dom', () => ({
  useParams: (): Readonly<Params<string>> => ({ promiseId: '1' }),
}));

beforeEach(cleanup)
;(auth0 as auth0.User).useAuth0 = vi.fn().mockReturnValue({
  isAuthenticated: true,
  isLoading: false,
  getAccessTokenSilently: vi.fn(),
})

//TODO:

describe('test', () => {
  it('tests')
})

// describe('PromiseDetailPage', () => {
//   // it('renders the Promise compenent', () => {}),
//   it('200 fetches the promise data', async () => {
//     const pledge: PledgeFrontEnd = {
//       promiseId: 1,
//       promiseName: 'name',
//       promiseDescription: 'text',
//       userId: '1',
//       friendName: '3',
//       status: 'pending',
//       dateCreated: 'dateCreated',
//       dateDue: 'dateDue ',
//     }

//     nock('http://localhost').get('/api/v1/promises/1').reply(200, pledge)

//     render(      
//       <QueryClientProvider client={queryClient}>
//         <PromiseDetailPage />
//       </QueryClientProvider>
//     )

//     // const title =  screen.getByRole('heading', { level: 1 })

//     const title = screen.getByText('name')
//     const description = screen.getByText(pledge.promiseDescription)
//     const friendName = screen.getByText(pledge.friendName)

//     expect(title.textContent).toBe('name')
//     // expect(name.textContent).toContain(pledge.promiseName)
//     expect(description.textContent).toContain(pledge.promiseDescription)
//     expect(friendName.textContent).toContain(pledge.friendName)
//   })
// })
