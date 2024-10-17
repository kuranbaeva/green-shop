import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { Search, Twitter, Linkedin, Mail, Facebook } from 'lucide-react'
import styles from '../../pages/Shop/Shop.module.scss'
import Star from '../../components/UI/Star/StarBtn'
import Footer from '../../components/Footer/Footer'
import Breadcrumbs from '../../components/Breadcrumbs/Crumbs'
import SliderCard from '../../components/SliderCard/SliderCard'
import Count from '../../components/Count/Count'
import { useAuth } from '../../AuthContext'
import { Link } from 'react-router-dom'

export default function Shop() {
    const [onLike, setOnLike] = useState(false)
    const [activeSection, setActiveSection] = useState('desc');
    const { handleQuantityChange, handleAddToCart } = useAuth()

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };


    const handleMouseEnter = (path) => {
        setHover(path);
    };

    const handleMouseLeave = () => {
        setHover(null);
    };

    const handleOnLike = () => {
        setOnLike(!onLike)
    }

    const location = useLocation();
    const { id } = useParams();
    const item = location.state?.item;
    const [quantity, setQuantity] = useState(item?.quantity || 1);

    return (

        <>
            <div>
                <Header />
                <Breadcrumbs />
                <section className={styles.shop}>
                    <div className='container'>
                        <div className={styles.shop_item}>
                            <div className={styles.shop_item_content}>
                                <div className={styles.shop_item_content_species}>
                                    <div className={styles.shop_item_content_species_img}>
                                        <img src={item?.image} alt="" />
                                    </div>
                                    <div className={styles.shop_item_content_species_img}>
                                        <img src={item?.image} alt="" />
                                    </div>
                                    <div className={styles.shop_item_content_species_img}>
                                        <img src={item?.image} alt="" />
                                    </div>
                                    <div className={styles.shop_item_content_species_img}>
                                        <img src={item?.image} alt="" />
                                    </div>
                                </div>
                                <div className={styles.shop_item_content_block}>
                                    <div className={styles.shop_item_content_block_icon}>
                                        <Search />
                                    </div>
                                    <img src={item?.image} alt="" />
                                </div>
                            </div>
                            <div className={styles.shop_item_infor}>
                                <div className={styles.shop_item_infor_title}>
                                    <h2>
                                        {item?.name}
                                    </h2>
                                    <div className={styles.shop_item_infor_title_price}>
                                        <p>
                                            $ {item?.price}
                                        </p>
                                        <div className={styles.review}>
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.shop_item_infor_text}>
                                    <h4>
                                        Short Description:
                                    </h4>
                                    <p>

                                        {item?.description}
                                    </p>
                                </div>



                                <div className={styles.shop_item_infor_cart}>
                                    <div className={styles.shop_item_infor_cart_count}>
                                        <Count
                                            itemId={item.id}
                                            initialQuantity={item.quantity || 1}
                                            onQuantityChange={(newQuantity) => {
                                                setQuantity(newQuantity);
                                                handleQuantityChange(item.id, newQuantity);
                                            }}
                                        />
                                    </div>
                                    <div className={styles.shop_item_infor_cart_buy}>
                                        <Link to='/check'>
                                            <button>
                                                buy now
                                            </button>
                                        </Link>
                                    </div>
                                    <div className={styles.shop_item_infor_cart_add}>
                                        <Link> 
                                        <button onClick={() => handleAddToCart({ ...item, quantity })}>
                                            add to cart
                                        </button>
                                        </Link>


                                    </div>
                                    <div className={styles.shop_item_infor_cart_like}>
                                        <button onClick={handleOnLike}>
                                            {onLike ?
                                                <img src="/assets/img/fullHeart.png" alt="" /> : <img src="/assets/img/greenHeart.png" alt="" />}
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.shop_item_infor_deck}>
                                    <h2>
                                        <span>
                                            SKU:
                                        </span>
                                        1995751877966
                                    </h2>
                                    <h2>
                                        <span>
                                            Categories:
                                        </span>
                                        Potter Plants
                                    </h2>
                                    <h2>
                                        <span>
                                            Tags:
                                        </span>
                                        Home, Garden, Plants
                                    </h2>
                                    <div className={styles.shop_item_infor_deck_social}>
                                        <p>
                                            Share this products:
                                        </p>
                                        <div className={styles.shop_item_infor_deck_social_icon}>
                                            <button>
                                                <Facebook />
                                            </button>
                                            <button>
                                                <Twitter />
                                            </button>
                                            <button>
                                                <Linkedin />
                                            </button>
                                            <button>
                                                <Mail />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.description}>
                    <div className='container'>
                        <div className={styles.description_item}>
                            <div className={styles.description_item_nav}>
                                <nav>
                                    <ul>
                                        <li>
                                            <button
                                                className={activeSection === 'desc' ? styles.active : ''}
                                                onClick={() => handleSectionChange('desc')}
                                                onMouseEnter={() => handleMouseEnter('/')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                Product Description
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className={activeSection === 'reviews' ? styles.active : ''}
                                                onClick={() => handleSectionChange('reviews')}
                                                onMouseEnter={() => handleMouseEnter('/')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                Reviews
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className={styles.description_item_title}>
                                {activeSection === 'desc' && (
                                    <div>
                                        <p>{item?.description}</p>
                                    </div>
                                )}
                                {activeSection === 'reviews' && (
                                    <div>
                                        <p>
                                            Customer reviews will appear here.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.products}>
                    <div className='container'>
                        <div className={styles.products_item}>
                            <h4>
                                Releted Products
                            </h4>
                            <div className={styles.products_item_cards}>
                                <SliderCard />
                            </div>
                        </div>
                    </div>
                </section>

                <footer className={styles.footer}>
                    <div className="container">
                        <Footer />
                    </div>
                </footer>
            </div>
        </>
    )
}
