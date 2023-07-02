import { vi, test, expect, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import PromiseProfileForm from '../../../client/components/AddPromisePage/AddPromiseForm'
import { PledgeDraft } from '../../../models/pledge_models'
import userEvent from '@testing-library/user-event'
import { FriendsDraft } from '../../../models/friends_models'

vi.mock('../../../client/apis/promises')

const user = userEvent.setup()
afterEach(cleanup)
