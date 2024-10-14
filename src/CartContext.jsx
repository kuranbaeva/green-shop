import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()
export const useCart = () => {
    return useContext(CartContext)
};

export const CartProvider = ({ children }) => {
    const [cartSummary, setCartSummary] = useState({
        subtotal: 0.00,
        coupon: 0.00,
        shipping: 0.00,
        total: 0.00
    });

    const calculateTotal = (subtotal, coupon, shipping) => {
        return (subtotal - coupon + shipping).toFixed(2);
    };

    const updateCartSummary = (newSummary) => {
        setCartSummary({
            ...newSummary,
            total: calculateTotal(newSummary.subtotal, newSummary.coupon, newSummary.shipping)
        });
    };

    return (
        <CartContext.Provider value={{ cartSummary, updateCartSummary }}>
            {children}
        </CartContext.Provider>
    );
};
