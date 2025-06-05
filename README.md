# Portfolio harmony tool backend

## Set Up

- Install pnpm if not present.

```bash
npm i -g pnpm
```

- Install the dependencies.

```bash
pnpm i
```

- Start the server in development mode.

```bash
pnpm dev
```

## Env vars

Loaded from `.env` file, with schema validation

## Backend API Development

There are a number of handy commands you can run to help with development.

|Command | Action |
|---|---|
|`pnpm run dev` | Run the server in dev mode, automatically restarts on file change |
|`pnpm build`| Compile TypeScript to JavaScript |
|`pnpm start`| Start JavaScript from 'build' directory |
|`pnpm test`| Run unit tests (run `pnpm build` before) |
|`pnpm test:watch`| Run backend tests in watch mode, running on changed test files |
|`pnpm lint`| Run eslint |
|`pnpm lint:fix`| Run eslint in fix mode |

## Recommended Vscode Extensions

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
