import Navbar from "./components/Nav/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const links = [
    { href: "/products", name: "Productos", id: 1 },
    { href: "/categoria/1", name: "ropa", id: 2 },
    { href: "/categoria/2", name: "accesorios", id: 3 },
  ];

  return (
    <BrowserRouter>
      <Navbar links={links} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
