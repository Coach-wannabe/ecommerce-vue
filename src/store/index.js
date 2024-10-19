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
    registeredUsers: [], // Store registered users
    user: JSON.parse(localStorage.getItem('user')) || null, // Store current logged-in user
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage
    },

    addUser(state, user) {
      state.registeredUsers.push(user); // Add new user to registered users array
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
      localStorage.removeItem('user'); // Remove user from localStorage on logout
    }
  },

  actions: {
    login({ commit, state }, { email, password }) {
      // Find the user by email and password
      const user = state.registeredUsers.find(user => user.email === email && user.password === password);
      if (user) {
        commit('setUser', { id: user.id, email: user.email, firstName: user.firstName }); // Store user
        return true;
      }
      return false; // Login failed
    },

    // Registration logic
    register({ commit, state }, { firstName, lastName, email, password }) {
      // Check if email already exists
      const existingUser = state.registeredUsers.find(user => user.email === email);
      if (existingUser) {
        return { success: false, message: 'Email already exists' };
      }

      // Create new user object
      const newUser = {
        id: state.registeredUsers.length + 1, // Unique ID for the user
        firstName,
        lastName,
        email,
        password
      };

      // Add user to state and log them in
      commit('addUser', newUser);
      commit('setUser', { id: newUser.id, email: newUser.email, firstName: newUser.firstName });

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
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    }
  },
  
  getters: {
    isAuthenticated(state) {
      return !!state.user; // Check if a user is logged in
    },
    currentUser(state) {
      return state.user; // Return current logged-in user
    }
  }
});

export default store;
