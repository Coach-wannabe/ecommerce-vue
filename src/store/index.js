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
    user: null, // This holds the currently logged-in user's information
    registeredUsers: [] // This will hold the registered users
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addRegisteredUser(state, user) {
      state.registeredUsers.push(user); // Add new user to registered users list
    },
    addToCart(state, product) {
      const item = state.cart.find(i => i.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user'); // Remove user from localStorage on logout
    }
  },
  actions: {
    login({ commit, state }, credentials) {
      // Find if the user exists in registeredUsers
      const user = state.registeredUsers.find(
        user => user.username === credentials.username && user.password === credentials.password
      );
      if (user) {
        commit('setUser', { username: user.username });
        localStorage.setItem('user', JSON.stringify({ username: user.username }));
        return true;
      }
      return false; // Invalid credentials
    },
    register({ commit, state }, credentials) {
      // Check if the username already exists
      const existingUser = state.registeredUsers.find(user => user.username === credentials.username);
      if (existingUser) {
        return { success: false, message: 'Username already exists' }; // Username already taken
      }
      // Add user to registered users
      commit('addRegisteredUser', credentials);
      commit('setUser', { username: credentials.username }); // Log in the user after registration
      localStorage.setItem('user', JSON.stringify({ username: credentials.username }));
      return { success: true };
    },
    logout({ commit }) {
      commit('logout');
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user; // Return true if user is logged in
    }
  }
});

export default store;
