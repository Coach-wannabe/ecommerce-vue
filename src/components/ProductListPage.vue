<template>
  <div class="product-list-page">
    <h1>Our Products</h1>
    <div v-for="product in products" :key="product.id" class="product-card">
      <img :src="getImage(product.image)" class="product-image" />
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }} USD</p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['products'])
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