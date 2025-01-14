import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./container/Cart";
import ProductList from "./container/ProductList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
