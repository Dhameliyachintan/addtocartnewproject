// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./container/Cart";
// import ProductList from "./container/ProductList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart/>
      {/* <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes> */}
    </div>
  );
}

export default App;
