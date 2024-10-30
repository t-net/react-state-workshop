import React, { useState, useMemo, useCallback } from 'react';
import Product from "@/types/product";
import CartItem from "@/types/cart-item";

interface CartContextType {
  cartItems: CartItem[],
  addToCart: (product: Product, quantity: number) => void,
}

export const CartContext = React.createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
});

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product, quantity: number) => setCartItems((prevCartItems) => {
    const existingIndex = prevCartItems.findIndex(item => item.product.id === product.id);
    if (existingIndex === -1) {
      const cartItem: CartItem = {
        product,
        quantity,
      };
      return [...prevCartItems, cartItem];
    }

    const cartItems: CartItem[] = [...prevCartItems];
    cartItems[existingIndex] = {
      product,
      quantity: quantity + prevCartItems[existingIndex].quantity,
    };

    return cartItems;
  }), []);

  const contextValue: CartContextType = useMemo(
    () => ({
      cartItems,
      addToCart,
    }),
    [cartItems, addToCart],
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
