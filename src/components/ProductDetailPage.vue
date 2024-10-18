<template>
  <v-container class="product-detail-page">
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="getImage(product.image)" height="400px" class="product-detail-image"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">{{ product.price }} USD</p>
        <v-btn color="primary" class="add-to-cart-btn" @click="addToCart(product)">
          Add to Cart
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      product: null
    };
  },
  computed: {
    ...mapState(['products'])
  },
  created() {
    const productId = this.$route.params.id;
    this.product = this.products.find((p) => p.id === parseInt(productId));
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
    getImage(imageName) {
      return require(`@/assets/images/${imageName}`);
    }
  }
};
</script>

<style scoped>
.product-detail-page {
  padding: 30px;
  background-color: #fff;
}

.product-detail-image {
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.product-name {
  font-size: 2rem;
  font-weight: bold;
  color: #1e88e5;
  margin-bottom: 20px;
}

.product-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #666;
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4caf50;
  margin-bottom: 20px;
}

.add-to-cart-btn {
  background-color: #1e88e5;
  color: white;
  font-size: 1.1rem;
  padding: 10px 20px;
}

.add-to-cart-btn:hover {
  background-color: #1565c0;
}
</style>
