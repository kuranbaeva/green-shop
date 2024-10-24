import React, { useEffect, useState } from 'react'
import axios from '../../axios/index';
import Card from '../Card/Card'
import styles from '../../components/Paginate/Paginate.module.scss'
import Paginates from '../PaginateCount/PaginateCount'

export default function Paginate() {
    const [items, setItems] = useState(null)
    const [currenPage, setCurrenPage] = useState(1)
    const [counterItems] = useState(6)
    const getItems = async () => {
        const res = await axios.get('product', {
            params: {
                page_size: 6,
                page: currenPage
            }
        })
            .then(res => {
                console.log(res.data);

                setItems(res.data)
            })
            .catch(err => {
                console.error('ошибка при получении данных', err);
            })
    }
    useEffect(() => {
        getItems()
    }, [currenPage])

    // const lastItemIndex = currenPage * counterItems
    // const firstItemIndex = lastItemIndex - counterItems
    // const currenIndex = items.slice(firstItemIndex, lastItemIndex)


    const pagination = pageNumber => setCurrenPage(pageNumber)

    return (
        <>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card items={items?.results ?? []} />


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
