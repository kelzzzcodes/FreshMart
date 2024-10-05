import { render, screen } from '@testing-library/react'
import { FeaturedProducts } from '../../src/components'
import { featuredProductsCardItems } from '../../src/constant'

// Mock the ProductCard component
jest.mock('../../src/components/ui', () => ({
  ProductCard: jest.fn(({ id, imageUrl, oldPrice, newPrice, label }) => (
    <div data-testid="product-card-item" id={id}>
      <img src={imageUrl} alt={label} />
      <p>{label}</p>
      <span>{oldPrice}</span>
      {newPrice && <span>{newPrice}</span>}
    </div>
  )),
}))

describe('FeaturedProducts Component', () => {
  beforeEach(() => {
    render(<FeaturedProducts />)
  })

 

  test('renders the correct heading', () => {
    const headingElement = screen.getByRole('heading', {
      name: /featured products/i,
    })
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveTextContent('Featured Products')
  })

  test('renders the correct number of ProductCard components', () => {
    // Since you added data-testid to the div containing the ProductCard items
    const productCardContainer = screen.getByTestId('product-card')
    expect(productCardContainer).toBeInTheDocument()

    // Now checking the number of ProductCard items
    const productCardItems = screen.getAllByTestId('product-card-item')
    expect(productCardItems).toHaveLength(featuredProductsCardItems.length)
  })

  test('passes correct props to each ProductCard component', () => {
    featuredProductsCardItems.forEach((item, index) => {
      const productCard = screen.getAllByTestId('product-card-item')[index]
      expect(productCard).toContainHTML(item.label)
      expect(productCard).toContainHTML(item.oldPrice.toString())

      if (item.newPrice) {
        expect(productCard).toContainHTML(item.newPrice.toString())
      }
    })
  })
})
