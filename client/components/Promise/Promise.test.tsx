//@vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Promise from './Promise'
import { PledgeFrontEnd } from '../../../models/pledge_models'

const pledge: PledgeFrontEnd = {
  promiseId: 1,
  promiseName: 'name',
  promiseDescription: 'text',
  userId: '1',
  friendName: '3',
  status: 'pending',
  dateCreated: 'dateCreated',
  dateDue: 'dateDue ',
}

afterEach(cleanup)
const user = userEvent.setup()

describe('Promise component shows props', () => {
  it('should display with promise data', async () => {
    render(<Promise promise={pledge} handleResolvePromise={() => {}} />)

    const name = screen.getByText(pledge.promiseName)
    expect(name.textContent).toContain(pledge.promiseName)
    const description = screen.getByText(pledge.promiseDescription)
    expect(description.textContent).toContain(pledge.promiseDescription)
    const friendName = screen.getByText(pledge.friendName)
    expect(friendName.textContent).toContain(pledge.friendName)
  }),
    it('shows the Promise Broken and Promise Kept buttons', async () => {
      render(<Promise promise={pledge} handleResolvePromise={() => {}} />)

      const buttons = await screen.getAllByRole('button')
      expect(buttons[0].textContent).toContain('Promise Broken')
      expect(buttons[1].textContent).toContain('Promise Kept')
    })
})

describe('handleResolvePromise function', () => {
  it('when brokenButton is clicked, the function is called with `broken`', async () => {
    const handleResolvePromise = vi.fn()
    render(
      <Promise promise={pledge} handleResolvePromise={handleResolvePromise} />
    )

    const brokenButton = screen.getByRole('button', {
      name: 'Promise Broken!',
    })
    await user.click(brokenButton)

    expect(handleResolvePromise).toBeCalledWith('broken')
  }),
    it('when brokenButton is clicked, the function is called with `broken`', async () => {
      const handleResolvePromise = vi.fn()
      render(
        <Promise promise={pledge} handleResolvePromise={handleResolvePromise} />
      )

      const brokenButton = screen.getByRole('button', {
        name: 'Promise Kept!',
      })
      await user.click(brokenButton)

      expect(handleResolvePromise).toBeCalledWith('kept')
    })
})
