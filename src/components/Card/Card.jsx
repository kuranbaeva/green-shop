import React, { useEffect, useState } from 'react';
import styles from '../../components/Card/Card.module.scss';
import axios from '../../axios/index';
import Shop from '../../pages/Shop/Shop';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
export default function Card() {
    const [items, setItems] = useState([]);
    const [favItems, setFavItems] = useState([]);
   
    const { cartItems,handleAddToCart } = useAuth()
console.log(cartItems);

    const navigate = useNavigate();
    useEffect(() => {
        axios.get('product/')
            .then(res => {
                setItems(res.data.results);
            })
            .catch(err => {
                console.log('Ошибка при получении данных', err);
            })
    }, []);

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



// import React, { useEffect, useState } from 'react';
// import styles from '../../pages/Shoping Cart/ShopCart.module.scss';
// import Header from '../../components/Header/Header';
// import Breadcrumbs from '../../components/Breadcrumbs/Crumbs';
// import CartItem from '../CartItem'; 
// import Footer from '../../components/Footer/Footer';
// import { useAuth } from '../../AuthContext';

// export default function ShopCart() {
//   const { cartItems, setCartItems } = useAuth();
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(savedCart);
//     calculateTotals(savedCart);
//   }, []);

//   const calculateTotals = (cart) => {
//     const total = cart.reduce((sum, item) => {
//       return sum + item.sizes.reduce((sizeSum, size) => {
//         return sizeSum + size.price * size.quantity;
//       }, 0);
//     }, 0);
//     setTotalPrice(total);
//   };

//   const handleRemoveItem = (id) => {
//     const updatedCart = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//     calculateTotals(updatedCart);
//   };

//   return (
//     <div>
//       <Header />
//       <Breadcrumbs />

//       <section className={styles.cart}>
//         <div className="container">
//           <h2>Your Shopping Cart</h2>
//           {cartItems.length > 0 ? (
//             cartItems.map(item => (
//               <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />
//             ))
//           ) : (
//             <p>Your cart is empty</p>
//           )}

//           <div className={styles.cartTotal}>
//             <h3>Total: ${totalPrice.toFixed(2)}</h3>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
