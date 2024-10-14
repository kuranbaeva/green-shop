
import React,{useState,useEffect} from 'react'
import styles from '../../components/Count/Count.module.scss'
import Button from '../../components/UI/Button/Button'
import {Minus, Plus} from 'lucide-react'
import { useAuth } from '../../AuthContext'
// export default function Count({ itemId, initialQuantity,onQuantityChange}) {
//     const { handleQuantityChange } = useAuth();
//     const [count, setCount] = useState(initialQuantity);
//     const increment = () => {
//         setCount((prev) => {
//             const newCount = prev + 1;
//             onQuantityChange(newCount); 

//             return newCount;
//         });
//     };

//     const decrement = () => {
//         setCount((prev) => {
//             const newCount = Math.max(prev - 1, 1); 
//             onQuantityChange(newCount);  
//             return newCount;
//         });
//     };

//     return (
//         <div className={styles.shop_item_infor_cart_count}>
//             <Button onClick={decrement}>
//                 <Minus />
//             </Button>
//             <p>{count}</p>
//             <Button onClick={increment}>
//                 <Plus />
//             </Button>
//         </div>
//     );
// }

 const Count = ({ itemId, initialQuantity, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity || 1);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    return (
        <div className={styles.shop_item_infor_cart_count}>
             <Button onClick={handleDecrement}>
                 <Minus />
             </Button>
             <p>{quantity}</p>
             <Button onClick={handleIncrement}>
                 <Plus />
             </Button>
         </div>
    );
};
export default Count
