import Landing from "./Components/Landing.jsx";
import Details from "./Components/ProductDetail.jsx";
import Data from "./Data.js";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import CartMain from "./Components/cart.jsx";


function App() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar setQuery={setQuery} />

      <Routes>
        <Route path="/" element={<Landing data={Data} query={query} />} />

        <Route
          path="/products/:sku"
          element={<Details cart={cart} setCart={setCart} />}
        />

        <Route
          path="/cart"
          element={<CartMain cart={cart} setCart={setCart} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
