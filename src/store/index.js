import { createStore } from 'vuex';
const store = createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Laptop',
        price: 359.999,
        description: 'A great product',
        image: 'laptop.png'
      },
      {
        id: 2,
        name: 'Phone',
        price: 275.999,
        description: 'Another great product',
        image: 'phone.jpg'
      },
      {
        id: 3,
        name: 'Fridge',
        price: 201.999,
        description: 'The best product',
        image: 'fridge.jpg'
      }
    ],
    cart: [],
    user: null, 
    registeredUsers: [] 
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
        state.products = products;
    },

    addRegisteredUser(state, user) {
      state.registeredUsers.push(user); 
    },
    
    addToCart(state, product) {
      const item = state.cart.find(i => i.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
        state.cart = state.cart.filter(item => item.id !== productId);
    },
    
    logout(state) {
      state.user = null;
      localStorage.removeItem('user'); 
    }
  },

  actions: {
    login({ commit, state }, credentials) {
      const user = state.registeredUsers.find(
        user => user.username === credentials.username && user.password === credentials.password
      );
      if (user) {
        commit('setUser', { username: user.username });
        localStorage.setItem('user', JSON.stringify({ username: user.username }));
        return true;
      }
      return false; 
    },

    register({ commit, state }, credentials) {
      const existingUser = state.registeredUsers.find(user => user.username === credentials.username);
      if (existingUser) {
        return { success: false, message: 'Username already exists' }; 
      }
      
      commit('addRegisteredUser', credentials);
      commit('setUser', { username: credentials.username }); 
      localStorage.setItem('user', JSON.stringify({ username: credentials.username }));
      return { success: true };
    },
    fetchProducts({ commit }) {
        // Пример API запроса для продуктов
        const products = [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }];
        commit('setProducts', products);
    },
    addToCart({ commit }, product){
      commit('addToCart', product);
    },
    logout({ commit }) {
      commit('logout');
    }
  },
  
  getters: {
    isAuthenticated(state) {
      return !!state.user; 
    },
    cartItems(state) {
        return state.cart;
    }
  }
});

export default store;
