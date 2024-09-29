import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../../src/components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

describe('Navbar Component', () => {
  test('renders the navbar with logo and hamburger menu', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )

    // Check if the logo link is in the document
    const logoElement = screen.getByText(/FreshMart/i)
    expect(logoElement).toBeInTheDocument()
    expect(logoElement.closest('a')).toHaveAttribute('href', '/')

    // Check if the hamburger menu with the specific id is in the document
    const hamburgerIcon = screen.getByTestId('hamburger-icon')
    expect(hamburgerIcon).toBeInTheDocument()
  })
})
