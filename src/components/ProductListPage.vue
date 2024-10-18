<template>
  <v-container class="product-list-page">
    <h1 class="page-title">Our Products</h1>
    <p class="subtitle">Browse our selection of top-quality items</p>

    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
        <v-card class="product-card" @click="$router.push(`/product/${product.id}`)">
          <v-img :src="getImage(product.image)" height="200px" class="product-image"></v-img>
          <v-card-title class="product-name">{{ product.name }}</v-card-title>
          <v-card-subtitle class="product-price">{{ product.price }} USD</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
    }
  }
};
</script>

<style scoped>
.product-list-page {
  padding: 20px;
  background-color: #fff;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e88e5;
  margin-bottom: 20px;
  text-align: center;
}

.subtitle {
  font-size: 1.2rem;
  color: #757575;
  margin-bottom: 30px;
  text-align: center;
}

.product-card {
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #f9f9f9;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
}

.product-image {
  object-fit: cover;
  border-bottom: 2px solid #f5f5f5;
}

.product-name {
  font-size: 1.2rem;
  color: #333;
  margin-top: 10px;
}

.product-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #4caf50;
  margin-bottom: 10px;
}
</style>
