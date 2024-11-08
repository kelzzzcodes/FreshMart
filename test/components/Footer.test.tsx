import { render, screen } from '@testing-library/react'
import { Footer } from '../../src/components'
import styles from './Footer.module.scss'

describe('Footer component', () => {
  test('should render img with correct src and alt attributes', () => {
    render(<Footer />)

    const imgElement = screen.getByAltText('footerStroke') // find image by alt text
    expect(imgElement).toBeInTheDocument() // check if the img is in the document
    expect(imgElement).toHaveAttribute('src', './assets/footerStroke.png') // check if the src is correct
  })

  test('should apply the correct styles', () => {
    render(<Footer />)

    const footerElement = screen.getByRole('contentinfo') // footer tag is a landmark element with role contentinfo
    expect(footerElement).toHaveClass(styles.footer) // check if the footer has the correct class

    const containerElement = screen.getByText(
      /The Best spot for all your fresh buys/i,
    ).parentElement
    expect(containerElement).toHaveClass(styles.footer__container) // check if the div has the correct class
  })

  test('should render correct h3 content', () => {
    render(<Footer />)

    const h3Element = screen.getByText(/The Best spot for all your fresh buys/i)
    expect(h3Element).toBeInTheDocument() // check if h3 is in the document
    expect(h3Element.tagName).toBe('H3') // check if it is an h3 element
  })
})
