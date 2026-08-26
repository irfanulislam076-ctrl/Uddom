# UDDOM — Multi-Vendor E-Commerce Marketplace (Frontend)

UDDOM is a frontend for a multi-vendor e-commerce marketplace, built for the
Bangladeshi market with support for retail, grocery, and B2B wholesale
buying. The project models three distinct experiences — **customer**,
**seller**, and **admin** — inside a single React application.

> **Status:** This repository contains the frontend UI only. All data
> currently shown (products, orders, sellers, transactions, etc.) is
> mock/static data defined inline in each page component. There is no
> backend, database, or authentication service wired up yet — see
> [What's not included](#whats-not-included) below.

---

## What's in the box

```
Uddom-e-commerce-main/
├── public/                  Static assets served as-is (favicon, sprite icons)
├── scripts/
│   └── generate-pages.js    One-time scaffolding script used to generate
│                             placeholder page files during initial setup
├── src/
│   ├── assets/               Images used inside components
│   ├── components/
│   │   └── Header.jsx        Global site header, nav, mega-menu, mobile drawer
│   ├── layouts/
│   │   ├── MainLayout.jsx    Layout wrapper for all public-facing pages
│   │   └── AdminLayout.jsx   Sidebar + topbar shell for the admin panel
│   ├── pages/
│   │   ├── public/           Storefront: home, categories, product pages,
│   │   │                      cart, checkout, search, auth, static pages
│   │   ├── customer/         Logged-in customer account area (orders,
│   │   │                      wishlist, wallet, addresses, reviews, etc.)
│   │   ├── seller/           Seller dashboard (products, orders, inventory,
│   │   │                      ads, finance, store settings)
│   │   └── admin/            Admin console (sellers, customers, orders,
│   │                          products, categories, payments, logistics,
│   │                          ads, CMS, security, settings)
│   ├── App.jsx                Route definitions for the whole app
│   ├── main.jsx                React entry point
│   └── index.css               Tailwind entry point + small global overrides
├── index.html
├── package.json
└── vite.config.js
```

### The three experiences

| Area | Route prefix | Layout | Purpose |
|---|---|---|---|
| Storefront | `/` | `MainLayout` (Header + content) | Browsing, search, cart, checkout, account pages for shoppers |
| Seller panel | `/seller/*` | Page-level (no shared shell yet) | Sellers manage their own products, orders, inventory, ads and finances |
| Admin panel | `/admin/*` | `AdminLayout` (sidebar + topbar) | Platform-wide management: sellers, customers, orders, payments, CMS, security |

Routing for all three areas is centralized in `src/App.jsx` using
`react-router-dom`.

---

## Tech stack

- **React 19** with function components and hooks
- **React Router 7** for client-side routing
- **Vite** as the build tool and dev server
- **Tailwind CSS 4** (via `@tailwindcss/vite`) for styling — no separate
  component library; all UI is custom-built with utility classes
- **ESLint** (flat config) with the recommended JS, `react-hooks`, and
  `react-refresh` rule sets

No backend framework, ORM, or database is part of this repository.

---

## Getting started

**Requirements:** Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start the dev server (with hot module reload)
npm run dev

# Lint the codebase
npm run lint

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The dev server runs on Vite's default port (usually `http://localhost:5173`).

---

## What's not included

This is a UI-only scaffold. To turn it into a working product you would
still need to add:

- A backend API and database (the plan discussed for this project was
  Node.js/Express with MongoDB)
- Real authentication (customer login/register, seller login, admin login
  are currently static forms with no auth logic wired up)
- Payment gateway integration
- Real product, order, and user data replacing the mock arrays defined at
  the top of each page component
- Image upload/storage for products and store branding
- Server-side validation and authorization for the seller and admin areas

## Notes on the codebase

- Every page component's mock data lives at the top of that file, making it
  straightforward to later swap in real API calls without touching the JSX.
- Component and file names are kept in sync (e.g. `ManagePayments.jsx`
  exports `ManagePayments`) for easier navigation and refactoring.
- `scripts/generate-pages.js` is a one-off scaffolding utility from initial
  setup — it's safe to ignore or delete; it isn't part of the app's runtime
  build.
