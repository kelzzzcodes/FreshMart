import { render, screen } from '@testing-library/react'

import styles from './SignUpLeft.module.scss'
import { SignUpLeft } from '../../src/components'

describe('SignUpLeft Component', () => {
  test('renders the images with correct src and alt attributes', () => {
    render(<SignUpLeft />)

    // Check if the first image is rendered with the correct src and alt text
    const bgImage = screen.getByAltText('signUpBg')
    expect(bgImage).toBeInTheDocument()
    expect(bgImage).toHaveAttribute('src', './assets/signUpImage.png')

    // Check if the second image is rendered with the correct src and alt text
    const iconImage = screen.getByAltText('signUpIcon')
    expect(iconImage).toBeInTheDocument()
    expect(iconImage).toHaveAttribute('src', './assets/signUpIcon.png')
  })

  test('applies the correct styles from SignUpLeft.module.scss', () => {
    const { container } = render(<SignUpLeft />)

    // Check if the component has the correct CSS class applied
    const signUpLeftDiv = container.firstChild
    expect(signUpLeftDiv).toHaveClass(styles.signUpLeft)
  })
})
