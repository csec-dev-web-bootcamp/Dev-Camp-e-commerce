import { create } from "zustand";

export const useCart = create((set) => ({
  cartProducts: [],

  addToCart: (product) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));
      currentState.cartProducts.push(product);

      return currentState;
    }),

  removeProductFromCart: (id) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));

      currentState.cartProducts = currentState.cartProducts.filter(
        (product) => product.id !== id
      );

      return currentState;
    }),
}));
