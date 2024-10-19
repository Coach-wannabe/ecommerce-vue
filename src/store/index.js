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
    registeredUsers: [], 
    user: JSON.parse(localStorage.getItem('user')) || null, 
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user)); 
    },

    addUser(state, user) {
      state.registeredUsers.push(user); 
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
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart = state.cart.filter(item => item.id !== productId);
        }
      }
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user'); 
    }
  },

  actions: {
    login({ commit, state }, { email, password }) {
      const user = state.registeredUsers.find(user => user.email === email && user.password === password);
      if (user) {
        commit('setUser', { id: user.id, email: user.email, firstName: user.firstName }); 
        return true;
      }
      return false; 
    },

    register({ commit, state }, { firstName, lastName, email, password }) {
      const existingUser = state.registeredUsers.find(user => user.email === email);
      if (existingUser) {
        return { success: false, message: 'Email already exists' };
      }

      const newUser = {
        id: state.registeredUsers.length + 1, 
        firstName,
        lastName,
        email,
        password
      };

      commit('addUser', newUser);
      commit('setUser', { id: newUser.id, email: newUser.email, firstName: newUser.firstName });

      return { success: true };
    },

    logout({ commit }) {
      commit('logout');
    },  
    
    fetchProducts({ commit }) {
      const products = [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }];
      commit('setProducts', products);
    },
    addToCart({ commit }, product){
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    }
  },
  
  getters: {
    isAuthenticated(state) {
      return !!state.user; 
    },
    currentUser(state) {
      return state.user; 
    },
    cartTotal(state){
      return state.cart.reduce((total, item) =>{
        return total + item.price * item.quantity;
      }, 0);
    }
  }
});

export default store;
