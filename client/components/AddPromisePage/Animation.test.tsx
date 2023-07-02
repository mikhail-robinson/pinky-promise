//@vitest-environment jsdom
import { vi, describe, expect, it, afterEach } from 'vitest'
import { screen } from '@testing-library/react'
import { PledgeDraftSchemaFrontEnd } from '../../../models/pledge_models'
import AddPromiseForm from './AddPromiseForm'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import { cleanup, render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import * as auth0 from '@auth0/auth0-react'
import * as api from '../../apis/friends'
import { FriendNames } from '../../../models/friends_models'

expect.extend(matchers)
afterEach(cleanup)
vi.mock('@auth0/auth0-react')
vi.mock('../../apis/friends')

function renderComponent(component: JSX.Element) {
  const user = userEvent.setup()
  return { user, ...render(component) }
}

describe('ProfileForm', () => {
  it('event handler should be called when form is submitted', async () => {
    const handleSubmit = vi.fn((form: PledgeDraftSchemaFrontEnd) => {
      expect(form).toMatchObject({
        promiseName: 'dummy-name',
        promiseDescription: 'dummy-description',
        friendUserId: '1',
        status: 'pending',
        dateDue: '2023-06-29',
      })
    })
    ;(auth0 as auth0.User).useAuth0 = vi.fn().mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      getAccessTokenSilently: vi.fn(),
    })

    const friendsData: FriendNames[] = [
      { friendUserId: '1', friendName: 'banana', username: 'banan too' },
    ]
    const handleAnimation = vi.fn()
    vi.mocked(api.getAllFriendsById).mockResolvedValue(friendsData)

    const { user } = renderComponent(
      <QueryClientProvider client={new QueryClient()}>
        <AddPromiseForm
          handleSubmit={handleSubmit}
          handleAnimation={handleAnimation}
        />
      </QueryClientProvider>
    )

    await user.type(await screen.findByLabelText('Name'), 'dummy-name')
    await user.type(
      await screen.findByLabelText('Describe your promise'),
      'dummy-description'
    )

    const friendsInput = await screen.findByLabelText('Add a Friend')
    await user.selectOptions(friendsInput, ['1'])

    await user.type(
      await screen.findByLabelText('Date (optional)'),
      '2023-06-29'
    )

    const form = screen.getByRole('button', { name: 'New Promise!' })
    await user.click(form)

    expect(handleSubmit).toHaveBeenCalled()
  })
})
