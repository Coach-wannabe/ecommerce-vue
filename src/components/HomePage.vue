<template>
  <v-container class="homepage">
    <h1 class="page-title">Welcome to Our Store</h1>
    <p class="subtitle">Discover the best products for you</p>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
        <v-card @click="$router.push(`/product/${product.id}`)" class="product-card">
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle class="price">{{ product.price }} USD</v-card-subtitle>
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
  created() {
    this.$store.dispatch('fetchProducts');
  }
};
</script>

<style scoped>
.homepage {
  padding: 20px;
  background-color: white;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e88e5;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #757575;
}

.product-card {
  cursor: pointer;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.price {
  font-weight: 700;
  color: #4caf50;
}
</style>
  