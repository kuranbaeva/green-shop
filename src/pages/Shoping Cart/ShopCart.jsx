import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../pages/Shoping Cart/ShopCart.module.scss';
import Header from '../../components/Header/Header';
import Breadcrumbs from '../../components/Breadcrumbs/Crumbs';
import Button from '../../components/UI/Button/Button';
import Count from '../../components/Count/Count';
import SliderCard from '../../components/SliderCard/SliderCard';
import Footer from '../../components/Footer/Footer';
import { useAuth } from '../../AuthContext';
import LoadingBar from '../../components/UI/Loading/Loading';


export default function ShopCart() {
    const { cartItems, setCartItems, handleQuantityChange, totalPrice, setTotalPrice } = useAuth();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCart);
    }, [setCartItems]);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total);
    }, [cartItems]);

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);


    const item = location.state?.item;
    
    const [quantity, setQuantity] = useState(item?.quantity || 1);

    return (
        <div>
            {loading && <LoadingBar />}
            <Header />
            <Breadcrumbs />
            <section className={styles.cart}>
                <div className="container">
                    <div className={styles.cart_item}>
                        <div className={styles.cart_item_product}>
                            <div className={styles.cart_item_product_infor}>
                                <h2>Products</h2>
                                <h2>Price</h2>
                                <h2>Quantity</h2>
                                <h2>Total</h2>
                            </div>
                            <div className={styles.cart_item_product_elem}>
                                {cartItems.map(item => (
                                    <div key={item.id} className={styles.cart_item_product_elem_cards}>
                                        <div className={styles.cart_item_product_elem_cards_card}>
                                            <div className={styles.cart_item_product_elem_cards_card_infor}>
                                                <img src={item.image} alt={item.name} />
                                                <div className={styles.title}>
                                                    <h4>{item.name}</h4>
                                                </div>
                                            </div>
                                            <div className={styles.price}>
                                                <h3>${item.price}</h3>
                                            </div>
                                            <div className={styles.count}>
                                                {/* <Count 
                                                    itemId={item.id} 
                                                    initialQuantity={item.quantity} 
                                                    onQuantityChange={handleQuantityChange}
                                                /> */}
                                                <Count
                                                    itemId={item.id}
                                                    initialQuantity={item.quantity || 1}
                                                    onQuantityChange={(newQuantity) => {
                                                        setQuantity(newQuantity)
                                                        handleQuantityChange(item.id, newQuantity);
                                                    }}
                                                    stock={item.stock}
                                                />
                                            </div>
                                            <div className={styles.total}>
                                                <h3>${(item.price * item.quantity).toFixed(2)}</h3>
                                            </div>
                                            <div className={styles.bin}>
                                                <div onClick={() => handleRemoveItem(item.id)}>
                                                    <img src="/assets/svg/bin.svg" alt="Remove" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.cart_item_total}>
                            <div className={styles.cart_item_total_title}>
                                <h2>Cart Totals</h2>
                            </div>
                            <div className={styles.cart_item_total_elem}>
                                <div className={styles.cart_item_total_elem_title}>
                                    <h3>Subtotal</h3>
                                    <p>${totalPrice.toFixed(2)}</p>
                                </div>

                                <div className={styles.cart_item_total_elem_titles}>
                                    <h2>Total</h2>
                                    <p>${(totalPrice).toFixed(2)}</p>
                                </div>
                                <div className={styles.cart_item_total_elem_btns}>

                                    <Link to='/check'>
                                        <Button>Proceed To Checkout</Button>

                                    </Link>

                                </div>
                                <div className={styles.cart_item_total_elem_btn}>
                                    <Link to='/'> 
                                    <button>Continue Shopping</button>
                                    </Link>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.card}>
                <div className="container">
                    <div className={styles.card_item}>
                        <div className={styles.card_item_title}>
                            <h2>You may be interested in</h2>
                        </div>
                        <div className={styles.card_item_slider}>
                            <SliderCard />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.footer}>
                <div className="container">
                    <div className={styles.footer_item}>
                        <Footer />
                    </div>
                </div>
            </section>
        </div>
    );
}
