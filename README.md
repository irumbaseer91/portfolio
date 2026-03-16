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
- **Variant:** JavaScript + SWC
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
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Create postcss.config.cjs:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

Add Tailwind directives to src/index.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Optional: smooth scroll for navbar links */
html {
  scroll-behavior: smooth;
}


## 📜 License

This project is open source and available for learning purposes.
