import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/' // For the 'toBeInTheDocument' matcher

import styles from './PersonalisedRecommendation.module.scss' // Import the styles to check class names
import PersonalisedRecommendation from '../../src/components/personalisedRecommendation/PersonalisedRecommendation'

describe('PersonalisedRecommendation Component', () => {
  test('renders h2 and p with correct text and class names', () => {
    render(<PersonalisedRecommendation />) // Render the component

    // Check if the h2 is present and has the correct text
    const h2Element = screen.getByRole('heading', { level: 2 })
    expect(h2Element).toBeInTheDocument()
    expect(h2Element).toHaveTextContent('Your Smart Farm Shopping Companion')

    // Check if the p tag is present and has the correct text
    const pElement = screen.getByText(
      /Get personalized farm-to-table recommendations/i,
    )
    expect(pElement).toBeInTheDocument()
    expect(pElement).toHaveTextContent(
      'Get personalized farm-to-table recommendations, track your deliveries, and discover recipes, all with the help of our AI assistant',
    )

    // Check the class names
    const sectionElement = screen.getByRole('region') // Adjust if needed to find the section
    expect(sectionElement).toHaveClass(styles.personalisedRecommendation)

    const containerElement = screen
      .getByText(/Your Smart Farm Shopping Companion/i)
      .closest('div')
    expect(containerElement).toHaveClass(
      styles.personalisedRecommendation__container,
    )
  })
  test('renders an img tag with the correct alt text', () => {
    render(<PersonalisedRecommendation />) // Render the component

    // Check if the img tag is present and has the correct alt text
    const imgElement = screen.getByRole('img', { name: /Personalized Icon/i }) // Adjust the alt text as necessary
    expect(imgElement).toBeInTheDocument()
  })
})
