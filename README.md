# Health-Connect
Ser401 Fall '25 Health Connect Group
#  HealthConnect Frontend

This is the **frontend for HealthConnect**, a React web app built with **Vite**, **React Router**, and **Tailwind CSS**.  
The project is part of our ASU Capstone collaboration with CanAge to improve access to clinical trial information for older adults in Canada.

---

##  Prerequisites

Before running the project, make sure you have:

- **[Node.js](https://nodejs.org/)** (install the **latest LTS version**, recommended 20.x or newer)  
  - Run `node -v` to check your version.  
  - Run `npm -v` to check that npm is also installed.

---

##  Setup and Run Locally

1. **Install dependencies**
   ```bash
   npm install
Start the development server

bash
Copy code
npm run dev
The app will be available at:
http://localhost:5173

Project Structure
php
Copy code
healthconnect-frontend/
├── src/
│   ├── layouts/         # Shared layouts (navbar, footer, etc.)
│   ├── pages/           # Page components (Home, About, Trials, NotFound)
│   ├── App.jsx          # Main router with routes
│   ├── main.jsx         # Entry point
│   └── index.css        # TailwindCSS entry file
├── public/              # Static assets
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
Tech Stack
 Vite – fast dev build tool

React – component-based frontend library

React Router – client-side routing

Tailwind CSS – utility-first styling

Useful Commands
Start development server:

bash
Copy code
npm run dev
Build for production:

bash
Copy code
npm run build
Preview production build locally:

bash
Copy code
npm run preview
 Notes
Always install the latest Node.js LTS version before running the project.

If Tailwind styles are not showing, try stopping the dev server, clearing the Vite cache, and restarting:

bash
Copy code
rm -rf node_modules/.vite
npm run dev
On Windows, you can delete the .vite folder manually inside node_modules.

Run npm install whenever dependencies are updated.