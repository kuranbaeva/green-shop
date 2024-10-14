import React, { useState } from 'react';
import styles from '../../components/Card/Card.module.scss';

export default function Card({ items }) {
    const [favItems, setFavItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [search, setSearch] = useState([]);


    const handleFavClick = (id) => {
        setFavItems(favItems.includes(id)
            ? favItems.filter(itemId => itemId !== id)
            : [...favItems, id]);
    };

    const handleCartClick = (id) => {
        setCartItems(cartItems.includes(id)
            ? cartItems.filter(itemId => itemId !== id)
            : [...cartItems, id]);
    };


    const handleSearchClick = (id) => {
        setSearch(search.includes(id)
            ? search.filter(itemId => itemId !== id)
            : [...search, id]);
    };

    return (
        <>
            {
                items.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.card_img}>
                            <img src={item.image} alt="" />
                            <div className={`${styles.cart} ${styles.block}`}>
                                <div className={styles.btn}>
                                    <button onClick={() => handleCartClick(item.id)}>
                                        {cartItems.includes(item.id)
                                            ? <img src="/assets/img/fullCart.png" alt="" />
                                            : <img src="/assets/img/cart.png" alt="" />
                                        }
                                    </button>
                                </div>
                                <div className={styles.btn}>
                                    <button onClick={() => handleFavClick(item.id)}>
                                        {favItems.includes(item.id)
                                            ? <img src="/assets/img/fullHeart.png" alt="" />
                                            : <img src="/assets/img/heart.png" alt="" />
                                        }
                                    </button>
                                </div>
                                <div className={styles.btn}>
                                    <button onClick={() => handleSearchClick(item.id)}>
                                        {search.includes(item.id)
                                            ? <img src="/assets/img/greenSearch.png" alt="" />
                                            : <img src="/assets/img/search.png" alt="" />
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card_info}>
                            <h4>{item.name}</h4>
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
