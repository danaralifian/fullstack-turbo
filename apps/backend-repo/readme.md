# Account Service Backend

This is the backend service for managing user accounts.

## Prerequisites

- use node version >=22
- Create a `.env.local` file by copying from `env.example`.

```bash
npm install -g firebase-tools
npm install
```

- login to your firebase
- update .firebaserc with your projectID

```bash
{
  "projects": {
    "default": "[PROJECT_ID]"
  }
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5001](http://localhost:5001) with your browser to see the result.

## Using firebase function emulator

```bash
cd apps/backend-repo
npm run serve
```

http://127.0.0.1:5001/[PROJECT_ID]/us-central1/api

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

## Authors

- [@danaralifian](https://github.com/danaralifian)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Tech Stack

Node, Express, Firebase, Typescript
