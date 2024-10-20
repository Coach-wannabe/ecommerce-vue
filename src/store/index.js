import { createStore } from 'vuex';
const store = createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Laptop',
        price: 359.999,
        description: 'A great product',
        category:'Laptops',
        image: 'laptop.png'
      },
      {
        id: 2,
        name: 'Phone',
        price: 275.999,
        description: 'Another great product',
        category:'Smartphones',
        image: 'phone.jpg'
      },
      {
        id: 3,
        name: 'Fridge',
        price: 296.20,
        description: 'The best product',
        category:'Accessories',
        image: 'fridge.jpg'
      },
      {
        id: 4,
        name: 'Headphones',
        price: 48.90,
        description: 'Super best product',
        category: 'Accessories',
        image: 'naushniki-sony.png'
      },
      {
        id: 5,
        name: 'Air conditioner',
        price: 1.999,
        description: 'Mega super best product',
        category: 'Accessories',
        image: 'cond.jpg'
      },
      {
        id: 6,
        name: 'Tablet',
        price: 1.999,
        description: 'Ultra mega super best product',
        category: 'Smartphones',
        image: 'ipad.jpg'
      },
      {
        id: 7,
        name: 'Iron',
        price: 200.999,
        description: 'Hyper ultra mega super best product',
        category: 'Accessories',
        image: 'utug.png'
      },
      {
        id: 8,
        name: 'Washing machine',
        price: 1000.999,
        description: 'Mega hyper ultra mega super best product',
        category: 'Accessories',
        image: 'stmach.png'
      },
      {
        id: 9,
        name: 'TV',
        price: 2960.00,
        description: 'Extra multi hyper ultra mega super best product',
        category: 'Accessories',
        image: 'tv.png'
      },
      {
        id: 10,
        name: 'Vacuum cleaner',
        price: 62.00,
        description: 'Uber extra multi hyper ultra mega super best product',
        category: 'Accessories',
        image: 'pul.jpg'
      },
      {
        id: 11,
        name: 'Heater',
        price: 24.00,
        description: 'Meta uber extra multi hyper ultra mega super best product',
        category: 'Accessories',
        image: '81948066.jpg'
      },
      {
        id: 12,
        name: 'Camera',
        price: 119.00,
        description: 'Meta uber extra multi hyper ultra mega super best product',
        category: 'Accessories',
        image: 'camera.jpg'
      },
      {
        id: 12,
        name: 'Camera',
        price: 119.00,
        description: 'Meta uber extra multi hyper ultra mega super best product',
        image: 'camera.jpg'
      },
    ],
    cart: [],
    registeredUsers: [], 
    user: JSON.parse(localStorage.getItem('user')) || null, 
  },

  mutations: {
    updateRating(state, { productId, rating }) {
      const product = state.products.find(p => p.id === productId);
      if (product) {
        product.rating = rating;
      }
    },
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
    rateProduct({ commit }, { productId, rating }) {
      commit('updateRating', { productId, rating }); // Вызываем мутацию для обновления рейтинга
    },
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
      const total = state.cart.reduce((sum, item) =>{
        return sum + item.price * item.quantity;
      }, 0);
      return total.toFixed(3);
    }
  }
});

export default store;
