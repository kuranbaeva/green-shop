import React from 'react'
import styles from '../../components/Footer/Footer.module.scss'
import Button from '../../components/UI/Button/Button'
import { MapPin, Mail, PhoneCall, Youtube, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <>
            <div>
                <div className={styles.footer}>
                    <div className={styles.footer_item}>
                        <div className={styles.footer_item_infor}>
                            <div className={styles.footer_item_infor_cards}>
                                <div className={styles.footer_item_infor_cards_card}>
                                    <div className={styles.green}>
                                        <img src="/assets/svg/green.svg" alt="" />
                                    </div>
                                    <div className={styles.footer_item_infor_cards_card_img}>
                                        <img src="/assets/svg/kaktus.svg" alt="" />
                                    </div>
                                    <div className={styles.footer_item_infor_cards_card_infor}>
                                        <h4>
                                            Garden Care
                                        </h4>
                                        <p>
                                            We are an online plant shop offering a wide range of cheap and trendy plants.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.footer_item_infor_cards_card}>
                                    <div className={styles.green}>
                                        <img src="/assets/svg/green.svg" alt="" />
                                    </div>
                                    <div className={styles.footer_item_infor_cards_card_img}>
                                        <img src="/assets/svg/kaktus.svg" alt="" />
                                    </div>
                                    <div className={styles.footer_item_infor_cards_card_infor}>
                                        <h4>
                                            Garden Care
                                        </h4>
                                        <p>
                                            We are an online plant shop offering a wide range of cheap and trendy plants.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.footer_item_infor_cards_card}>
                                    <div className={styles.green}>
                                        <img src="/assets/svg/green.svg" alt="" />
                                    </div>
                                    <div className={styles.footer_item_infor_cards_card_img}>
                                        <img src="/assets/svg/kaktus.svg" alt="" />
                                    </div>
                                    <div className={styles.footer_item_infor_cards_card_infor}>
                                        <h4>
                                            Garden Care
                                        </h4>
                                        <p>
                                            We are an online plant shop offering a wide range of cheap and trendy plants.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.footer_item_infor_email}>
                                <div className={styles.footer_item_infor_email_infor}>
                                    <h2>
                                        Would you like to join newsletters?
                                    </h2>
                                    <div className={styles.footer_item_infor_email_infor_input}>
                                        <label htmlFor="">
                                            <input type="text" placeholder='Enter your email address...' />
                                            <Button>
                                                Join
                                            </Button>
                                        </label>
                                    </div>
                                </div>
                                <p>
                                    We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
                                </p>
                            </div>
                        </div>


                        <div className={styles.footer_item_logo}>
                            <div className={styles.footer_item_logo_elem}>
                                <div className={styles.footer_item_logo_elem_img}>
                                    <img src="/assets/svg/logo.svg" alt="" />
                                </div>
                                <p>
                                    <MapPin /> 70 West Buckingham Ave. <br />
                                    Farmingdale, NY 11735
                                </p>
                                <p>
                                    <Mail /> contact@greenshop.com
                                </p>
                                <p>
                                    <PhoneCall /> +88 01911 717 490
                                </p>
                            </div>
                        </div>

                        <div className={styles.footer_item_account}>
                            <div className={styles.footer_item_account_elem}>
                                <div className={styles.footer_item_account_elem_nav}>
                                    <h4>
                                        My Account
                                    </h4>
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="">My Account</a>
                                            </li>
                                            <li>
                                                <a href="">Our stores</a>
                                            </li>
                                            <li>
                                                <a href="">Contact us</a>
                                            </li>
                                            <li>
                                                <a href="">Career</a>
                                            </li>
                                            <li>
                                                <a href="">Specials</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className={styles.footer_item_account_elem_nav}>
                                    <h4>
                                        Help & Guide
                                    </h4>
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="">Help Center</a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    How to Buy</a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Shipping & Delivery</a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Product Policy</a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    How to Return</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className={styles.footer_item_account_elem_nav}>
                                    <h4>
                                        Categories
                                    </h4>
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="">House Plants</a>
                                            </li>
                                            <li>
                                                <a href="">Potter Plants</a>
                                            </li>
                                            <li>
                                                <a href="">Seeds</a>
                                            </li>
                                            <li>
                                                <a href="">Small Plants</a>
                                            </li>
                                            <li>
                                                <a href="">Accessories</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className={styles.footer_item_account_elem_media}>
                                    <h2>
                                        Social Media
                                    </h2>
                                    <div className={styles.footer_item_account_elem_media_icons}>
                                        <div className={styles.footer_item_account_elem_media_icons_icon}>
                                            <a href="https://www.facebook.com/?locale=ru_RU" target="_blank" rel="noopener noreferrer">
                                                <Facebook />
                                            </a>
                                        </div>
                                        <div className={styles.footer_item_account_elem_media_icons_icon}>
                                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                                <Instagram />
                                            </a>
                                        </div>
                                        <div className={styles.footer_item_account_elem_media_icons_icon}>
                                            <a  href="https://x.com/?lang=ru" target="_blank" rel="noopener noreferrer">
                                                <Twitter />
                                            </a>
                                        </div>
                                        <div className={styles.footer_item_account_elem_media_icons_icon}>
                                            <a  href="https://ru.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                                <Linkedin />
                                            </a>
                                        </div>
                                        <div className={styles.footer_item_account_elem_media_icons_icon}>
                                            <a  href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                                <Youtube />
                                            </a>
                                        </div>
                                    </div>
                                    <h3>
                                        We accept
                                    </h3>
                                    <div className={styles.img}>
                                        <img width={80} src="/assets/img/bank1.png" alt="" />
                                        <img width={80} height={40} src="/assets/img/bank2.png" alt="" />
                                        <img width={80} src="/assets/img/bank3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <p>
                                © 2021 GreenShop. All Rights Reserved.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
