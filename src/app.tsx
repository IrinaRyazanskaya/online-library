import { Route, Routes } from "react-router-dom";

import { Catalog } from "./pages/catalog";
import { Favorites } from "./pages/favorites";
import { BookDetails } from "./pages/book-details";

function App() {
  return (
    <main>
      <h1>Онлайн библиотека</h1>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/book/:id" element={<BookDetails/>} />
        <Route path="*" element={<p>Страница не найдена</p>} />
      </Routes>
    </main>
  );
}

export default App;
