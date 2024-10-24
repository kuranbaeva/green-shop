import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../axios/index';
import Card from '../Card/Card'
import styles from '../../components/Paginate/Paginate.module.scss'
import Paginates from '../PaginateCount/PaginateCount'

export default function Paginate() {
    const { category } = useParams();
    const [items, setItems] = useState(null)
    const [currenPage, setCurrenPage] = useState(1)
    const [counterItems] = useState(6)
    const getItems = async () => {
        try {
            console.log('Запрос категории:', category); 
            const res = await axios.get('product', {
                params: {
                    page_size: counterItems,
                    page: currenPage,
                    category: category,
                },
            });
            setItems(res.data);
        } catch (err) {
            console.error('Ошибка при получении данных', err);
        }
    };
    
    useEffect(() => {
        getItems()
    },  [currenPage, category])

    // const lastItemIndex = currenPage * counterItems
    // const firstItemIndex = lastItemIndex - counterItems
    // const currenIndex = items.slice(firstItemIndex, lastItemIndex)


    const pagination = pageNumber => setCurrenPage(pageNumber)

    return (
        <>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card items={items?.results ?? []} category={category} />


                </div>
                <div className={styles.paginate}>
                    <Paginates
                        counterItems={6}
                        currentPage={currenPage}
                        totalCount={items?.count}
                        pagination={pagination}
                    />
                </div>
            </div>

        </>
    )
}
