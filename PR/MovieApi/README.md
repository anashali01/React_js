## 🎬 Movie Explorer – React API Project

Modern movie listing UI built with **React + Vite**, fetching live data from the `https://jsonfakery.com/movies/paginated` API.  
The app displays a responsive grid of movie cards with ratings, popularity, language, release date, and a short overview.

---

## 🔗 Live Demo

**Live Link:**  
[https://react-pr-1-opal.vercel.app/](https://react-pr-1-opal.vercel.app/)



---

## 📸 UI Preview

Modern dark-themed movie grid with hover effects and clean typography:

![Movie Explorer UI](./src/assets/output.png)

---

## ✨ Features

- **Live Movie Data from API**: Fetches movies from `jsonfakery` paginated movies endpoint.
- **Modern Dark UI**: Dark background with vibrant accents and smooth hover animations.
- **Responsive Grid Layout**: Movie cards arranged in a flexible, centered grid.
- **Rich Movie Details**:
  - Title and poster
  - ⭐ Rating (`vote_average`)
  - 🔥 Popularity
  - Original language
  - Release date
  - Short overview/description
- **Clean React Hooks Usage**: Uses `useState` and `useEffect` for data fetching and state.

---

## 🧱 Tech Stack

- **Frontend**: React (hooks)
- **Build Tool**: Vite
- **Styling**: Custom CSS (`index.css`) with modern layout & hover animations
- **Language**: JavaScript (ES Modules)

---

## 🚀 Getting Started (Local Setup)

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd React_PR_1
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or with yarn / pnpm (if you prefer):

```bash
yarn
# or
pnpm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

---

## 🧩 Project Structure

Key files/folders in this project:

```text
React_PR_1
├─ src
│  ├─ App.jsx          # Main movie listing UI, API fetch, and rendering of cards
│  ├─ main.jsx         # React entry point, renders <App />
│  ├─ index.css        # Global styles and modern UI for the movie cards
│  └─ assets
│     ├─ output.png    # UI screenshot used in README
│     └─ react.svg
├─ index.html          # Vite HTML template
├─ package.json        # Scripts and dependencies
├─ vite.config.js      # Vite configuration
└─ README.md           # Project documentation
```

---

## 🌐 API Details

The app fetches data from:

```text
https://jsonfakery.com/movies/paginated
```

From each movie item, the following fields are used:

- `original_title`
- `original_language`
- `popularity`
- `release_date`
- `poster_path`
- `id`
- `vote_average`
- `overview`

These values are displayed inside a modern movie card layout with an image, title, meta info, and description.

---

## 🎨 UI & UX Highlights

- **Dark Mode Design**:  
  Background: `#0f172a` / `#020617` with light text for strong contrast.

- **Card Design**:
  - Rounded corners
  - Drop shadow on hover
  - Smooth scale/translate animation

- **Typography**:
  - Clean fonts (`Poppins`, sans-serif)
  - Clear hierarchy for titles, meta info, and descriptions

---

## 📦 Available Scripts

From the project root, you can run:

- **`npm run dev`** – Start development server with hot reload.
- **`npm run build`** – Create production build.
- **`npm run preview`** – Preview the production build locally.
- **`npm run lint`** – Run ESLint checks.

---

## 🔮 Future Enhancements (Ideas)

- Search movies by title.
- Filter by language, release year, or rating.
- Pagination or infinite scroll for large datasets.
- Detailed movie modal on card click.
- Add loading and error states for API requests.

---

## 🙌 Author

**Project Name:** Day 4 – Movie API (React + Vite)  
**Description:** Practice project to learn working with APIs, React hooks, and modern UI design.

Feel free to fork, improve, and customize this project!

