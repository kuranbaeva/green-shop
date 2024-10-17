import React from 'react'
import styles from '../../pages/WishList/WishList.module.scss'
import Header from '../../components/Header/Header'
import Breadcrumbs from '../../components/Breadcrumbs/Crumbs'

export default function WishList() {
    return (
        <>
            <div>
                <Header />
                <Breadcrumbs />
                <section className={styles.wishlist}>
                    <div className="container">
                        <div className={styles.wishlist_item}>
                            <div className={styles.wishlist_item_cards}>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
