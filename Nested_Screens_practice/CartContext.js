import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [offer_price, SetOffer_price] = useState(0)
    const addToCart = (item) => {
        setCartItems(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, Quantiy: cartItem.Quantiy + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, Quantiy: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevCart =>
            prevCart
                .map(cartItem =>
                    cartItem.id === id
                        ? { ...cartItem, Quantiy: cartItem.Quantiy - 1 }
                        : cartItem
                )
                .filter(cartItem => cartItem.Quantiy > 0) // Remove item when quantity is 0
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, SetOffer_price, offer_price }}>
            {children}
        </CartContext.Provider>
    );
};
