import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Products from './components/Products';
import Cart from './components/Cart';
import OrderPlaced from './components/OrderPlaced';
import { fetchProducts } from "./features/productsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order-placed' element={<OrderPlaced />} />
      </Routes>
    </div>
    // <div>
    //   <Products />
    //   <Cart />
    //   <OrderPlaced />
    // </div>
  );
}

export default App;
