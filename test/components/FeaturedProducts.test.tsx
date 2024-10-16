import { render, screen } from '@testing-library/react'
import { featuredProductsCardItems } from '../../src/data' // Import mock product data
import '@testing-library/jest-dom'
import TestWrapper from '../utils/TestWrapper' // Assuming you use this for wrapping
import { FeaturedProducts } from '../../src/components'

describe('FeaturedProducts Component', () => {
  test('renders h2 title "Featured Products"', () => {
    render(
      <TestWrapper>
        <FeaturedProducts />
      </TestWrapper>,
    )

    // Check for the h2 title
    const titleElement = screen.getByRole('heading', {
      level: 2,
      name: 'Featured Products',
    })
    expect(titleElement).toBeInTheDocument()
  })

  test('renders ProductCard components', () => {
    render(
      <TestWrapper>
        <FeaturedProducts />
      </TestWrapper>,
    )

    // Check if the ProductCard components are rendered
    const productCards = screen.getAllByTestId('product-card-item')
    expect(productCards.length).toBe(featuredProductsCardItems.length) // Ensures ProductCard items match the data length
  })

  test('renders exactly 9 ProductCard components', () => {
    render(
      <TestWrapper>
        <FeaturedProducts />
      </TestWrapper>,
    )

    // Ensure that exactly 9 ProductCard items are rendered
    const productCards = screen.getAllByTestId('product-card-item')
    expect(productCards).toHaveLength(9)
  })

  test('applies correct styles to FeaturedProducts component', () => {
    render(
      <TestWrapper>
        <FeaturedProducts />
      </TestWrapper>,
    )

    // Check if the FeaturedProducts section has the correct class
    const featuredProductsSection = screen.getByTestId('featured-products')
    expect(featuredProductsSection).toHaveClass('featuredProducts')

    // Check if the product card container has the correct class
    const productCardContainer = screen.getByTestId('product-card')
    expect(productCardContainer).toHaveClass('featuredProducts__card')
  })
})
