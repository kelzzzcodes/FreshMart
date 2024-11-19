import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { SignUpFormSection } from '../../src/components'

describe('SignUpFormSection Component', () => {
  test('renders form elements with correct placeholders and labels', () => {
    render(
      <Router>
        <SignUpFormSection />
      </Router>,
    )

    // Check for form field placeholders
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()

    // Check for other elements like checkboxes and links
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/Privacy Policy/)).toBeInTheDocument()
    expect(screen.getByText(/Terms and Condition/)).toBeInTheDocument()
    expect(screen.getByText('Already have an account?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign In/})).toHaveAttribute(
      'href',
      '/sign-in',
    )
  })
})
