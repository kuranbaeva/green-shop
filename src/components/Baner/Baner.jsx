import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../components/Baner/Baner.module.scss'
import Button from '../../components/UI/Button/Button'

export default function Baner() {

    return (
        <>
            <div className={styles.slider}>
                <div className={styles.main_page}>
                    <div className={styles.main_page_item}>
                        <div className={styles.main_page_item_infor}>
                            <h5>
                                Welcome to GreenShop
                            </h5>
                            <h2>
                                Let’s Make a
                                Better&nbsp;
                                <span>
                                    Planet
                                </span>
                            </h2>
                            <p>
                                We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!
                            </p>
                            <div className={styles.main_page_item_infor_btn}>
                                <Link to='/shop'>
                                    <Button>
                                        shop now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.main_page_item_img}>
                            <div className={styles.img1}>
                                <img src="/assets/svg/plan2.svg" alt="" />
                            </div>
                            <div className={styles.img2}>
                                <img src="/assets/svg/plan.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

