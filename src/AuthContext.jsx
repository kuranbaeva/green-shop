import React, { createContext, useContext, useState,useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [totalPrice, setTotalPrice]= useState(0);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cartItems, setCartItems] = useState(() => {
        const getCartItems = localStorage.getItem('cartItems');
        return getCartItems ? JSON.parse(getCartItems) : [];
    });
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // const handleAddToCart = (item, newQuantity) => {
    //     if (Array.isArray(item)) {
    //         setCartItems(item);
    //     } else {
    //         const findItem = cartItems.find(cartItem => cartItem.id === item.id);
    //         const updatedCartItems = findItem
    //             ? cartItems.map(cartItem => 
    //                 cartItem.id === item.id 
    //                 ? { ...cartItem, quantity: cartItem.quantity + newQuantity } 
    //                 : cartItem
    //             )
    //             : [...cartItems, { ...item, quantity: newQuantity }];
    
    //         setCartItems(updatedCartItems);
    //     }
    // };
    

    const handleAddToCart = (item) => {
        if (Array.isArray(item)) {
            setCartItems(item);
        } else {
            const findItem = cartItems.find(cartItem => cartItem.id === item.id);
            const updatedCartItems = findItem
                ? cartItems.map(cartItem => 
                    cartItem.id === item.id 
                    ? { ...cartItem, quantity: cartItem.quantity} 
                    : cartItem
                )
                : [...cartItems, { ...item }];
    
            setCartItems(updatedCartItems);
        }
    };
    
    
    const handleQuantityChange = (id, newQuantity) => {
        const updatedCartItems = cartItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
    };
    

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated,cartItems,setCartItems,handleAddToCart,handleQuantityChange,totalPrice,setTotalPrice}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
