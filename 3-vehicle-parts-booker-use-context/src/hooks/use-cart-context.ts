import { useContext } from 'react';
import { CartContext } from "@/providers/cart-context-provider";

const useCartContext = () => useContext(CartContext);

export default useCartContext;
