import React from 'react';
import styles from '../../pages/Home/Home.module.scss';
import Header from '../../components/Header/Header';
// import Baner from '../../components/Baner/Baner';
import Cat from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import FindCard from '../../components/FindMore/Find';
import Blog from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';

export default function Home() {
    return (
        <>
            <div>
                <Header />
                <section className={styles.main}>
                    <div className='container'>
                        <Slider />
                    </div>
                </section>

                <section className={styles.plants}>
                    <div className='container'>
                        <div className={styles.plants_item}>
                            <Cat />
                            <Products />
                        </div>
                    </div>
                </section>

                <section className={styles.find}>
                    <div className='container'>
                        <div className={styles.find_item}>
                            <FindCard />
                        </div>
                    </div>
                </section>

                <section className={styles.blogs}>
                    <div className="container">
                        <div className={styles.blogs_item}>
                            <Blog />
                        </div>
                    </div>
                </section>
                <footer className={styles.footer}>
                    <div className="container">
                        <div className={styles.footer_item}>
                            <Footer />
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
