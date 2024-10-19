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
        const success = this.$store.dispatch('addToCart', product);
        if (!success) {
          
          this.$router.push('/login');
        }
      }
    }
  };
  </script>
