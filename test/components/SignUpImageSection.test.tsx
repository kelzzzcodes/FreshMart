import { render, screen } from '@testing-library/react'

import styles from './SignUpImageSection.module.scss'
import { SignUpImageSection } from '../../src/components'

describe('SignUpImageSection Component', () => {
  test('renders the images with correct src and alt attributes', () => {
    render(<SignUpImageSection />)

    // Check if the first image is rendered with the correct src and alt text
    const bgImage = screen.getByAltText('signUpBg')
    expect(bgImage).toBeInTheDocument()
    expect(bgImage).toHaveAttribute('src', './assets/signUpImage.png')

    // Check if the second image is rendered with the correct src and alt text
    const iconImage = screen.getByAltText('signUpIcon')
    expect(iconImage).toBeInTheDocument()
    expect(iconImage).toHaveAttribute('src', './assets/signUpIcon.png')
  })

  test('applies the correct styles from SignUpImageSection.module.scss', () => {
    const { container } = render(<SignUpImageSection />)

    // Check if the component has the correct CSS class applied
    const SignUpImageSectionDiv = container.firstChild
    expect(SignUpImageSectionDiv).toHaveClass(styles.signUpImageSection)
  })
})
