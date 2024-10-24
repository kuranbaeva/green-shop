
import React, { useEffect, useState } from 'react';
import styles from '../../components/ButtonCat/Button.module.scss';
import axios from '../../axios/index';
import { useNavigate } from 'react-router-dom'; 

export default function Button({ onCategoryChange }) {
    const [categories, setCategories] = useState([]);
    const [activeCategoryId, setActiveCategoryId] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get('categories/')
            .then((catRes) => {
                setCategories(catRes.data.results);
            })
            .catch(err => {
                console.log('Ошибка при получении данных', err);
            });
    }, []);

    return (
        <div>
            <div className={styles.categoria}>
                <div className={styles.categoria_btns}>
                    <div className={styles.categoria_btns_btn}>
                        <button 
                            className={activeCategoryId === null ? styles.active : ''} 
                            onClick={() => {
                                setActiveCategoryId(null);
                                onCategoryChange(null); 
                                navigate('/'); 
                            }}
                        >
                            All Plants
                        </button>
                    </div>
                </div>
            </div>

            {categories.map((category) => (
                <div key={category.id} className={styles.categoria}>
                    <div className={styles.categoria_btns}>
                        <div className={styles.categoria_btns_btn}>
                            <button 
                                className={activeCategoryId === category.id ? styles.active : ''} 
                                onClick={() => {
                                    setActiveCategoryId(category.id);
                                    onCategoryChange(category.id); 
                                    navigate(`/${category.id}`); 
                                }}
                            >
                                {category.name}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
