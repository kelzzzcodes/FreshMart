import React from 'react';
import { render } from '@testing-library/react';
import Welcome from '../../src/components/Welcome';

describe('Welcome', () => {
  it('should render welcome with the title once the title is provided', () => {
    const { getByRole } = render(<Welcome title="FreshMart" />);
    expect(getByRole('heading', { name: /welcome to freshmart/i })).toBeInTheDocument();
  });
});
