import CustomProvider from "./Context/myContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/NavBar";
import ItemListContainer from "./components/ItemContainers/ItemListContainer";
import ItemDetailContainer from "./components/ItemContainers/ItemDetailContainer";
import Home from "./components/Home/Home";
import Cart from "./components/cart/Cart";
import Payment from "./components/Payment/Payment";

function App() {
  const links = [
    { href: "/products", name: "Products", id: 0 },
    { href: "/category/men-clothing", name: "Men Clothing", id: 1 },
    { href: "/category/woman-clothing", name: "Woman Clothing", id: 2 },
    { href: "/category/electronics", name: "Electronics", id: 3 },
    { href: "/category/jewelry", name: "Jewelry", id: 5 },
  ];

  return (
    <CustomProvider>
      <BrowserRouter>
        <Navbar links={links} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/products/:id" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Payment" element={<Payment />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CustomProvider>
  );
}
export default App;
