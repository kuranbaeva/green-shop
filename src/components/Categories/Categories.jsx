// import React, { useState, useEffect } from 'react';
// import styles from '../../components/Categories/Categories.module.scss';
// import PriceFilter from '../../components/Range/Price';
// import axios from '../../axios/index';

// export default function Categories() {
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         axios.get('categories/')
//             .then(res => {
//                 setCategories(res.data.results)
//                 console.log(res.data.results);
//             })
//             .catch(err => {
//                 console.log('err', err);
//             })
//     }, []);

//     return (
//         <div className={styles.categoria}>
//             <div className={styles.categoria_item}>
//                 <h2>Categories</h2>
//                 <div className={styles.categoria_item_btns}>
//                     <div className={styles.categoria_item_btns_btn}>
//                         {categories.map((category) => (
//                             <button
//                                 key={category.name}
//                                 onClick={() => onSelectCategory(category.id)}
//                                 className={styles.button}
//                             >
//                                 {category.name}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 <div className={styles.categoria_item_price}>
//                     <PriceFilter />
//                 </div>

//             </div>
//             <div className={styles.categoria_sale}>
//                 <img src="/assets/svg/sale.svg" alt="Sale" />
//             </div>
//         </div>
//     );
// }



import React, { useState, useEffect } from 'react';
import styles from '../../components/Categories/Categories.module.scss';
import PriceFilter from '../../components/Range/Price';
import axios from '../../axios/index';

export default function Categories({ onSelectCategory, priceRange, onPriceChange }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('categories/')
            .then(res => {
                setCategories(res.data.results);
            })
            .catch(err => {
                console.log('err', err);
            });
    }, []);

    return (
        <div className={styles.categoria}>
            <div className={styles.categoria_item}>
                <h2>Categories</h2>
                <div className={styles.categoria_item_btns}>
                    <div className={styles.categoria_item_btns_btn}>
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => onSelectCategory(category.id)}
                                className={styles.button}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.categoria_item_price}>
                    <PriceFilter
                        priceRange={priceRange}
                        onPriceChange={onPriceChange}
                    />
                </div>
            </div>
            <div className={styles.categoria_sale}>
                <img src="/assets/svg/sale.svg" alt="Sale" />
            </div>
        </div>
    );
}
