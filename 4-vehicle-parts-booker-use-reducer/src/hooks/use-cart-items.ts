import { useContext } from 'react';
import { CartItemsContext } from "@/providers/cart-context-provider";

const useCartItems = () => useContext(CartItemsContext);

export default useCartItems;
