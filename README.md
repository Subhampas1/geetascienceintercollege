# Geeta Science Inter College

A modern, high-performance web application designed for Geeta Science Inter College. This platform serves as the central hub for admissions, academic information, notices, and showcasing the institution's achievements.

## Features

*   **Modern UI/UX**: Designed with a premium aesthetic featuring light/dark mode integrations, engaging hover effects, glassmorphism, and beautiful typography.
*   **Dynamic Landing Page**: Features a stunning hero section, recent achievements, and key highlight banners.
*   **Academics Hub**: 
    *   Detailed information on Science, Commerce, and Arts & Humanities streams.
    *   Beautiful, color-coordinated stream cards.
    *   Dedicated JEE & NEET Support section.
*   **Notice Board**: A dynamic, chronologically ordered feed for the latest Admissions, Events, and General Updates with category-specific color coding.
*   **Toppers Gallery**: A visual showcase of student excellence, highlighting recent board and competitive exam top scorers.
*   **Admissions Portal**: Clean forms and detailed step-by-step guides for prospective students.
*   **Admin Dashboard**: A protected route for administrative staff to manage content securely.

## Tech Stack

*   **Framework**: React 18
*   **Build Tool**: Vite
*   **Styling**: Pure, modular Vanilla CSS with global custom variables (`index.css`)
*   **Icons**: Google Material Symbols
*   **Typography**: Playfair Display (Serif), Plus Jakarta Sans (Display), Inter (Body)
*   **Routing**: React Router DOM (v6)

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Subhampas1/geetascienceintercollege.git
   ```
2. Navigate into the project directory:
   ```bash
   cd geetaInterScience
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the Vite development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
This will generate the built assets in the `dist` folder. You can preview the production build locally using:
```bash
npm run preview
```

## Structure

```text
src/
├── assets/          # Static assets (images, logos)
├── components/      # Reusable UI components (Cards, Buttons, Navbar, Footer)
├── layouts/         # Layout wrappers (MainLayout)
├── pages/           # Individual route pages (Home, Academics, Notice, etc.)
├── context/         # React Context providers for global state
├── App.jsx          # Main application router
└── index.css        # Global CSS variables, resets, and typography
```

## Authors

* Subhampas1

## License

This project is proprietary and confidential.
