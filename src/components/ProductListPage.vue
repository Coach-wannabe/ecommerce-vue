<template>
  <div class="product-list-page">
    <h1>Our Products</h1>
    <v-select
    v-model="selectedCategory"
    :items="categories"
    label="Filter by category"
    @change="filterProducts"
  ></v-select>
  <div class="product-grid">
  <div v-for="product in paginatedProducts" :key="product.id" class="product-card">
    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">More</router-link>
    <img :src="getImage(product.image)" class="product-image" />
    <h2>{{ product.name }}</h2>
    <p>{{ product.price }} Tg</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</div>
    <v-pagination
    v-model="currentPage"
    :length="totalPages"
    :total-visible="5"
    prev-icon="mdi-chevron-left"
    next-icon="mdi-chevron-right"
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
.v-select {
  margin-bottom: 20px;
  width: 300px;
}

.v-pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.v-pagination .v-pagination__navigation {
  background-color: #6200ea;
  color: white;
}

.v-pagination .v-pagination__item--is-active {
  background-color: #3700b3;
}

.v-pagination .v-pagination__navigation {
background-color: #6200ea;
color: white;
}

.v-pagination .v-pagination__item--is-active {
background-color: #3700b3;
};

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
.product-list-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* 3 карточки в ряд, адаптация к экрану */
  gap: 20px; /* Расстояние между карточками */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 2 карточки на маленьких экранах */
  }
}
</style>
