import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../pages/Shoping Cart/ShopCart.module.scss'
import Header from '../../components/Header/Header'
import Breadcrumbs from '../../components/Breadcrumbs/Crumbs'
import Button from '../../components/UI/Button/Button'
import Count from '../../components/Count/Count'
import SliderCard from '../../components/SliderCard/SliderCard'
import Footer from '../../components/Footer/Footer'
import { useCart } from '../../CartContext'

export default function ShopCart() {
    const { cartSummary } = useCart();

    return (
        <>
            <div>
                <Header />
                <Breadcrumbs />
                <section className={styles.cart}>
                    <div className="container">
                        <div className={styles.cart_item}>
                            <div className={styles.cart_item_product}>
                                <div className={styles.cart_item_product_infor}>
                                    <h2>
                                        Products
                                    </h2>
                                    <h2>
                                        Price
                                    </h2>
                                    <h2>
                                        Quantity
                                    </h2>
                                    <h2>
                                        Total
                                    </h2>
                                </div>
                                <div className={styles.cart_item_product_elem}>
                                    <div className={styles.cart_item_product_elem_cards}>
                                        <div className={styles.cart_item_product_elem_cards_card}>
                                            <div className={styles.cart_item_product_elem_cards_card_infor}>
                                                <img src="/assets/plants/img1.png" alt="" />
                                                <div className={styles.title}>
                                                    <h4>
                                                        Barberton Daisy
                                                    </h4>
                                                    <p>
                                                        <span>
                                                            SKU:
                                                        </span>
                                                        1995751877966
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={styles.price}>
                                                <h3>
                                                    $119.00
                                                </h3>
                                            </div>
                                            <div className={styles.count}>
                                                <Count />
                                            </div>
                                            <div className={styles.total}>
                                                <h3>
                                                    $238.00
                                                </h3>
                                            </div>
                                            <div className={styles.bin}>
                                                <button>
                                                    <img src="/assets/img/bin.png" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cart_item_total}>
                                <div className={styles.cart_item_total_title}>
                                    <h2>
                                        Cart Totals
                                    </h2>
                                </div>
                                <div className={styles.cart_item_total_cupon}>
                                    <p>
                                        Coupon Apply
                                    </p>
                                    <label htmlFor="">
                                        <input type="text" placeholder='Enter coupon code here...' />
                                        <Button>
                                            Apply
                                        </Button>
                                    </label>
                                </div>
                                <div className={styles.cart_item_total_elem}>
                                    <div className={styles.cart_item_total_elem_title}>
                                        <h3>
                                            Subtotal
                                        </h3>
                                        <p>
                                            ${cartSummary.subtotal.toFixed(2)}
                                        </p>
                                    </div>
                                    <div className={styles.cart_item_total_elem_title}>
                                        <h3>
                                            Coupon Discount
                                        </h3>
                                        <p>
                                            (-) ${cartSummary.coupon.toFixed(2)}
                                        </p>
                                    </div>
                                    <div className={styles.cart_item_total_elem_title}>
                                        <h3>
                                            Shiping
                                        </h3>
                                        <p>
                                            ${cartSummary.shipping.toFixed(2)}
                                        </p>
                                    </div>
                                    <div className={styles.cart_item_total_elem_titles}>
                                        <h2>
                                            Total
                                        </h2>
                                        <p>
                                            ${cartSummary.total.toFixed(2)}
                                        </p>
                                    </div>
                                    <div className={styles.cart_item_total_elem_btns}>
                                        <Link to='/check'>
                                            <Button>
                                                Proceed To Checkout
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className={styles.cart_item_total_elem_btn}>
                                        <Link to='/'>
                                            <button>
                                                Continue Shopping
                                            </button>
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
                                <h2>
                                    You may be interested in
                                </h2>
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
        </>
    )
}
