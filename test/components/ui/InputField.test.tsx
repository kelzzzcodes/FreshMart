import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { InputField } from '../../../src/components/ui'

describe('InputField Component', () => {
  const mockRegister = jest.fn()

  test('renders input field with correct props', () => {
    render(
      <InputField
        type="text"
        name="username"
        placeholder="Enter your username"
        register={mockRegister}
      />,
    )

    const inputElement = screen.getByPlaceholderText('Enter your username')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'text')
    expect(inputElement).toHaveAttribute('name', 'username')
  })

  test('applies correct classes to input and error', () => {
    render(
      <InputField
        type="text"
        name="email"
        register={mockRegister}
        error="Email is required"
      />,
    )

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveClass('inputField__inputs')

    const errorElement = screen.getByText('Email is required')
    expect(errorElement).toBeInTheDocument()
    expect(errorElement).toHaveClass('inputField__error')
  })

  test('does not display error for type checkbox', () => {
    render(<InputField type="checkbox" name="terms" register={mockRegister} />)

    const checkboxElement = screen.getByRole('checkbox')
    expect(checkboxElement).toBeInTheDocument()

    // Verify that no error message is shown
    const errorElement = screen.queryByText(/wrong credentials/i)
    expect(errorElement).not.toBeInTheDocument()
  })
})
