//@vitest-environment jsdom
import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import Pledge from './Pledge'

import { Pledge } from '../../../models/promise_models'
import { renderComponent } from '../../test-utils'