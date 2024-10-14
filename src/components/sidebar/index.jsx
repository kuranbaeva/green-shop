import React, { useContext } from 'react'
import { User, MapPinHouse, ShoppingCart, Heart, LogOut } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import './SideBar.scss'
import { useAuth } from '../../AuthContext';
export default function SideBar() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userAvatar')
    setIsAuthenticated(false)
    navigate('/');
  };

  return (
    <div className="sidebar">
      <h4>My Account</h4>
      <div className="sidebar__nav">
        <NavLink to='/profile' className='active'><User />Account Details</NavLink>
        <NavLink to='/address' className={({ isActive }) => (isActive ? 'active' : '')}><MapPinHouse />Address</NavLink>
        <NavLink to='/orders' className={({ isActive }) => (isActive ? 'active' : '')}><ShoppingCart />Orders</NavLink>
        <NavLink to='/wishlist' className={({ isActive }) => (isActive ? 'active' : '')}><Heart />Wishlist</NavLink>

        <button onClick={handleLogout} className='logout'>
          <LogOut />Logout
        </button>
      </div>
    </div>
  )
}
