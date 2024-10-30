import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../pages/Shoping Cart/ShopCart.module.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Crumbs';
import Button from '../../components/UI/Button/Button';
import Count from '../../components/Count/Count';
import SliderCard from '../../components/SliderCard/SliderCard';
import Footer from '../../components/Footer/Footer';
import { useAuth } from '../../AuthContext';
import LoadingBar from '../../components/UI/Loading/Loading';
import Header from '../../components/Header/Header'


export default function ShopCart() {
    const { cartItems, setCartItems, handleCountChange, totalPrice, setTotalPrice } = useAuth();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCart);
    }, [setCartItems]);

    useEffect(() => {
        // const total = cartItems.reduce((acc, item) => acc +(+item.price)  * (+item.count), 0);
        // setTotalPrice(total); 
        const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.count || 1)), 0);
 setTotalPrice(totalPrice); 
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

    const [count, setCount] = useState(item?.count || 1);


    return (
        <div>
            {loading && <LoadingBar />}
            <div className={styles.header}>
                <Header />
            </div>

            <div className={styles.breadcrumbs}>
                <Breadcrumbs />
            </div>

            <section className={styles.cart}>
                <div className="container">
                    <div className={`${styles.title} ${styles.title_none}`}>
                        <div className={styles.exit}>
                            <Link to='/'>
                                <img src="/assets/svg/exit.svg" alt="" />
                            </Link>
                        </div>
                        <h2>
                            Cart
                        </h2>
                    </div>
                    <div className={styles.cart_item}>
                        <div className={styles.cart_item_product}>
                            <div className={`${styles.cart_item_product_infor} ${styles.infor_none}`}>
                                <h2>Products</h2>
                                <h2>Price</h2>
                                <h2>Quantity</h2>
                                <h2>Total</h2>
                            </div>
                            <div className={`${styles.cart_item_product_elem} ${styles.elem_none}`}>
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
                                                <Count
                                                    itemId={item.id}
                                                    initialCount={item.count || 1}
                                                    onCountChange={(newCount) => {
                                                        setCount(newCount)
                                                        handleCountChange(item.id, newCount);
                                                    }}
                                                    stock={item.stock}
                                                />
                                                      
                                            </div>
                                            <div className={styles.total}>
                                                <h3>${(item.price * item.count).toFixed(2)}</h3>
                                                {console.log(item.price )
                                                }
                                                  {console.log(item.count )
                                                }
                                                {console.log(totalPrice)
                                                }
                                                {/* <h3>${totalPrice}</h3> */}
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

                            <div className={styles.cart_mini}>
                                {cartItems.map(item => (
                                    <div key={item.id} className={styles.cart_mini_item}>
                                        <div className={styles.cart_mini_item_elem}>
                                            <img src={item.image} alt={item.name} />
                                        </div>

                                        <div className={styles.cart_mini_item_product}>
                                            <div className={styles.cart_mini_item_product_pri}>
                                                <div className={styles.title}>
                                                    <h4>{item.name}</h4>
                                                </div>
                                                <div className={styles.count}>
                                                    <Count
                                                        itemId={item.id}
                                                        initialCount={item.count || 1}
                                                        onCountChange={(newCount) => {
                                                            setCount(newCount)
                                                            handleCountChange(item.id, newCount);
                                                        }}
                                                        stock={item.stock}
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.price}>
                                                <h3>${item.price}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`${styles.cart_item_total} ${styles.product_block}`}>
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

                    <div className={styles.cart_item_bottom}>
                        <div className={styles.cart_item_bottom_title}>
                            <h2>Cart Totals</h2>
                        </div>
                        <div className={styles.cart_item_bottom_elem}>
                            <div className={styles.cart_item_bottom_elem_title}>
                                <h3>Subtotal</h3>
                                <p>${totalPrice.toFixed(2)}</p>
                            </div>

                            <div className={styles.cart_item_bottom_elem_titles}>
                                <h2>Total</h2>
                                <p>${(totalPrice).toFixed(2)}</p>
                            </div>
                            <div className={styles.cart_item_bottom_elem_btns}>
                                <Link to='/check'>
                                    <Button>Proceed To Checkout</Button>
                                </Link>
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




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../../pages/Shoping Cart/ShopCart.module.scss';
// import Breadcrumbs from '../../components/Breadcrumbs/Crumbs';
// import Button from '../../components/UI/Button/Button';
// import Count from '../../components/Count/Count';
// import SliderCard from '../../components/SliderCard/SliderCard';
// import Footer from '../../components/Footer/Footer';
// import { useAuth } from '../../AuthContext';
// import LoadingBar from '../../components/UI/Loading/Loading';
// import Header from '../../components/Header/Header';

// export default function ShopCart() {
//     const { cartItems, setCartItems, handleQuantityChange, totalPrice, setTotalPrice } = useAuth();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
//         setCartItems(savedCart);
//     }, [setCartItems]);

//     useEffect(() => {
//         const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//         setTotalPrice(total);
//     }, [cartItems, setTotalPrice]);

//     const handleRemoveItem = (id) => {
//         const updatedCart = cartItems.filter(item => item.id !== id);
//         setCartItems(updatedCart);
//         localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//     };

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//         }, 3000);
//     }, []);

//     return (
//         <div>
//             {loading && <LoadingBar />}
//             <div className={styles.header}>
//                 <Header />
//             </div>

//             <div className={styles.breadcrumbs}>
//                 <Breadcrumbs />
//             </div>

//             <section className={styles.cart}>
//                 <div className="container">
//                     <div className={`${styles.title} ${styles.title_none}`}>
//                         <div className={styles.exit}>
//                             <Link to='/'>
//                                 <img src="/assets/svg/exit.svg" alt="" />
//                             </Link>
//                         </div>
//                         <h2>Cart</h2>
//                     </div>
//                     <div className={styles.cart_item}>
//                         <div className={styles.cart_item_product}>
//                             <div className={`${styles.cart_item_product_infor} ${styles.infor_none}`}>
//                                 <h2>Products</h2>
//                                 <h2>Price</h2>
//                                 <h2>Quantity</h2>
//                                 <h2>Total</h2>
//                             </div>
//                             <div className={`${styles.cart_item_product_elem} ${styles.elem_none}`}>
//                                 {cartItems.map(item => (
//                                     <div key={item.id} className={styles.cart_item_product_elem_cards}>
//                                         <div className={styles.cart_item_product_elem_cards_card}>
//                                             <div className={styles.cart_item_product_elem_cards_card_infor}>
//                                                 <img src={item.image} alt={item.name} />
//                                                 <div className={styles.title}>
//                                                     <h4>{item.name}</h4>
//                                                 </div>
//                                             </div>
//                                             <div className={styles.price}>
//                                                 <h3>${item.price}</h3>
//                                             </div>
//                                             <div className={styles.count}>
//                                                 <Count
//                                                     itemId={item.id}
//                                                     initialQuantity={item.quantity || 1}
//                                                     onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
//                                                     stock={item.stock}
//                                                 />
//                                             </div>
//                                             <div className={styles.total}>
//                                                 <h3>${(item.price * item.quantity).toFixed(2)}</h3>
//                                             </div>
//                                             <div className={styles.bin}>
//                                                 <div onClick={() => handleRemoveItem(item.id)}>
//                                                     <img src="/assets/svg/bin.svg" alt="Remove" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className={styles.cart_mini}>
//                                 {cartItems.map(item => (
//                                     <div key={item.id} className={styles.cart_mini_item}>
//                                         <div className={styles.cart_mini_item_elem}>
//                                             <img src={item.image} alt={item.name} />
//                                         </div>

//                                         <div className={styles.cart_mini_item_product}>
//                                             <div className={styles.cart_mini_item_product_pri}>
//                                                 <div className={styles.title}>
//                                                     <h4>{item.name}</h4>
//                                                 </div>
//                                                 <div className={styles.count}>
//                                                     <Count
//                                                         itemId={item.id}
//                                                         initialQuantity={item.quantity || 1}
//                                                         onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
//                                                         stock={item.stock}
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className={styles.price}>
//                                                 <h3>${item.price}</h3>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className={`${styles.cart_item_total} ${styles.product_block}`}>
//                             <div className={styles.cart_item_total_title}>
//                                 <h2>Cart Totals</h2>
//                             </div>
//                             <div className={styles.cart_item_total_elem}>
//                                 <div className={styles.cart_item_total_elem_title}>
//                                     <h3>Subtotal</h3>
//                                     <p>${totalPrice.toFixed(2)}</p>
//                                 </div>

//                                 <div className={styles.cart_item_total_elem_titles}>
//                                     <h2>Total</h2>
//                                     <p>${totalPrice.toFixed(2)}</p>
//                                 </div>
//                                 <div className={styles.cart_item_total_elem_btns}>
//                                     <Link to='/check'>
//                                         <Button>Proceed To Checkout</Button>
//                                     </Link>
//                                 </div>
//                                 <div className={styles.cart_item_total_elem_btn}>
//                                     <Link to='/'>
//                                         <button>Continue Shopping</button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className={styles.cart_item_bottom}>
//                         <div className={styles.cart_item_bottom_title}>
//                             <h2>Cart Totals</h2>
//                         </div>
//                         <div className={styles.cart_item_bottom_elem}>
//                             <div className={styles.cart_item_bottom_elem_title}>
//                                 <h3>Subtotal</h3>
//                                 <p>${totalPrice.toFixed(2)}</p>
//                             </div>

//                             <div className={styles.cart_item_bottom_elem_titles}>
//                                 <h2>Total</h2>
//                                 <p>${totalPrice.toFixed(2)}</p>
//                             </div>
//                             <div className={styles.cart_item_bottom_elem_btns}>
//                                 <Link to='/check'>
//                                     <Button>Proceed To Checkout</Button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className={styles.card}>
//                 <div className="container">
//                     <div className={styles.card_item}>
//                         <div className={styles.card_item_title}>
//                             <h2>You may be interested in</h2>
//                         </div>
//                         <div className={styles.card_item_slider}>
//                             <SliderCard />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className={styles.footer}>
//                 <div className="container">
//                     <div className={styles.footer_item}>
//                         <Footer />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
