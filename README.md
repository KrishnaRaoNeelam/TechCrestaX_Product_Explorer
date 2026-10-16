<<<<<<< HEAD
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
=======
Product Explorer

A responsive product discovery app built with React, TypeScript and Vite. Search by name, filter by category and sort by price, all with local data and no backend.

Show Image Show Image Show Image Show Image

Live Demo · Report a Bug

</div>
📖 Overview

Product Explorer is a front-end web application that lets users browse a catalogue of products. It was built for a Web Developer Practical Assessment, with a focus on clean code, reusable components, strong typing and a polished responsive interface.

All product data is stored locally in a TypeScript file, so there is no backend, database or API key to set up.

🖼️ Screenshots

Add your screenshots to a screenshots/ folder and update the paths below.

Desktop (1440px)	Tablet (768px)	Mobile (375px)
Show Image	Show Image	Show Image
✨ Features
Product grid – responsive layout using CSS Grid (4 / 3 / 2 / 1 columns).
Search – case-insensitive, trims extra spaces, updates as you type.
Category filter – dropdown generated from the product data, with an "All Categories" default.
Price sorting – Default Order, Price: Low to High, Price: High to Low.
Combined controls – search, category and sorting all work together.
Live product count – for example, "Showing 6 products".
Empty state – "No products found" message with a Clear Filters button that resets everything.
Image fallback – a placeholder is shown if a product image fails to load.
Accessible – semantic HTML, labelled inputs, image alt text, visible focus styles and reduced-motion support.
🧰 Tech Stack
Area	Tools
Framework	React 18 (functional components, Hooks)
Language	TypeScript (strict mode, no any)
Build tool	Vite
Styling	CSS3 with Grid, Flexbox and media queries
Icons	Lucide React
Data	Local static data in src/data/products.ts
Deployment	GitHub and Vercel
📁 Project Structure
>>>>>>> 55b468384be5bc4bd7f327808039edb0bdbb129a
product-explorer/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
<<<<<<< HEAD
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
=======
│   │   ├── EmptyState.tsx        # "No products found" + Clear Filters button
│   │   ├── FilterControls.tsx    # Category and sort dropdowns
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx       # Single product card with image fallback
│   │   ├── ProductGrid.tsx       # Responsive grid of ProductCard
│   │   └── SearchBar.tsx         # Search input with icon
│   ├── data/
│   │   └── products.ts           # 15 sample products
│   ├── types/
│   │   └── Product.ts            # Product interface and SortOption type
│   ├── utils/
│   │   ├── format.ts             # Price formatting and fallback image
│   │   └── productFilters.ts     # Search, category filter and sort logic
│   ├── App.tsx                   # State management (useState, useMemo)
│   ├── index.css                 # Global and responsive styles
│   ├── main.tsx                  # App entry point
>>>>>>> 55b468384be5bc4bd7f327808039edb0bdbb129a
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
<<<<<<< HEAD
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
=======
✅ Prerequisites
Node.js 18 or newer
npm (included with Node.js)
Git

Check your versions:

bash
node -v
npm -v
🚀 Getting Started

1. Clone the repository

bash
git clone https://github.com/your-username/product-explorer.git
cd product-explorer

2. Install dependencies

bash
npm install

3. Start the development server

bash
npm run dev

Open the local URL shown in the terminal (usually http://localhost:5173).

🏗️ Build
bash
npm run build

This runs the TypeScript compiler and then creates an optimized production bundle in the dist/ folder. If the command finishes without errors, the production build succeeds.

To preview the production build locally:

bash
npm run preview
📜 Available Scripts
Command	Description
npm install	Installs project dependencies
npm run dev	Starts the development server with hot reload
npm run build	Type-checks and builds the app for production
npm run preview	Serves the production build locally
☁️ Deploying to Vercel
Push the project to a GitHub repository.
Sign in at vercel.com with your GitHub account.
Click Add New → Project and import the repository.
Vercel detects Vite automatically. Confirm these settings:
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Click Deploy.
Copy the deployed URL and update the Live Demo link at the top of this file.
🔗 Links
Live Demo: https://your-app-name.vercel.app
GitHub Repository: https://github.com/your-username/product-explorer
🧪 Manual Testing Checklist
 App starts with npm run dev
 All products render
 Search works in any letter case
 Category filter works
 Price sorting works (low to high and high to low)
 Search, category and sorting work together
 Product count updates correctly
 Empty state appears when nothing matches
 Clear Filters resets all controls
 Layout works at 375px, 768px and 1440px
 npm run build completes without errors
📄 License

This project is for educational and assessment purposes. Add a license of your choice (for example, MIT) before sharing publicly.

👤 Author

Your Name GitHub: @your-username
>>>>>>> 55b468384be5bc4bd7f327808039edb0bdbb129a
