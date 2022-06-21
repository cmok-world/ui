import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    name: 'light';
    space: typeof space;
  }
}

const space = [4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 144];

const colors = {
  background: '#fff',
  text: '#000',
};

export const lightTheme: DefaultTheme = {
  colors,
  name: 'light',
  space,
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#000',
    text: '#fff',
  },
  space,
  name: 'light',
};
