import { NavLink, Route, Routes } from "react-router-dom";

import { Catalog } from "./pages/catalog";
import { Favorites } from "./pages/favorites";
import { BookDetails } from "./pages/book-details";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">
          Онлайн‑библиотека
        </h1>
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav__link nav__link--active" : "nav__link")}
          >
            Каталог
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "nav__link nav__link--active" : "nav__link")}
          >
            Избранное
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="*" element={<p>Страница не найдена</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
