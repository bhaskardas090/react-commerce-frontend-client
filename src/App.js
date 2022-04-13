import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
