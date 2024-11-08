import { render, screen } from '@testing-library/react'
import TestWrapper from '../utils/TestWrapper'
import { SignUp } from '../../src/_root/pages'


describe('SignUp Component', () => {
  beforeEach(() => {
    render(
      <TestWrapper>
        <SignUp/>
      </TestWrapper>,
    )
  })

  test('renders the SignUpLeft component', () => {
    // Check if SignUpLeft is rendered
    const signUpLeft = screen.getByTestId('sign-up-left')
    expect(signUpLeft).toBeInTheDocument()
    expect(signUpLeft).toHaveClass('signUpLeft') // Checks if the class is applied
  })

  test('renders the SignUpRight component', () => {
    // Check if SignUpRight is rendered
    const signUpRight = screen.getByTestId('sign-up-right')
    expect(signUpRight).toBeInTheDocument()
    expect(signUpRight).toHaveClass('signUpRight') // Checks if the class is applied
  })

  test('applies the main signUp styling to the section', () => {
    // Check if the main signUp section is styled correctly
    const signUpSection = screen.getByTestId('sign-up-section')
    expect(signUpSection).toBeInTheDocument()
    expect(signUpSection).toHaveClass('signUp')
  })
})
