import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/GlobalStyle';

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme ?? context.globals.theme;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    /**
     * There's an error in styled-components typings that we need to ignore.
     * @see https://github.com/styled-components/styled-components/issues/3731#issuecomment-1129717558
     */
    /* @ts-ignore */
    <ThemeProvider theme={storyTheme}>
      {/* @ts-ignore (same reason as above) */}
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  );
};

export const globalDecorators = [withTheme];
