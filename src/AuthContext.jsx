import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [totalPrice, setTotalPrice] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [getItemCount] = useState();

    const [cartItems, setCartItems] = useState(() => {
        const getCartItems = localStorage.getItem('cartItems');
        return getCartItems ? JSON.parse(getCartItems) : [];
    });


    
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    }, [cartItems]);



    const [favoriteItems, setFavoriteItems] = useState(() => {
        const getFavorite = localStorage.getItem('favoriteItems');

        return getFavorite ? JSON.parse(getFavorite) : []

    })
    useEffect(() => {
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    }, [favoriteItems]);


    const handleAddToFavorite = (item) => {
        if (Array.isArray(item)) {
            setFavoriteItems(item);
        } else {
            const findItem = favoriteItems.find(favoriteItem => favoriteItem.id === item.id);
            const updatedFavoriteItems = findItem
                ? favoriteItems.map(favoriteItem =>
                    favoriteItem.id === item.id
                        ? { ...favoriteItem }
                        : favoriteItem
                )
                : [...favoriteItems, { ...item }];

            setFavoriteItems(updatedFavoriteItems);
        }
    };
    const handleAddToCart = (item) => {
        if (Array.isArray(item)) {
            setCartItems(item);
        } else {
            const findItem = cartItems.find(cartItem => cartItem.id === item.id);
            const updatedCartItems = findItem
                ? cartItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, count: cartItem.count }
                        : cartItem
                )
                : [...cartItems, {
                    ...item,
                    count: item?.count || 1
                }];

            setCartItems(updatedCartItems);

        }
    };


    const handleCountChange = (id, newCount) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === id ? { ...item, count: newCount } : item
        );
        setCartItems(updatedCartItems);
    };

    const isItemInCart = (id) => {
        return cartItems.some(cartItem => cartItem.id === id);
    };

    const handleCartClick = (item) => {
        if (isItemInCart(item.id)) {
            const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
            handleAddToCart(updatedCartItems);
        } else {
            handleAddToCart(item);
        }
    };




    const isItemInFavorite = (id) => {
        return favoriteItems.some(cartItem => cartItem.id === id);
    };


    const handleFavClick = (item) => {
        if (isItemInFavorite(item.id)) {
            const updatedFavoriteItems = favoriteItems.filter(favoriteItem => favoriteItem.id !== item.id);
            handleAddToFavorite(updatedFavoriteItems);
        } else {
            handleAddToFavorite(item);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userAvatar')
        setIsAuthenticated(false)
        navigate('/');
    };
    return (

        <AuthContext.Provider value={{
            handleLogout,
            isAuthenticated,
            isItemInCart,
            isItemInFavorite,
            setIsAuthenticated,
            cartItems,
            setCartItems,
            handleAddToCart,
            handleCountChange,
            totalPrice,
            setTotalPrice,
            handleCartClick,
            handleFavClick,
            favoriteItems,
            setFavoriteItems,
            getItemCount
        }}>

            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
