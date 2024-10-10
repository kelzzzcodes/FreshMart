import React, { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LandingHero from '../../src/components/landingHero/LandingHero'
import { landingHeroLeftItems } from '../../src/data'

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  SwiperSlide: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}))

describe('LandingHero Component', () => {
  test('renders heading, paragraph, and image correctly', () => {
    render(<LandingHero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/Fresh From Our Farm To Your/i)
    expect(heading).toHaveTextContent(/Table/i)

    expect(
      screen.getByText(/Experience the best of local farms/i),
    ).toBeInTheDocument()

    const heroImage = screen.getByAltText('Hero image')
    expect(heroImage).toHaveAttribute('src', './assets/heroImage.png')
  })

  test('renders left section items correctly', () => {
    render(<LandingHero />)

    landingHeroLeftItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })
  })

  test('renders the Swiper slides correctly', () => {
    render(<LandingHero />)

    const slides = screen.getAllByRole('img')
    expect(slides.length).toBeGreaterThan(0)
  })
})
