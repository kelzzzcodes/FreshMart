import { render, screen } from '@testing-library/react'
import Landing from '../../src/_root/pages/landing/Landing'

import TestWrapper from '../utils/TestWrapper'
import '@testing-library/jest-dom'

describe('Landing Component', () => {
  test('renders the welcome message', () => {
    render(
      <TestWrapper>
        <Landing />
      </TestWrapper>,
    )

    // Check if the LandingHero component is rendered
    const landingHero = screen.getByTestId('landing-hero')
    expect(landingHero).toBeInTheDocument()
  })
})
