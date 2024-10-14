import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../components/Breadcrumbs/Crumbs.module.scss';

const Breadcrumbs = () => {
    const location = useLocation();
    const { pathname } = location;

    const pathnames = pathname.split('/').filter((x) => x); // разбиваем путь и убираем пустые части

    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className={styles.breadcrumb}>
                    <li className={`${styles.breadcrumb_item} ${pathname === '/' ? styles.active : ''}`}>
                        {pathname === '/' ? 'Home' : <Link to="/">Home</Link>}
                    </li>

                    {pathnames.includes('shop') && (
                        <li className={`${styles.breadcrumb_item} ${pathname === '/shop' ? styles.active : ''}`}>
                            {pathname === '/shop' ? 'Shop' : <Link to="/shop">Shop</Link>}
                        </li>
                    )}

                    {pathnames.includes('cart') && (
                        <li className={`${styles.breadcrumb_item} ${pathname === '/cart' ? styles.active : ''}`} aria-current="page">
                            {pathname === '/cart' ? 'Shopping Cart' : <Link to="/cart">Shopping Cart</Link>}
                        </li>
                    )}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
