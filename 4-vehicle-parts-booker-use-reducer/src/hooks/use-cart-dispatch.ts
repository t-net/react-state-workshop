import { useContext } from 'react';
import { CartDispatchContext } from "@/providers/cart-context-provider";

const useCartDispatch = () => useContext(CartDispatchContext);

export default useCartDispatch;
