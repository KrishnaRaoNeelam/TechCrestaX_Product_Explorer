# Product Explorer

A responsive product discovery app built with **React**, **TypeScript** and **CSS**. Search products by name, filter by category and sort by price. All data is stored locally, so no backend or database is needed.

- **Live demo:** `<your-vercel-url-here>`
- **GitHub repository:** `<your-github-repo-url-here>`

## Features

- Responsive product grid (4 / 3 / 2 / 1 columns across desktop, tablet and mobile)
- Case-insensitive, trimmed search by product name with instant results
- Category dropdown built from the product data
- Price sorting: Default, Low to High, High to Low (original array is never mutated)
- Search, category and sort all work together
- Live product count ("Showing 6 products")
- Empty state with a **Clear Filters** button that resets everything
- Image fallback when a product image fails to load
- Semantic HTML, labelled controls, alt text and visible focus styles

## Technology Stack

React 18, TypeScript, Vite, CSS3 (Grid and Flexbox), Lucide React icons.

## Project Structure

```
product-explorer/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── EmptyState.tsx
│   │   ├── FilterControls.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── SearchBar.tsx
│   ├── data/
│   │   └── products.ts
│   ├── types/
│   │   └── Product.ts
│   ├── utils/
│   │   ├── format.ts
│   │   └── productFilters.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Prerequisites

- Node.js 18 or newer
- npm (included with Node.js)

## Installation and Running Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually http://localhost:5173).

## Build

```bash
npm run build
```

This runs the TypeScript compiler and then creates the production bundle in `dist/`. If it finishes without errors, the production build succeeds. Use `npm run preview` to serve the built app locally.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Sign in to [vercel.com](https://vercel.com) and click **Add New → Project**.
3. Import the repository. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`).
4. Click **Deploy** and paste the resulting URL into the placeholder above.
