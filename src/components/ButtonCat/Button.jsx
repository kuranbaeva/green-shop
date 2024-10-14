import React, { useEffect, useState } from 'react';
import styles from '../../components/ButtonCat/Button.module.scss';
import axios from '../../axios/index';

export default function Button() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Promise.all([
            axios.get('categories/'),
            axios.get('product/')
        ])
            .then(([catRes, prodRes]) => {
                setCategories(catRes.data.results);
                setProducts(prodRes.data.results);
            })
            .catch(err => {
                console.log('Ошибка при получении данных', err);
            });
    }, []);

    const getCount = (categoryId) => {
        return products.filter(product => product.categoryId === categoryId).length;
    };

    return (
        <div>
            {categories.map((category) => (
                <div key={category.id} className={styles.categoria}>
                    <div className={styles.categoria_btns}>
                        <div className={styles.categoria_btns_btn}>
                            <h2>{category.name}</h2>
                            <p>({getCount(category.id)})</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
