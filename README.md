
# RenDAO

RenDAO is a decentralized application that allows users to create and vote on proposals, manage their reputation score, and interact with a decentralized autonomous organization (DAO).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `.next` folder.
- `npm run start`: Starts a Next.js production server.
- `npm run lint`: Runs the linter.

## Folder Structure

```
.
├── .next
├── node_modules
├── public
│   ├── donor.png
│   ├── sponsor.png
│   └── victim.png
├── src
│   ├── app
│   │   ├── api
│   │   ├── benefactors
│   │   ├── dashboard
│   │   ├── proposal
│   │   ├── sponsor
│   │   ├── status
│   │   └── testimonials
│   ├── components
│   └── lib
├── .eslintrc.json
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

- **`/public`**: Contains static assets like images.
- **`/src/app`**: Contains the main application logic, including pages and API routes.
- **`/src/components`**: Contains reusable React components.
- **`/src/lib`**: Contains library code, such as utility functions.

## Technologies Used

- [Next.js](https.nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [Next Themes](https://github.com/pacocoursey/next-themes)
