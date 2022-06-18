/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders <button>', () => {
    render(<Button>Submit</Button>);

    expect(screen.getByRole('button')).toContainHTML('Submit');
  });

  it('applies provided type', () => {
    render(<Button type="submit">Submit</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
