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
