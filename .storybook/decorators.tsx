import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/GlobalStyle';

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme ?? context.globals.theme;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  );
};

export const globalDecorators = [withTheme];
