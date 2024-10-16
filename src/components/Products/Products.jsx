import React, { useState } from 'react';
import styles from '../../components/Products/Products.module.scss';
import { NavLink } from 'react-router-dom';
import Card from '../Paginate/Paginate';

export default function Products() {
    const [hover, setHover] = useState(null);

    const handleMouseEnter = (path) => {
        setHover(path);
    };

    const handleMouseLeave = () => {
        setHover(null);
    };

    return (
        <>
            <div>
                <div className={styles.plants_item_content}>
                    <div className={styles.plants_item_content_nav}>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/all-plants"
                                        className={({ isActive }) => (isActive ? styles.active : '')}
                                        onMouseEnter={() => handleMouseEnter('/all-plants')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        All Plants
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/new-arrivals"
                                        className={({ isActive }) => (isActive ? styles.active : '')}
                                        onMouseEnter={() => handleMouseEnter('/new-arrivals')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        New Arrivals
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/sale"
                                        className={({ isActive }) => (isActive ? styles.active : '')}
                                        onMouseEnter={() => handleMouseEnter('/sale')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Sale
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.plants_item_content_card}>
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
}

