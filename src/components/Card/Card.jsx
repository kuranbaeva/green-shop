import React, { useEffect, useState } from 'react';
import styles from '../../components/Card/Card.module.scss';
import axios from '../../axios/index';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

export default function Card({ items }) {
    // const [items, setItems] = useState([]);
    const [favItems, setFavItems] = useState([]);

    const { cartItems, handleAddToCart } = useAuth()
    console.log(cartItems);

    const navigate = useNavigate();
    // useEffect(() => {
    //     axios.get('product/')
    //         .then(res => {
    //             setItems(res.data.results);
    //         })
    //         .catch(err => {
    //             console.log('Ошибка при получении данных', err);
    //         })
    // }, []);

    const handleFavClick = (id) => {
        if (favItems.includes(id)) {
            setFavItems(favItems.filter(itemId => itemId !== id));
        } else {
            setFavItems([...favItems, id]);
        }
    };




    const handleOpenItem = (item) => {
        navigate(`/shop/${item.id}`, { state: { item } });
    };
    const isItemInCart = (id) => {
        return cartItems.some(cartItem => cartItem.id === id);
    };

    const handleCartClick = (item) => {
        if (isItemInCart(item.id)) {
            const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
            handleAddToCart(updatedCartItems);
        } else {
            handleAddToCart(item);
        }
    };



    return (
        <>
            {items.map((item) => (
                <div key={item.id} className={styles.card}>
                    <div className={styles.card_img}>
                        <div onClick={() => handleOpenItem(item)} className={styles.card_img_image}>
                            <img src={item.image} alt={item.name} /></div>
                        <div className={`${styles.cart} ${styles.block}`}>
                            <div className={styles.btn}>
                                <button
                                    onClick={() => handleCartClick(item)}
                                >
                                    {isItemInCart(item.id)
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
                        </div>
                    </div>
                    <div className={styles.card_infor}>
                        <h4>{item.name}</h4>
                        <p>${item.price}</p>
                    </div>
                </div>
            ))}

        </>
    );
}
