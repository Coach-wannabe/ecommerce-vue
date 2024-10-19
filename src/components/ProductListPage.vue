<template>
    <div class="product-list-page">
      <h1>Our Products</h1>
      <v-select
      v-model="selectedCategory"
      :items="categories"
      label="Filter by category"
      @change="filterProducts"
    ></v-select>
      <div v-for="product in products" :key="product.id" class="product-card">
        <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">{{ product.name }}</router-link>
        <img :src="getImage(product.image)" class="product-image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} Tg</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
      <v-pagination
      v-model="currentPage"
      :length="totalPages"
      circle
    ></v-pagination>
  </div>
</template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        selectedCategory: 'All',
        currentPage: 1,
        itemsPerPage: 6,
        categories: ['All', 'Laptops', 'Smartphones', 'Accessories'],
      };
    },

    computed: {
      ...mapState({
      products: state => state.products, // пример использования mapState
    }),
    
    filteredProducts() {
      if (this.selectedCategory === 'All') {
        return this.products;
      }
      return this.products.filter(product => product.category === this.selectedCategory);
    },
    
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
    
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProducts.slice(start, end);
    }
},

  methods: {
    getImage(imageName) {
      return require(`@/assets/images/${imageName}`);
    },

    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    }
  }
};
</script>

<style scoped>
.product-list-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin: 20px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 8px;
}

h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
}

h2 {
  font-size: 24px;
  color: #444;
}

p {
  font-size: 18px;
  color: #666;
}

button {
  background-color: #6200ea;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3700b3;
}
</style>
  
