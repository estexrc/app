import CustomProvider from "./myContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import Carrito from "./components/cart/Carrito";

function App() {
  const links = [
    { href: "/producto", name: "Productos", id: 4 },
    { href: "/categoria/1", name: "Ropa", id: 1 },
    { href: "/categoria/2", name: "Accesorios", id: 2 },
  ];

  return (
    <CustomProvider>
      <BrowserRouter>
        <Navbar links={links} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/producto" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/Carrito" element={<Carrito />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CustomProvider>
  );
}
export default App;
