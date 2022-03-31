import "./App.css";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Home from "./Components/Home";
import Product from "./Components/Product";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
