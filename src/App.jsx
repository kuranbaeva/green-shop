import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Home from '../src/pages/Home/Home';
import Shop from '../src/pages/Shop/Shop'
import ShopCart from './pages/Shoping Cart/ShopCart';
import Checkout from './pages/Checkout/Checkout';
import WishList from './pages/WishList/WishList';

export default function App() {
  return (
    <div>

      <CartProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<ShopCart />} />
          <Route path='/check' element={<Checkout />} />
          <Route path='/wish' element={<WishList />} />
        </Routes>
      </CartProvider>
    </div>
  )
}
