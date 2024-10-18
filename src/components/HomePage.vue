<template>
  <div class="home-page">
    <h1>Welcome to Our E-Commerce Site</h1>
    <p>Browse our latest products below</p>

    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="getImage(product.image)" alt="Product Image" class="product-image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} USD</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['products']) // Fetch the products from the Vuex store
  },
  methods: {
    getImage(imageName) {
      // Dynamically load the image using require
      return require(`@/assets/images/${imageName}`);
    },
    addToCart(product) {
      const success = this.$store.dispatch('addToCart', product);
      if (!success) {
        // Redirect to login if user is not logged in
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style scoped>
.home-page {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
}

p {
  text-align: center;
  margin-bottom: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
