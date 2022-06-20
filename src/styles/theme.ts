import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    name: 'light';
  }
}

const colors = {
  background: '#fff',
  text: '#000',
};

export const lightTheme: DefaultTheme = {
  colors,
  name: 'light',
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#000',
    text: '#fff',
  },
  name: 'light',
};
