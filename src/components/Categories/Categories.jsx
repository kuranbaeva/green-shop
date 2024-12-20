import React from 'react'
import styles from '../../components/Categories/Categories.module.scss'
import Button from '../ButtonCat/Button'

export default function Categories({onCategoryChange} ) {
    return (
        <>
            <div>
                <div className={styles.categoria}>
                    <div className={styles.categoria_item}>
                        <h2>
                            Categories
                        </h2>

                        <div className={styles.categoria_item_btns}>
                            <Button onCategoryChange={onCategoryChange} />
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
