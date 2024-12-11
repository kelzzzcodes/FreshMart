import { render, screen } from '@testing-library/react'
import TestWrapper from '../utils/TestWrapper'
import { SignUp } from '../../src/_root/pages'

describe('SignUp Component', () => {
  beforeEach(() => {
    render(
      <TestWrapper>
        <SignUp />
      </TestWrapper>,
    )
  })

  test('renders the SignUpImageSection component', () => {
    // Check if SignUpImageSection is rendered
    const signUpImageSection = screen.getByTestId('sign-up-left')
    expect(signUpImageSection).toBeInTheDocument()
    expect(signUpImageSection).toHaveClass('signUpImageSection')
  })

  test('renders the SignUpFormSection component', () => {
    // Check if SignUpFormSection is rendered
    const signUpFormSection = screen.getByTestId('sign-up-right')
    expect(signUpFormSection).toBeInTheDocument()
    expect(signUpFormSection).toHaveClass('signUpFormSection') // Checks if the class is applied
  })

  test('applies the main signUp styling to the section', () => {
    // Check if the main signUp section is styled correctly
    const signUpSection = screen.getByTestId('sign-up-section')
    expect(signUpSection).toBeInTheDocument()
    expect(signUpSection).toHaveClass('signUp')
  })
})
