import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Shop from '../src/pages/Shop/Shop'
import ShopCart from './pages/Shoping Cart/ShopCart';
import Profile from './pages/profile';
import { AuthProvider } from './AuthContext';
import Checkout from './pages/Checkout/Checkout'
import WishList from './pages/WishList/WishList'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/:id' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<ShopCart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/check' element={<Checkout />} />
        <Route path='/wish' element={<WishList />} />
      </Routes>
    </AuthProvider>
  )
}







