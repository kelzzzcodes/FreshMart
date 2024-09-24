import { render, screen } from '@testing-library/react'
import Landing from '../../src/_root/pages/landing/Landing'

import TestWrapper from '../utils/TestWrapper'
import '@testing-library/jest-dom'

describe('Landing Component', () => {
  test('renders the welcome message', () => {
    render(
      <TestWrapper>
        <Landing />
      </TestWrapper>
    )

    const welcomeMessage = screen.getByText(/Welcome to FreshMart/i)
    expect(welcomeMessage).toBeInTheDocument()
  })
})
