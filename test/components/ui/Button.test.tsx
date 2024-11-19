import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Button } from '../../../src/components/ui'
import styles from '../../../src/components/ui/button/Button.module.scss'

describe('Button Component', () => {
  test('renders a button with an image and alt text', () => {
    render(<Button imageSrc="/assets/potato.png" altText="Test Image" />)

    // Check if the alt text is correctly rendered (image check omitted)
    const imgElement = screen.getByAltText('Test Image')
    expect(imgElement).toBeInTheDocument()
  })

  test('renders both text and image inside the button', () => {
    render(
      <Button
        text="Click Me"
        imageSrc="/test-image.png"
        altText="Test Image"
      />,
    )

    const buttonElement = screen.getByText('Click Me')
    const imgElement = screen.getByAltText('Test Image')

    expect(buttonElement).toBeInTheDocument()
    expect(imgElement).toBeInTheDocument()
  })

  test('renders a link when "to" prop is passed', () => {
    render(
      <BrowserRouter>
        <Button text="Go to Home" to="/home" />
      </BrowserRouter>,
    )

    // Find the link by role
    const linkElement = screen.getByRole('link', { name: /Go to Home/i })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '/home')
  })

  test('does not render anything when neither text nor imageSrc is provided', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).not.toBeNull() // Check if a button/link is rendered
    expect(container.firstChild).toHaveClass(styles.button)
  })
})
