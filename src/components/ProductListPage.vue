<template>
    <div class="product-list-page">
      <h1>Our Products</h1>
      <div v-for="product in products" :key="product.id" class="product-card">
        <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">{{ product.name }}</router-link>
        <img :src="getImage(product.image)" class="product-image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} Tg</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
      products: state => state.products, // пример использования mapState
    }),
      products() {
      return this.$store.state.products;
    },
    },
  
    methods: {
      getImage(imageName) {
        return require(`@/assets/images/${imageName}`);
      },
      
      addToCart(product) {
        const success = this.$store.dispatch('addToCart', product);
        if (!success) {
          
          this.$router.push('/login');
        }
      }
    }
  };
  </script>

  <style scoped>
  h2 {
    color: #333;
    font-size: 24px;
  }
  a {
    color: #42b983;
    text-decoration: none;
  }
  </style>
  
