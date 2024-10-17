
import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import styles from '../../components/Header/Header.module.scss';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../../AuthContext';
import Header_Login from '../header_login';

export default function Header() {
  const [hover, setHover] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth()
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);

  const handleMouseEnter = (path) => {
    setHover(path);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setIsLoginOpen(false);
    localStorage.setItem('isAuthenticated', 'true');
    const userAvatar = localStorage.getItem('userAvatar');
    setAvatar(userAvatar);
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      const userAvatar = localStorage.getItem('userAvatar');
      setAvatar(userAvatar);
    }
  }, []);


  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.header_item}>
          <div className={styles.header_item_logo}>
            <img src="/assets/svg/logo.svg" alt="" />
          </div>

          <div className={styles.header_item_nav}>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? styles.active : '')}
                    onMouseEnter={() => handleMouseEnter('/')}
                    onMouseLeave={handleMouseLeave}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className={({ isActive }) => (isActive ? styles.active : '')}
                    onMouseEnter={() => handleMouseEnter('/shop')}
                    onMouseLeave={handleMouseLeave}
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/plant-care"
                    className={({ isActive }) => (isActive ? styles.active : '')}
                    onMouseEnter={() => handleMouseEnter('/plant-care')}
                    onMouseLeave={handleMouseLeave}
                  >
                    Plant Care
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) => (isActive ? styles.active : '')}
                    onMouseEnter={() => handleMouseEnter('/blogs')}
                    onMouseLeave={handleMouseLeave}
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.header_item_navigation}>
            <div className={styles.header_item_navigation_wish}>
              <Link to='/wish'>
                <img src="/assets/img/heart.png" alt="" />
              </Link>
            </div>
            <div className={styles.header_item_navigation_cart}>
              <Link to='/cart'>
                <ShoppingCart />
              </Link>
            </div>

            <div className={`header_item_navigation_login ${isLoginOpen ? 'open' : ''}`}>
              {isAuthenticated ? (
                <div onClick={() => navigate('/profile')} className='avatar'>
                {avatar && avatar !== 'null' ? ( 
                  <img src={avatar} alt="Avatar" className={styles.avatar} />
                ) : (
                  <User />
                )}
              </div>
              ) : (
                <Button onClick={toggleLoginModal}>
                  <img src="/assets/img/exit.png" alt="" />
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {isLoginOpen && (
        <div className="login-modal-overlay">
          <Header_Login closeModal={toggleLoginModal} onLoginSuccess={handleLoginSuccess} setIsAuthenticated={setIsAuthenticated} />
        </div>
      )}
    </div>
  );
}

