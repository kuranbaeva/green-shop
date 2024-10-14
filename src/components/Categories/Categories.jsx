import React from 'react'
import styles from '../../components/Categories/Categories.module.scss'
import Renge from '../../components/Range/Price'
import Button from '../ButtonCat/Button'

export default function Categories() {
    return (
        <>
            <div>
                <div className={styles.categoria}>
                    <div className={styles.categoria_item}>
                        <h2>
                            Categories
                        </h2>

                        <div className={styles.categoria_item_btns}>
                            <Button />
                        </div>

                        <div className={styles.categoria_item_price}>
                            <Renge />
                        </div>

                     
                    </div>
                    <div className={styles.categoria_sale}>
                        <img src="/assets/svg/sale.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
