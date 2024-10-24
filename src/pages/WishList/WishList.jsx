import React, { useState,useEffect } from 'react'
import styles from '../../pages/WishList/WishList.module.scss'
import Header from '../../components/Header/Header'
import Breadcrumbs from '../../components/Breadcrumbs/Crumbs'
import SideBar from '../../components/sidebar'
import { useAuth } from '../../AuthContext'
import LoadingBar from '../../components/UI/Loading/Loading'

export default function WishList() {
    const [loading, setLoading] = useState(true)

    const { favoriteItems,
        setFavoriteItems,
        handleAddToFavorite,
        handleCartClick,
        isItemInCart,
        isItemInFavorite,
        handleFavClick } = useAuth()

    const handleRemoveItem = (id) => {
        const updatedFavorite = favoriteItems.filter(item => item.id !== id);
        setFavoriteItems(updatedFavorite);
        localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorite));
    };


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            <div>
                {loading && <LoadingBar />}
                <Header />
                <div className="container">
                    <section className={styles.wishlist}>
                        {/* <div className={styles.wrap}> */}
                        <SideBar />


                        <div className={styles.wishlist_item}>
                            {favoriteItems.map((item) => (
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
                                                {/* <button onClick={() => handleFavClick(item.id)}>
                                    {favItems.includes(item.id)
                                        ? <img src="/assets/img/fullHeart.png" alt="" />
                                        : <img src="/assets/img/heart.png" alt="" />
                                    }
                                </button> */}
                                                <button
                                                    onClick={() => handleFavClick(item)}
                                                >
                                                    {isItemInFavorite(item.id)
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
                        </div>
                        {/* </div> */}

                    </section>
                </div>
            </div>

        </>
    )
}
