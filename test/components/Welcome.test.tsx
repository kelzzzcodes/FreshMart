import React from 'react'
import { render, screen } from '@testing-library/react'
import Welcome from '../../src/components/Welcome'


describe('Welcome', () => {
  it('it should render welcome with the title once the title is provided  ', () => {
    render(<Welcome title="FreshMart" />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/freshmart/i)
    // screen.debug()
  })
})
