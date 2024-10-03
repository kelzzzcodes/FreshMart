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

    const logoElement = screen.getByText(/FreshMart/i)
    expect(logoElement).toBeInTheDocument()
    expect(logoElement.closest('a')).toHaveAttribute('href', '/')

    const hamburgerIcon = screen.getByTestId('hamburger-icon')
    expect(hamburgerIcon).toBeInTheDocument()
  })
})
