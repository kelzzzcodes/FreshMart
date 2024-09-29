import React from 'react'
import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'

import '@testing-library/jest-dom'
import LandingHero from '../../src/components/landingHero/LandingHero'
import { landingHeroLeftItems } from '../../src/constant'

describe('LandingHero Component', () => {
  test('renders heading, paragraph, and image correctly', () => {
    render(<LandingHero />)

    // Check if the heading is rendered
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/Fresh From Our Farm To Your/i)
    expect(heading).toHaveTextContent(/Table/i)

    // Check if the paragraph is rendered
    expect(
      screen.getByText(/Experience the best of local farms/i),
    ).toBeInTheDocument()

    // Check if the image in the right section is rendered
    const heroImage = screen.getByAltText('Hero image')
    expect(heroImage).toHaveAttribute('src', './assets/heroImage.png')
  })

  test('renders left section items correctly', () => {
    render(<LandingHero />)

    // Loop through landingHeroLeftItems and check if each label is rendered
    landingHeroLeftItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })
  })
})
