import { ref } from 'vue';
import { useStore } from 'vuex';

export function useCart() {
  const store = useStore();
  const cartItems = ref([]);

  const addToCart = (product) => {
    store.commit('addToCart', product);
    cartItems.value = store.state.cart;
  };

  const removeFromCart = (productId) => {
    store.commit('removeFromCart', productId);
    cartItems.value = store.state.cart;
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
  };
}
