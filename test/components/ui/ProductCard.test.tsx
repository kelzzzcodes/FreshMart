import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ProductCard } from '../../../src/components/ui'
import styles from '../../../src/components/ui/ProductCard.module.scss'
import { featuredProductsCardItems } from '../../../src/data'

describe('ProductCard Component', () => {
  const productItem = {
    id: featuredProductsCardItems[0].key,
    imageUrl: featuredProductsCardItems[0].imageUrl,
    oldPrice: featuredProductsCardItems[0].oldPrice,
    newPrice: featuredProductsCardItems[0].newPrice,
    label: featuredProductsCardItems[0].label,
  }

  test('renders with correct props and displays them correctly', () => {
    render(<ProductCard {...productItem} />)

    // Check if the image is rendered with correct src and alt attribute
    const imgElement = screen.getByRole('img', {
      name: productItem.id,
    })
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', productItem.imageUrl)

    // Check if oldPrice is displayed
    const oldPriceElement = screen.getByText(productItem.oldPrice)
    expect(oldPriceElement).toBeInTheDocument()

    // Check if newPrice is displayed
    const newPriceElement = screen.getByText(productItem.newPrice)
    expect(newPriceElement).toBeInTheDocument()

    // Check if label is displayed
    const labelElement = screen.getByText(productItem.label)
    expect(labelElement).toBeInTheDocument()
  })

  test('applies correct classNames to the elements', () => {
    render(<ProductCard {...productItem} />)

    // Check if the main card container has the correct class
    const productCardContainer = screen.getByTestId('product-card-item')
    expect(productCardContainer).toHaveClass('productCard')

    // Check if the inner content container has the correct class
    const contentElement = screen
      .getByTestId('product-card-item')
      .querySelector(`.${styles.productCard__content}`)

    // Ensure contentElement exists before proceeding
    expect(contentElement).not.toBeNull()

    if (contentElement) {
      expect(contentElement).toHaveClass('productCard__content')

      // Check if the left content container has the correct class
      const contentLeftElement = contentElement.querySelector(
        `.${styles.productCard__content__left}`,
      )

      expect(contentLeftElement).not.toBeNull()

      if (contentLeftElement) {
        expect(contentLeftElement).toHaveClass('productCard__content__left')

        // Check if the pricing section has the correct class
        const pricingElement = contentLeftElement.querySelector(
          `.${styles.productCard__content__left__pricing}`,
        )

        expect(pricingElement).not.toBeNull()

        if (pricingElement) {
          expect(pricingElement).toHaveClass(
            'productCard__content__left__pricing',
          )
        }
      }
    }
  })
  test('handles optional newPrice correctly', () => {
    const { newPrice, ...productWithoutNewPrice } = productItem

    render(<ProductCard {...productWithoutNewPrice} />)

    // Ensure oldPrice is displayed
    const oldPriceElement = screen.getByText(productWithoutNewPrice.oldPrice)
    expect(oldPriceElement).toBeInTheDocument()

    // Check if newPrice is not rendered
    const newPriceElement = screen.queryByText(newPrice)
    expect(newPriceElement).not.toBeInTheDocument()
  })
})
