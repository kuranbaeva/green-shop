import React, { useState, useEffect } from 'react';
import styles from '../../pages/Home/Home.module.scss';
import Header from '../../components/Header/Header';
import Cat from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import FindCard from '../../components/FindMore/Find';
import Blog from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import LoadingBar from '../../components/UI/Loading/Loading';

export default function Home({ categories, setSelectedCategory, items = [] }) {
    const [loading, setLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState(items);
    const [priceRange, setPriceRange] = useState([0, 2000]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    // useEffect(() => {
    //     setFilteredProducts(items);  
    // }, [items, filteredProducts]); 


    const filterByPrice = (minPrice, maxPrice) => {
        const filtered = items.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );
        setFilteredProducts(filtered);
    };

    const handlePriceChange = (newRange) => {
        setPriceRange(newRange);
        filterByPrice(newRange[0], newRange[1]);
    };

    return (
        <>
            <div>
                {loading && <LoadingBar />}
                <Header />
                <section className={styles.main}>
                    <div className="container">
                        <Slider />
                    </div>
                </section>

                <section className={styles.plants}>
                    <div className="container">
                        <div className={styles.plants_item}>
                            <div className={styles.plants_item_cat}>
                                <Cat
                                    categories={categories}
                                    onSelectCategory={setSelectedCategory}
                                    priceRange={priceRange}
                                    onPriceChange={handlePriceChange}
                                />
                            </div>
                            <Products items={filteredProducts} />
                        </div>
                    </div>
                </section>

                <section className={styles.find}>
                    <div className="container">
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
    );
}
