# history

## Setup

Add `package.json`.

Install React `peerDependencies`.

```sh
npm i --save-per react@^17.0.0 react-dom^17.0.0
```

Set up TypeScript.

```sh
npm i -D typescript
npm i -D @types/react@^17.0.0 @types/react-dom@^17.0.0
```

Add `tsconfig.json`.

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": false,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src/**/*"]
}
```

Add a component and ensure the TypeScript compiler returns no errors.

```
npx tsc
```

## Storybook

Set up Storybook.

```sh
npx sb init
```

Clear `src/stories/` contents.

Add `src/stories/Introduction.stories.mdx`.

```mdx
import { Meta, Description } from '@storybook/addon-docs/blocks';
import README from '../../README.md';

<Meta title="Example/Introduction" />

<Description>{README}</Description>
```

Add `src/stories/Button.stories.tsx`.

```tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../buttons/Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem',
};
```

## Code style and quality

ESLint and Prettier.

```sh
npm i -D prettier eslint eslint-config-prettier eslint-plugin-prettier
```

ESLint support for React.

```sh
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

ESLint support for TypeScript.

```sh
@typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Configure ESLint using `.eslintrc.js` and `.eslintignore` files.

Configure Prettier using `.prettierrc` and `.prettierignore` files.

Lint and fix:

```sh
eslint . --cache
eslint . --cache --fix
```

## CSS-in-JS

```
npm install --save-peer styled-components
npm install --save-dev @types/styled-components
npm install --save polished
```

```
export const COLOR_PRIMARY = '#f66';
export const COLOR_SECONDARY = '#6ff';
```

```
import styled, { css } from 'styled-components';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../utils/styles';
import { Props } from './Button';

function getColors(props: Props) {
  if (props.variant === 'ghost') {
    return css`
      color: ${COLOR_PRIMARY};
      background-color: transparent;
    `;
  }

  if (props.variant === 'primary') {
    return css`
      color: ${COLOR_SECONDARY};
      background-color: ${COLOR_PRIMARY};
    `;
  }

  if (props.variant === 'secondary') {
    return css`
      color: ${COLOR_PRIMARY};
      background-color: ${COLOR_SECONDARY};
    `;
  }
}

export const StyledButton = styled.button<Props>`
  cursor: pointer;
  ${getColors}
`;
```

```
import { StyledButton } from './styles';

export interface Props extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button(props: Props) {
  const componentProps = { variant: 'primary', ...props };
  const { variant, ...buttonProps } = componentProps;

  return <StyledButton variant={variant as Props['variant']} {...buttonProps} />;
}
```

## prop-types

```sh
npm i -S prop-types
```

```tsx
import * as PropTypes from 'prop-types';
import { StyledButton } from './styles';

export interface Props extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button(props: Props) {
  const componentProps = { variant: 'primary', ...props };
  const { variant, ...buttonProps } = componentProps;

  return <StyledButton variant={variant as Props['variant']} {...buttonProps} />;
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
};
```

## Namespaces (compound) components

It's necessary to use an arrow function declaration. The regular function declaration cannot be typed as a namespaced component because it only allows its return value to be typed, and not the actual function type.

```tsx
import { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { useUniqueId } from '../utils/useUniqueId';
import { FieldContext } from './FieldContext';
import { Input } from './Input';
import { Label } from './Label';

type Props = Omit<React.ComponentProps<typeof FieldContext.Provider>, 'value'>;

interface ReturnType {
  Label: typeof Label;
  Input: typeof Input;
}

export const Field: JSXElementConstructor<Props> & ReturnType = (props: Props) => {
  const id = useUniqueId();

  return <FieldContext.Provider value={id}>{props.children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
```

## Jest and testing-library

```sh
npm i -D jest @types/jest ts-jest jest-environment-jsdom @testing-library/react@^12.0.0 @testing-library/jest-dom
```

jest-setup.ts

```ts
import '@testing-library/jest-dom';
```

jest.config.js

```js
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
```

tsconfig.json

```js
"include": ["src/**/*", "./jest-setup.ts"]
```

Button.spec.tsx

```tsx
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
```

`jest-environment-jsdom` [doesn't ship with Jest 28](https://jestjs.io/docs/upgrading-to-jest28#jsdom), we have to install it seperately and configure tests to use the environment through a config file or comment directive.
