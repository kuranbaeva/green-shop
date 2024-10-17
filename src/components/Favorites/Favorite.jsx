// import React from 'react'
// import { useAuth } from '../../AuthContext'
// import Header from '../../components/Header/Header';
// import Breadcrumbs from '../../components/Breadcrumbs/Crumbs';
// import styles from '../../components/Favorites/';
// import SliderCard from '../../components/SliderCard/SliderCard';
// import Footer from '../../components/Footer/Footer';
// import SideBar from '../sidebar';

// export default function Favorite() {
//     const { favoriteItems, setFavoriteItems, handleAddToFavorite } = useAuth()

//     const handleRemoveItem = (id) => {
//         const updatedFavorite = favoriteItems.filter(item => item.id !== id);
//         setFavoriteItems(updatedFavorite);
//         localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorite));
//     };
//     return (
//         <>
//             <Header />
//             <div className="container">
//                  <SideBar/>
//             <section className={styles.cart}>
//                 <div className="container">
//                     <div className={styles.cart_item}>
//                         <div className={styles.cart_item_product}>
//                             <div className={styles.cart_item_product_elem}>
//                                 {favoriteItems.map(item => (
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
                                          
                                           
//                                             <div className={styles.bin}>
//                                                 <div onClick={() => handleRemoveItem(item.id)}>
//                                                     <img src="/assets/img/bin.png" alt="Remove" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
                     
//                     </div>
//                 </div>
//             </section></div>
           

   

//         </>
//     )
// }
