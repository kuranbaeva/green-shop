import React,{useState} from 'react'
import styles from '../../components/Count/Count.module.scss'
import Button from '../../components/UI/Button/Button'
import {Minus, Plus} from 'lucide-react'

export default function Count() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const dicrement = () => {
        setCount(prev => prev > 0 ? prev - 1 : 0)
    }

    return (
        <>
            <div>
                <div className={styles.shop_item_infor_cart_count}>
                    <Button onClick={dicrement}>
                        <Minus />
                    </Button>
                    <p>
                        {count}
                    </p>
                    <Button onClick={increment}>
                        <Plus />
                    </Button>
                </div>
            </div>

        </>
    )
}
