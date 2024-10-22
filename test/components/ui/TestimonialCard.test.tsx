import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import styles from './TestimonialCard.module.scss'
import { testimonialCardItems } from '../../../src/data'
import TestimonialCard from '../../../src/components/ui/testimonialCard/TestimonialCard'

describe('TestimonialCard Component', () => {
  const testimonialItem = testimonialCardItems[0] // Assuming you're testing the first item in the array

  test('renders with correct props and displays them correctly', () => {
    render(<TestimonialCard {...testimonialItem} />)

    // Check if the image is rendered with correct src and alt attribute
    const imgElement = screen.getByRole('img', {
      name: testimonialItem.id,
    })
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', testimonialItem.imageUrl)

    // Check if the name is displayed
    const nameElement = screen.getByText(testimonialItem.name)
    expect(nameElement).toBeInTheDocument()

    // Check if the description is displayed
    const descriptionElement = screen.getByText(testimonialItem.description)
    expect(descriptionElement).toBeInTheDocument()
  })

  test('applies correct classNames to the elements', () => {
    render(<TestimonialCard {...testimonialItem} />)

    // Check if the main card container has the correct class
    const testimonialCardContainer = screen.getByTestId('testimonial-card')
    expect(testimonialCardContainer).toHaveClass('testimonialCard')

    // Check if the top section container has the correct class
    const topSection = testimonialCardContainer.querySelector(
      `.${styles.testimonialCard__top}`,
    )
    expect(topSection).not.toBeNull()

    // Ensure the top section is properly rendered with correct class
    if (topSection) {
      expect(topSection).toHaveClass('testimonialCard__top')
    }
  })
})
