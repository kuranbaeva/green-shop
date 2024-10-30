
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../../pages/Home/Home.module.scss';
import Header from '../../components/Header/Header';
import Cat from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import FindCard from '../../components/FindMore/Find';
import Blog from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import LoadingBar from '../../components/UI/Loading/Loading';

export default function Home() {
    const { category } = useParams();
    const navigate = useNavigate();
    const handleCategoryChange = (category) => {
        navigate(`/${category}`);
    };
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            <div>
                {loading && <LoadingBar />}
                <div className={styles.header}>
                    <Header /></div>

                <section className={styles.main}>
                    <div className='container'>
                        <Slider />
                    </div>
                </section>

                <section className={styles.plants}>
                    <div className='container'>
                        <div className={styles.plants_item}>

                            <Cat onCategoryChange={handleCategoryChange} />
                            <Products category={category} />
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
    );
}

