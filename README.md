# 🌿 Garden-Hub – A Gardening Community & Resource Hub

[Live Site URL](https://gardeners-user-auth.web.app/)

---

## 📸 Project Preview
![Garden-Hub Banner](./public/banner.png) <!-- Replace with your own image -->

## Project Description
Garden Hub is a vibrant community platform designed for gardening enthusiasts to share tips, connect with local gardeners, ask plant care questions, and join gardening events. The platform supports interests like composting, hydroponics, vertical gardens, and more, fostering a rich resource hub for gardeners of all levels.

---

## Features
- Fully responsive design optimized for mobile and desktop devices
- Secure authentication with Email/password and Google OAuth integration
- CRUD functionality: Add, browse, update, and delete garden tips
- Browse tips filtered by difficulty levels (Easy, Medium, Hard)
- Dark/Light mode toggle for personalized user experience
- Real-time like button feature that updates likes count in database
- Smooth private routing preserving user state across page reloads
- Custom 404 page and loading spinner for better UX during data fetch
- Interactive UI animations using React Awesome Reveal and tooltips

---

## Technology
- Frontend: React.js, React Router, Tailwind CSS / CSS Modules
- Backend: Node.js, Express.js
- Database: MongoDB, Firebase Firestore (for Authentication)
- Hosting: Netlify (Client), Vercel (Server)
- Authentication: Firebase Authentication (Email/Password + Google OAuth)

---

## Deployment
- Client hosted on Netlify for fast and reliable static site delivery
- Server deployed on Vercel for seamless backend API management
- Environment variables securely stored in `.env` files (not committed to GitHub)

---

## How to Use
1. Sign up or log in using email/password or Google account
2. Explore gardening tips or add your own in the “Share a Garden Tip” section
3. Browse gardeners, filter tips by difficulty, and like your favorite posts
4. Manage your own tips in “My Tips” with options to update or delete
5. Toggle between dark and light mode for comfortable viewing

---

## Live Link- https://gardeners-user-auth.web.app/

---

## 🖌️ Tech Stack
**Frontend:**
- [React.js](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

**Backend:**
- [Express.js](https://expressjs.com/)
- [mongoDB](https://mongodb-atlas.com/)

**Others:**
- Google Fonts (Poppins)

---

---

## 📦 Dependencies Used

**Frontend:**
- **react** – JavaScript library for building the user interface.
- **react-dom** – React DOM renderer for web applications.
- **tailwindcss** – Utility-first CSS framework for styling.
- **daisyui** – Tailwind CSS component library with theming support.
- **react-icons** – Icon library for React projects.
- **autoprefixer** – PostCSS plugin for adding vendor prefixes to CSS.
- **postcss** – CSS processing tool used by Tailwind.

**Backend:**
- **express** – Web framework for Node.js to handle API routes and backend logic.
- **cors** – Middleware to enable cross-origin requests.
- **dotenv** – Loads environment variables from a `.env` file.

**Development Tools:**
- **vite** – Fast build tool and dev server for React.
- **eslint** – JavaScript linter to maintain code quality.

---

## 🛠️ Run the Project Locally – Step-by-Step

### 1️⃣ Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm (comes with Node.js) or yarn

### 2️⃣ Clone the repository
```bash
git clone (https://github.com/nurulafsarinfo/GardenHub-client-site)
cd garden-hub

cd client
npm install
npm run dev

---

Thank you for checking out Garden Hub! Happy Gardening! 🌱🌸
