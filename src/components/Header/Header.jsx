import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import styles from '../../components/Header/Header.module.scss';
import { Search, ShoppingCart } from 'lucide-react';

export default function Header() {
  const [hover, setHover] = useState(null);

  const handleMouseEnter = (path) => {
    setHover(path);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <div className='container'>
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
                    to="/wish"
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
            <div className={styles.header_item_navigation_search}>
              <Search />
            </div>
            <div className={styles.header_item_navigation_cart}>
              <Link to='/cart'>
                <ShoppingCart />
              </Link>
            </div>
            <Button>
              <img src="/assets/img/exit.png" alt="" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
