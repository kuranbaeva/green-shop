import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { Search, Twitter, Linkedin, Mail, Facebook } from 'lucide-react'
import styles from '../../pages/Shop/Shop.module.scss'
import Star from '../../components/UI/Star/StarBtn'
import Footer from '../../components/Footer/Footer'
import Breadcrumbs from '../../components/Breadcrumbs/Crumbs'
import SliderCard from '../../components/SliderCard/SliderCard'
import Count from '../../components/Count/Count'

export default function Shop() {
    const [onLike, setOnLike] = useState(false)
    const [activeSection, setActiveSection] = useState('desc');
    const [hover, setHover] = useState(null);

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
                                        <img src="/assets/plants/img1.png" alt="" />
                                    </div>
                                    <div className={styles.shop_item_content_species_img}>
                                        <img src="/assets/plants/img1.png" alt="" />
                                    </div>
                                    <div className={styles.shop_item_content_species_img}>
                                        <img src="/assets/plants/img1.png" alt="" />
                                    </div>
                                    <div className={styles.shop_item_content_species_img}>
                                        <img src="/assets/plants/img1.png" alt="" />
                                    </div>
                                </div>
                                <div className={styles.shop_item_content_block}>
                                    <div className={styles.shop_item_content_block_icon}>
                                        <Search />
                                    </div>
                                    <img src="/assets/plants/img6.png" alt="" />
                                </div>
                            </div>
                            <div className={styles.shop_item_infor}>
                                <div className={styles.shop_item_infor_title}>
                                    <h2>
                                        Barberton Daisy
                                    </h2>
                                    <div className={styles.shop_item_infor_title_price}>
                                        <p>
                                            $119.00
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
                                        The ceramic cylinder planters come with a wooden stand to help elevate your plants off <br />
                                        the ground. The ceramic cylinder planters come with a wooden stand to help elevate <br />
                                        your plants off the ground.
                                    </p>
                                </div>

                                

                                <div className={styles.shop_item_infor_cart}>
                                    <div className={styles.count}>
                                        <Count />
                                    </div>
                                    <div className={styles.shop_item_infor_cart_buy}>
                                        <Link to='/check'>
                                            <button>
                                                buy now
                                            </button>
                                        </Link>
                                    </div>
                                    <div className={styles.shop_item_infor_cart_add}>
                                        <Link to='/cart'>
                                            <button>
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
                                        <p>
                                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
                                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.
                                            Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus
                                            mi, vulputate adipiscing cursus eu, suscipit id nulla.
                                        </p>
                                        <p>
                                            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros
                                            eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate,
                                            sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
                                            mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula
                                            euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
                                        </p>
                                        <h4>Living Room:</h4>
                                        <p>
                                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic
                                            cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                        </p>
                                        <h4>Dining Room:</h4>
                                        <p>
                                            The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your
                                            mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative
                                            qualities will improve your life.
                                        </p>
                                        <h4>Office:</h4>
                                        <p>
                                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder
                                            planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit.
                                        </p>
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
