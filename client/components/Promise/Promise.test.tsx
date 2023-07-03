//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import Promise from './Promise'
import { PledgeFrontEnd } from '../../../models/pledge_models'

interface FakePromise {
  promiseName: string
  promiseDescription: string
  userId: string
  friendUserId: string
  status: string
}

// describe('Promise component shows props', () =>
//   it('shows the promise data', async () => {
//     const pledge = {
//       promiseName: 'name',
//       promiseDescription: 'text',
//       userId: '1',
//       friendUserId: '3',
//       status: 'pending',
//     }

//     render(<Promise promise={pledge} />)

//     const name = screen.getByText('Name: name')
//     expect(name.textContent).toContain('name')
//     const description = screen.getByText('Desc: text')
//     expect(description.textContent).toContain('text')
//     const status = screen.getByText('Status: pending')
//     expect(status.textContent).toContain('pending')
//   }))

describe('Promise component shows buttons', () => {
  it('shows the Promise Broken and Promise Kept buttons', async () => {
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

    render(<Promise promise={pledge} handleBrokenPromise={() => {}} handleKeptPromise={() => {}} />)

    const buttons = await screen.getAllByRole('button')
    expect(buttons[0].textContent).toContain('Promise Broken')
    expect(buttons[1].textContent).toContain('Promise Kept')
  })
})
