
// import React,{useState,useEffect} from 'react'
// import styles from '../../components/Count/Count.module.scss'
// import Button from '../../components/UI/Button/Button'
// import {Minus, Plus} from 'lucide-react'
// import { useAuth } from '../../AuthContext'
//  const Count = ({ itemId, initialQuantity, onQuantityChange,stock }) => {
//     const [count, setCount] = useState(initialQuantity || 1);

//     const handleIncrement = () => {
//         if (quantity < stock) {  
//             const newQuantity = quantity + 1;
//             setQuantity(newQuantity);
//             onQuantityChange(newQuantity);
//             return newQuantity;
//         }
//     };

//     const handleDecrement = () => {
//         if (quantity > 1) {
//             const newQuantity = quantity - 1;
//             setQuantity(newQuantity);
//             onQuantityChange(newQuantity);
//             return newQuantity;
//         }
//     };

//     useEffect(() => {
//         setQuantity(initialQuantity);
//     }, [initialQuantity]);

//     return (
//         <div className={styles.shop_item_infor_cart_count}>
//              <Button onClick={handleDecrement}>
//                  <Minus />
//              </Button>
//              <p>{quantity}</p>
//              <Button onClick={handleIncrement}>
//                  <Plus />
//              </Button>
//          </div>
//     );
// };
// export default Count



import React,{useState,useEffect} from 'react'
import styles from '../../components/Count/Count.module.scss'
import Button from '../../components/UI/Button/Button'
import {Minus, Plus} from 'lucide-react'
import { useAuth } from '../../AuthContext'
 const Count = ({ itemId, initialCount, onCountChange,stock }) => {
    const [count, setCount] = useState(initialCount || 1);

    const handleIncrement = () => {
        if (count < stock) {  
            const newCount = count + 1;
            setCount(newCount);
            onCountChange(newCount);
            return newCount;
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            onCountChange(newCount);
            return newCount;
        }
    };

    useEffect(() => {
        setCount(initialCount);
    }, [initialCount]);

    return (
        <div className={styles.shop_item_infor_cart_count}>
             <Button onClick={handleDecrement}>
                 <Minus />
             </Button>
             <p>{count}</p>
             <Button onClick={handleIncrement}>
                 <Plus />
             </Button>
         </div>
    );
};
export default Count






