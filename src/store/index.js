import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Product A',
        price: 100,
        description: 'A great product',
        image: 'logo.png'
      },
      {
        id: 2,
        name: 'Product B',
        price: 150,
        description: 'Another great product',
        image: 'logo.png'
      },
      {
        id: 3,
        name: 'Product C',
        price: 200,
        description: 'The best product',
        image: 'logo.png'
      }
    ],
    cart: [],
    user: null
  },
  mutations: {
    addToCart(state, product) {
      const item = state.cart.find((i) => i.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId);
    }
  },
  actions: {
    fetchProducts() {
      
    },
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    }
  },
  getters: {
    cartItemCount(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  }
});

export default store;
