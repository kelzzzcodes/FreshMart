import { render, screen } from '@testing-library/react'
import TestWrapper from '../utils/TestWrapper'
import Landing from '../../src/_root/pages/landing/Landing'

describe('Landing Component', () => {
  beforeEach(() => {
    render(
      <TestWrapper>
        <Landing />
      </TestWrapper>,
    )
  })

  test('renders the landing hero section', () => {
    // Verify if the LandingHero section is rendered
    const landingHero = screen.getByTestId('landing-hero')
    expect(landingHero).toBeInTheDocument()
  })

  test('renders FeaturedProducts component', () => {
    // Check if FeaturedProducts is rendered
    const featuredProductsComponent = screen.getByTestId('featured-products')
    expect(featuredProductsComponent).toBeInTheDocument()
  })
})
