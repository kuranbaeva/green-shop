import React, { useEffect, useState } from 'react'
import axios from '../../axios/index';
import Card from '../Card/Card'
import styles from '../../components/Paginate/Paginate.module.scss'
import Paginates from '../PaginateCount/PaginateCount'

export default function Paginate() {
    const [items, setItems] = useState([])
    const [currenPage, setCurrenPage] = useState(1)
    const [counterItems] = useState(6)

    useEffect(() => {
        const getItems = async () => {
            const res = await axios.get('product')
                .then(res => {
                    setItems(res.data.results)
                })
                .catch(err => {
                    console.error('ошибка при получении данных', err);
                })
        }
        getItems()
    }, [])

    const lastItemIndex = currenPage * counterItems
    const firstItemIndex = lastItemIndex - counterItems
    const currenIndex = items.slice(firstItemIndex, lastItemIndex)


    const pagination = pageNumber => setCurrenPage(pageNumber)

    return (
        <>
            <div>
                <div className={styles.cards}>
                    <Card items={currenIndex} />
                    <Paginates
                        counterItems={counterItems}
                        totalCount={items.length}
                        pagination={pagination}
                    />
                </div>
            </div>

        </>
    )
}
