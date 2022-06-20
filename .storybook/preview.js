import { globalDecorators } from './decorators';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = globalDecorators;

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'UI theme',
    defaultValue: 'Light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
    },
  },
};
