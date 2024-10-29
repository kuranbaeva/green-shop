
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../../components/Products/Products.module.scss';
import Card from '../Paginate/Paginate'; 
import axios from '../../axios'
export default function Products() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!category) {
            axios.get('product/')
                .then(res => setProducts(res.data.results))
                .catch(err => console.log('Ошибка при получении товаров', err));
        } else {
            axios.get(`product/?category=${category}`)
                .then(res => setProducts(res.data.results))
                .catch(err => console.log('Ошибка при получении товаров по категории', err));
        }
    }, [category]);



    return (
        <>
            <div className={styles.plants_item_content}>
                <div className={styles.plants_item_content_card}>
                    <Card products={products} />
                </div>
            </div>
        </>
    );
}
