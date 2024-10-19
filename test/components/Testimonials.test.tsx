import { render, screen } from '@testing-library/react'

import TestWrapper from '../utils/TestWrapper' // Assuming you use this for wrapping
import { Testimonials } from '../../src/components'
import { testimonialCardItems } from '../../src/data'

describe('Testimonials Component', () => {
  test('renders h2 title "Hear from our awesome Customers!"', () => {
    render(
      <TestWrapper>
        <Testimonials />
      </TestWrapper>,
    )

    // Check for the h2 title
    const titleElement = screen.getByRole('heading', {
      level: 2,
      name: 'Hear from our awesome Customers!',
    })
    expect(titleElement).toBeInTheDocument()
  })

  test('renders 6 TestimonialCard components', () => {
    render(
      <TestWrapper>
        <Testimonials />
      </TestWrapper>,
    )

    // Check if the TestimonialCard components are rendered
    const testimonialCards = screen.getAllByTestId('testimonial-card')
    expect(testimonialCards).toHaveLength(6) // Ensures exactly 6 TestimonialCard items are rendered
  })

  test('renders TestimonialCard components for each item in testimonialCardItems', () => {
    render(
      <TestWrapper>
        <Testimonials />
      </TestWrapper>,
    )

    // Check if the TestimonialCard components match the length of testimonialCardItems
    const testimonialCards = screen.getAllByTestId('testimonial-card')
    expect(testimonialCards.length).toBe(testimonialCardItems.length)
  })

  test('applies correct styles to Testimonials component', () => {
    render(
      <TestWrapper>
        <Testimonials />
      </TestWrapper>,
    )

    // Check if the testimonials section has the correct class
    const testimonialsSection = screen.getByTestId('testimonials-section')
    expect(testimonialsSection).toHaveClass('testimonials')

    // Check if the testimonials container has the correct class
    const testimonialsContainer = screen.getByTestId('testimonials-container')
    expect(testimonialsContainer).toHaveClass('testimonials__container')
  })
})
