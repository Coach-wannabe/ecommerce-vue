<template>
  <div class="home-page">
    <h1>Welcome to Our E-Commerce Site</h1>

    <div class="discount-message">
      <h2>BIG DISCOUNTS!</h2>
      <p>Don't miss out on our amazing offers!</p>
    </div>

    <h2>Rate our products</h2>
    <div class="product-grid">
      <div v-for="product in popularProducts" :key="product.id" class="product-card">
        <img :src="getImage(product.image)" alt="Product Image" class="product-image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} USD</p>

        <div class="rating">
          <span
            v-for="star in 5"
            :key="star"
            class="star"
            :class="{ filled: star <= product.rating }"
            @click="rateProduct(product, star)"
          >
            ★
          </span>
        </div>

        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    popularProducts() {
      return this.$store.state.products.slice(0, 4);
    }
  },
  methods: {
    getImage(imageName) {
      return require(`@/assets/images/${imageName}`);
    },
    rateProduct(product, rating) {
      this.$store.dispatch('rateProduct', { productId: product.id, rating });
    },
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
    goToShop() {
      this.$router.push('/shop');
    }
  }
};
</script>

<style scoped>
.home-page {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.discount-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.discount-message {
  flex: 1;
  text-align: center;
}

.side-image {
  width: 150px;
  height: auto;
}

.shop-now-button {
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.shop-now-button:hover {
  background-color: #ff5a4d;
}

h1 {
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #555;
  margin-bottom: 40px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.product-card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 8px;
}

.rating {
  margin-bottom: 10px;
}

.star {
  cursor: pointer;
  font-size: 24px;
  color: #ccc;
}

.star.filled {
  color: gold;
}

button {
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3700b3;
}
</style>
