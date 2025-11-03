import { NavLink, Route, Routes } from "react-router-dom";

import { Catalog } from "./pages/catalog";
import { Favorites } from "./pages/favorites";
import { BookDetails } from "./pages/book-details";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Онлайн‑библиотека</h1>
        <nav className="app__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "app__nav-link app__nav-link_active" : "app__nav-link"
            }
          >
            Каталог
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "app__nav-link app__nav-link_active" : "app__nav-link"
            }
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
