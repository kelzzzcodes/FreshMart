import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LandingHero from '../../src/components/landingHero/LandingHero'
import { landingHeroLeftItems } from '../../src/constant'

describe('LandingHero Component', () => {
  test('renders heading, paragraph, and image correctly', () => {
    render(<LandingHero/>)

    // Check if the heading is rendered
    expect(screen.getByText(/Fresh From Our Farm To Your Table/i)).toBeInTheDocument()

    // Check if the paragraph is rendered
    expect(screen.getByText(/Experience the best of local farms/i)).toBeInTheDocument()

    // Check if the image in the right section is rendered
    const heroImage = screen.getByAltText('')
    expect(heroImage).toHaveAttribute('src', './assets/heroImage.png')
  })

  test('renders left section items correctly', () => {
    render(<LandingHero />)

    // Loop through landingHeroLeftItems and check if each label is rendered
    landingHeroLeftItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })
  })

  test('hides the right section on smaller screens', () => {
    render(<LandingHero />)

    // Check if the right section is rendered initially
    const rightSection = screen.getByAltText('')
    expect(rightSection).toBeInTheDocument()

    // Simulate smaller screen
    window.innerWidth = 768
    window.dispatchEvent(new Event('resize'))

    // Check if the right section is hidden
    expect(rightSection).not.toBeVisible()
  })
})
