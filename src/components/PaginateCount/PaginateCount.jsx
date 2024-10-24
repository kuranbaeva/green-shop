
import React from 'react';
import styles from '../../components/PaginateCount/PaginateCount.module.scss';

export default function PaginateCount({ counterItems, totalCount, pagination, currentPage }) {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalCount / counterItems); i++) {
        pageNumber.push(i);
    }

    return (
        <div className={styles.pag}>
            <ul className={styles.pagination}>
                {pageNumber.map(number => (  
                    <li
                        className={`${styles.pages_item} ${ currentPage == number ? styles.active : ''}`}
                        key={number}
                    >
                        <button
                            className={styles.pages_link}
                            onClick={() => pagination(number)}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
