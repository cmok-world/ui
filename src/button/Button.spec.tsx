/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';
import { Button } from './Button.component';

const customRender = (ui: ReactElement) =>
  render(ui, { wrapper: p => <ThemeProvider theme={lightTheme}>{p.children}</ThemeProvider> });

describe('Button', () => {
  it('renders <button>', () => {
    customRender(<Button>Submit</Button>);

    expect(screen.getByRole('button')).toContainHTML('Submit');
  });

  it('applies provided type', () => {
    customRender(<Button type="submit">Submit</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
