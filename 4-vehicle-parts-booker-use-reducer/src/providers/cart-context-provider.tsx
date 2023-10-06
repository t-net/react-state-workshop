import React, { useReducer } from 'react';
import CartItem from "@/types/cart-item";
import cartItemsReducer, { CartAction } from "@/reducers/cart-items-reducer";

export const CartItemsContext = React.createContext<CartItem[]>([]);
export const CartDispatchContext = React.createContext<React.Dispatch<CartAction>>(() => {});

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, dispatch] = useReducer(cartItemsReducer, []);

  return (
    <CartItemsContext.Provider value={cartItems}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  );
};

export default CartContextProvider;
