
import React,{useState,useEffect} from 'react'
import styles from '../../components/Count/Count.module.scss'
import Button from '../../components/UI/Button/Button'
import {Minus, Plus} from 'lucide-react'
import { useAuth } from '../../AuthContext'
 const Count = ({ itemId, initialQuantity=1, onQuantityChange,stock }) => {
    const [quantity, setQuantity] = useState(initialQuantity || 1);

    const handleIncrement = () => {
        if (quantity < stock) {  
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
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



// import React, { useState, useEffect } from 'react';
// import styles from '../../components/Count/Count.module.scss';
// import Button from '../../components/UI/Button/Button';
// import { Minus, Plus } from 'lucide-react';

// const Count = ({ itemId, initialQuantity = 1, onQuantityChange, stock }) => {
//     const [quantity, setQuantity] = useState(initialQuantity);

//     const handleIncrement = () => {
//         if (quantity < stock) {  
//             const newQuantity = quantity + 1;
//             setQuantity(newQuantity);
//             onQuantityChange(newQuantity);
//         }
//     };

//     const handleDecrement = () => {
//         if (quantity > 1) {
//             const newQuantity = quantity - 1;
//             setQuantity(newQuantity);
//             onQuantityChange(newQuantity);
//         }
//     };

//     useEffect(() => {
//         setQuantity(initialQuantity || 1);
//     }, [initialQuantity]);

//     return (
//         <div className={styles.shop_item_infor_cart_count}>
//             <Button onClick={handleDecrement}>
//                 <Minus />
//             </Button>
//             <p>{quantity}</p>
//             <Button onClick={handleIncrement}>
//                 <Plus />
//             </Button>
//         </div>
//     );
// };

// export default Count;
