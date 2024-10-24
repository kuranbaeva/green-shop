import React, { useState } from 'react';
import styles from '../../components/Products/Products.module.scss';
import { NavLink } from 'react-router-dom';
import Card from '../Paginate/Paginate';

export default function Products({ selectedCategory, items }) {
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
                        <p>
                            All Plants
                        </p>
                    </div>

                    <div className={styles.plants_item_content_card}>
                        <Card items={items} />
                    </div>
                </div>
            </div>
        </>
    );
}

