<template>
    <div class="product-detail-page">
      <img :src="getImage(product.image)" class="product-detail-image" />
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ product.price }} Tg </p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    props: ['id'],
  data() {
    return {
      product: {},
    };
  },
  
    computed: {
      ...mapState(['products'])
    },
    
    created() {
      const productId = this.$route.params.id;
      this.product = this.products.find(p => p.id === parseInt(productId));
    },
    
    methods: {
      getImage(imageName) {
        return require(`@/assets/images/${imageName}`);
      },
      
      addToCart(product) {
        // const success = this.$store.dispatch('addToCart', product);
        // if (!success) {
          
        //   this.$router.push('/login');
        // }
        this.$store.dispatch('addToCart', product);
      }
    }
  };
  </script>
  <style scoped>
.product-detail-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.product-detail-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
}

h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

button {
  background-color: #6200ea;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3700b3;
}
</style>
