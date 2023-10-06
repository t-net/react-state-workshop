import CartItem from "@/types/cart-item";
import Product from "@/types/product";

export enum CartActionType {
  Add = 'add',
  // Remove = 'remove',
}

export interface CartAction {
  type: CartActionType;
  payload: {
    product: Product,
    quantity: number
  };
}

const cartItemsReducer = (prevCartItems: CartItem[], action: CartAction) => {
  const { payload: { product, quantity } } = action;

  switch (action.type) {
    case CartActionType.Add: {
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
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};

export default cartItemsReducer;
