<template>
  <v-container class="cart-page">
    <h1 class="page-title">Your Shopping Cart</h1>
    <v-row>
      <v-col cols="12" v-for="item in cart" :key="item.id">
        <v-card class="cart-item">
          <!-- Dynamically load image using require() -->
          <v-img :src="getImage(item.image)" height="100px" class="cart-item-image"></v-img>
          <v-card-text>
            <h3 class="product-name">{{ item.name }}</h3>
            <p class="product-price">{{ item.price }} USD ({{ item.quantity }})</p>
            <v-btn text color="red" @click="removeFromCart(item.id)">Remove</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Cart Summary -->
    <v-row>
      <v-col cols="12">
        <div class="cart-summary">
          <p class="summary-title">Total Price: {{ cartTotal }} USD</p>
          <v-btn color="primary" @click="$router.push('/checkout')">Proceed to Checkout</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotal'])
  },
  methods: {
    removeFromCart(productId) {
      this.$store.dispatch('removeFromCart', productId);
    },
    getImage(imageName) {
      // Use require to dynamically load images from the assets folder
      return require(`@/assets/images/${imageName}`);
    }
  }
};
</script>

<style scoped>
.cart-page {
  padding: 20px;
  background-color: white;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e88e5;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.cart-item-image {
  border-radius: 5px;
  object-fit: cover;
}

.cart-item .product-name {
  font-size: 1.3rem;
  margin-left: 20px;
}

.cart-item .product-price {
  font-size: 1.1rem;
  color: #4caf50;
  margin-left: 20px;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #e0e0e0;
}

.summary-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e88e5;
}

.v-btn {
  background-color: #1e88e5;
  color: white;
}

.v-btn:hover {
  background-color: #1565c0;
}
</style>
