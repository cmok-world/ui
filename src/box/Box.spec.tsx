/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';
import { Box } from './Box.component';

const customRender = (ui: ReactElement) =>
  render(ui, { wrapper: p => <ThemeProvider theme={lightTheme}>{p.children}</ThemeProvider> });

describe('Box', () => {
  it('renders <span> by default', () => {
    const view = customRender(<Box>Box</Box>);

    expect(view.container.querySelector('span')).toBeInTheDocument();
  });

  it('applies padding from theme', () => {
    const view = customRender(
      <Box p={1} m={2}>
        Box
      </Box>
    );

    expect(view.container.querySelector('span')).toHaveStyle({ padding: '8px', margin: '12px' });
  });
});
