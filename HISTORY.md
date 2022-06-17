# history

## Setup

Add `package.json`.

Install React `peerDependencies`.

```sh
npm i --save-per react react-dom
```

Set up TypeScript.

```sh
npm i -D typescript
npm i -D @types/react @types/react-dom
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
