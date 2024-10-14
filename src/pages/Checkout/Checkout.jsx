import React from 'react'
import Header from '../../components/Header/Header'
import Breadcrumbs from '../../components/Breadcrumbs/Crumbs'
import styles from '../../pages/Checkout/Checkout.module.scss'
import { useCart } from '../../CartContext'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import Footer from '../../components/Footer/Footer'

export default function Checkout() {
    const { cartSummary } = useCart();

    return (
        <>
            <div>
                <Header />
                <Breadcrumbs />
                <section className={styles.address}>
                    <div className="container">
                        <div className={styles.address_item}>
                            <div className={styles.address_item_form}>
                                <div className={styles.address_item_form_title}>
                                    <h2>
                                        Billing Address
                                    </h2>
                                </div>
                                <div className={styles.address_item_form_forms}>
                                    <form action="">
                                        <div className={styles.address_item_form_forms_one}>
                                            <label htmlFor="">
                                                <p>
                                                    First Name
                                                </p>
                                                <input type="text" />
                                            </label>
                                            <label htmlFor="">
                                                <p>
                                                    Country / Region
                                                </p>
                                                <input type="text" />
                                            </label>
                                            <label htmlFor="">
                                                <p>
                                                    Street Address
                                                </p>
                                                <input type="text" />
                                            </label>
                                            <label htmlFor="">
                                                <p>
                                                    Email address
                                                </p>
                                                <input type="email" />
                                            </label>
                                            <label htmlFor="">
                                                <p>
                                                    Order notes (optional)
                                                </p>
                                                <textarea name="" id="" cols="30" rows="20"></textarea>
                                            </label>
                                        </div>

                                        <div className={styles.address_item_form_forms_two}>
                                            <label htmlFor="">
                                                <p>
                                                    Last Name
                                                </p>
                                                <input type="text" />
                                            </label>
                                            <label htmlFor="">
                                                <p>
                                                    Town / City
                                                </p>
                                                <input type="text" />
                                            </label>
                                            <label htmlFor="">
                                                <p>
                                                    Zip
                                                </p>
                                                <input type="text" />
                                            </label>

                                            <label className={styles.phone}>
                                                <p>Phone Number</p>
                                                <div className={styles.num}>
                                                    <select >
                                                        <option value="+996">+996</option>
                                                        <option value="+997">+997</option>
                                                        <option value="+998">+998</option>
                                                        <option value="+999">+999</option>
                                                    </select>
                                                    <input
                                                        name="phone"
                                                        type="tel"
                                                    />
                                                </div>

                                            </label>

                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className={styles.address_item_order}>
                                <div className={styles.address_item_order_title}>
                                    <h3>
                                        Your Order
                                    </h3>
                                </div>
                                <div className={styles.address_item_order_product}>
                                    <h4>
                                        Products
                                    </h4>
                                    <p>
                                        Subtotal
                                    </p>
                                </div>
                                <div className={styles.address_item_order_total}>
                                    <div className={styles.card}>
                                        <div className={styles.product}>
                                            <img src="/assets/plants/img1.png" alt="" />
                                            <div>
                                                <h5>
                                                    Barberton Daisy
                                                </h5>
                                                <p>
                                                    <span>
                                                        SKU:
                                                    </span>
                                                    1995751877966
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.count}>
                                            <p>
                                                (x 2)
                                            </p>
                                        </div>
                                        <div className={styles.price}>
                                            <p>
                                                $238.00
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className={styles.address_item_order_subtotal}>
                                    <div className={styles.address_item_order_subtotal_elem}>

                                        <div className={styles.address_item_order_subtotal_elem_title}>
                                            <h3>
                                                Subtotal
                                            </h3>
                                            <p>
                                                ${cartSummary.subtotal.toFixed(2)}
                                            </p>
                                        </div>
                                        <div className={styles.address_item_order_subtotal_elem_title}>
                                            <h3>
                                                Coupon Discount
                                            </h3>
                                            <p>
                                                (-) ${cartSummary.coupon.toFixed(2)}
                                            </p>
                                        </div>
                                        <div className={styles.address_item_order_subtotal_elem_title}>
                                            <h3>
                                                Shiping
                                            </h3>
                                            <p>
                                                ${cartSummary.shipping.toFixed(2)}
                                            </p>
                                        </div>
                                        <div className={styles.address_item_order_subtotal_elem_titles}>
                                            <h2>
                                                Total
                                            </h2>
                                            <p>
                                                ${cartSummary.total.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.address_item_order_pay}>
                                    <div className={styles.address_item_order_pay_elem}>
                                        <div className={styles.address_item_order_pay_elem_title}>
                                            <h2>
                                                Payment Method
                                            </h2>
                                        </div>
                                        <div className={styles.address_item_order_pay_elem_method}>
                                            <div className={styles.address_item_order_pay_elem_method_met}>
                                                <label htmlFor="id1" >

                                                    <input type="radio" id='id1' />/
                                                    <img src="/assets/img/cards.png" alt="" />
                                                </label>
                                            </div>
                                            <div className={styles.address_item_order_pay_elem_method_met}>
                                                <label htmlFor="id2">

                                                    <input type="radio" id='id2' />
                                                    <p>
                                                        Dorect bank transfer
                                                    </p>
                                                </label>

                                            </div>
                                            <div className={styles.address_item_order_pay_elem_method_met}>
                                                <label htmlFor="id3">
                                                    <input type="radio" id='id3' />
                                                    <p>
                                                        Cash on delivery
                                                    </p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className={styles.btns}>
                                    <Link to='/check'>
                                        <Button>
                                            Please Order
                                        </Button>
                                    </Link>
                                </div>
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
