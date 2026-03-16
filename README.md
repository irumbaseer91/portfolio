# React Portfolio Demo

This repository contains a **simple developer portfolio project built using React and Vite**.

---

## 🛠 Technologies Used

* React
* Vite
* JavaScript
* Tailwind CSS
* Node.js
* Git & GitHub


## 🚀 Getting Started

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/portfolio.git
```

Move into the project folder:

```
cd portfolio
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Run the Development Server

```
npm run dev
```

After running the command, open your browser and visit:

```
http://localhost:5173
```

You should see the portfolio running locally.

## 🧭 Alternative: Build the Project from Scratch

If you want to create this portfolio project yourself, follow these steps:
### Step 0 — Prerequisites

Install the following tools before starting:

- **[Node.js](https://nodejs.org/)** 
- **[Git](https://git-scm.com/)** 
- **[Visual Studio Code](https://code.visualstudio.com/)**
- **[GitHub Account](https://github.com/)** 

You should also have **basic terminal knowledge**.

### Step 1 — Create a React Project with Vite

Open **Git Bash**.

Navigate to the folder where you want the project:

```bash
cd /c/Users/User
```

Create the Vite React project:
```bash
npm create vite@latest portfolio
```
Follow the prompts:

- **Project name:** portfolio
- **Framework:** React
- **Variant:** JavaScript 
- **Use Vite 8 beta?** No
- **Install dependencies now?** Yes
- **Enter the project folder:** `cd portfolio`

Open the folder in VS Code:
```bash
code .
```

### Step 2 — Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
```
Create tailwind.config.js:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create postcss.config.cjs:
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

Add Tailwind directives to src/index.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Optional: smooth scroll for navbar links */
html {
  scroll-behavior: smooth;
}
```
### Step 3 — Run the Development Server
```
npm run dev
```
Open in browser:
```
http://localhost:5173/
```
You should see the React starter page.

### Step 4 — Create Components

Inside src, create a folder:
```
mkdir src/components
```
Create the component files including About, Hero, Contact, Navbar, Projects.

### Step 5 — Connect Components in App.jsx
```
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
```
### Step 6 — Test Locally
```
npm run dev
```
Open:
```
http://localhost:5173/
```
### Step 7 — Initialize Git
```
git init
git add .
git commit -m "Initial portfolio setup"
```
Connect your GitHub repository:
```
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

### Step 8 — Deploy to Vercel

1. Go to **[Vercel](https://vercel.com/)** and log in.

2. Click **New Project → Import GitHub repository**.

3. Configure the project settings:

- **Framework:** Vite  
- **Root Directory:** (leave blank)  
- **Build Command:** `npm run build`  
- **Output Directory:** `dist`  

4. Click **Deploy**.

**Example URL:**  
[https://portfolio-yourname.vercel.app](https://portfolio-yourname.vercel.app)


## 📜 License

This project is open source and available for learning purposes.
