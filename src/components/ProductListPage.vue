<template>
  <div class="product-list-page">
    <SideBarMenu /> <!-- Include the SideBarMenu component here -->
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
        <img :src="getImage(product.image)" class="product-image" alt="Product Image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} Tg</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>

    <div class="pagination-buttons">
      <button @click="prevPage" :disabled="currentPage === 1">Предыдущее</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Далее</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SideBarMenu from "@/components/SideBarMenu.vue";

export default {
  components: { SideBarMenu },
  data() {
    return {
      selectedCategory: 'All',
      currentPage: 1,
      itemsPerPage: 6,
      categories: ['All', 'Laptops', 'Smartphones', 'Accessories'],
      isMenuVisible: true
    };
  },

  computed: {
    ...mapState({
      products: state => state.products,
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
    },
  },

  methods: {
    getImage(imageName) {
      return require(`@/assets/images/${imageName}`);
    },

    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    filterByCategory(category) {
      this.selectedCategory = category;
      this.currentPage = 1;
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
.pagination-buttons button {
  background-color: #361c59;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 30px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-buttons button:disabled {
  background-color: #5c4b83;
  cursor: not-allowed;
}

.pagination-buttons button:not(:disabled):hover {
  background-color: #3700b3;
}
.menu-toggle {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-toggle:hover {
  background-color: #6200ea;
}
</style>
