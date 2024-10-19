<template>
  <v-container class="cart-page">
    <h1 class="page-title">Your Shopping Cart</h1>
    
    <!-- Добавление слота для дополнительного контента -->
    <slot name="additional-content"></slot> 

    <v-row>
      <v-col cols="12" v-for="item in cart" :key="item.id">
        <v-card class="cart-item">
          <img :src="getImage(item.image)" height="100px" class="cart-item-image" alt="Product image">
          <v-card-text>
            <h3 class="product-name">{{ item.name }}</h3>
            <p class="product-price">{{ item.price }} Tg ({{ item.quantity }})</p>
            <button @click="removeFromCart(item.id)">Remove</button>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <div class="cart-summary">
          <p class="summary-title">Total Price: {{ cartTotal }} Tg</p>
          <button class="checkout" @click="$router.push('/checkout')">Proceed to Checkout</button>>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useCart } from '@/composables/useCart';
import {mapGetters, mapState} from "vuex";

export default {
  setup() {
    const { cartItems } = useCart();
    return { cartItems };
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotal'])
  },
  methods: {
    removeFromCart(productId) {
      this.$store.dispatch('removeFromCart', productId);
    },
    getImage(imageName) {
      return require(`@/assets/images/${imageName}`);
    }
  }
};
</script>

<style scoped>
.cart-page {
  padding: 20px;
  background-color: #f9f9f9; /* Легкий серый фон */
  border-radius: 10px; /* Закругленные углы */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Легкая тень */
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e88e5;
  margin-bottom: 20px; /* Отступ снизу */
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px; /* Внутренние отступы */
  background-color: white; /* Белый фон для каждой карточки */
  border-radius: 8px; /* Закругленные углы карточек */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* Тень для карточек */
  transition: transform 0.2s; /* Плавный переход */
}

.cart-item:hover {
  transform: translateY(-3px); /* Подъем карточки при наведении */
}

.cart-item-image {
  border-radius: 5px;
  object-fit: cover;
  width: 100px; /* Установим фиксированную ширину для изображения */
  height: 100px; /* Установим фиксированную высоту для изображения */
}

.cart-item .product-name {
  font-size: 1.4rem;
  margin-left: 20px;
  font-weight: 500; /* Полужирный текст для названия */
}

.cart-item .product-price {
  font-size: 1.2rem;
  color: #4caf50;
  margin-left: 20px;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #e0e0e0;
  background-color: #f1f1f1; /* Фон для итогов */
  border-radius: 8px; /* Закругленные углы для итогов */
  margin-top: 20px; /* Отступ сверху */
}

.summary-title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #1e88e5;
}

button {
  margin-top: 10px;
  margin-left: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  transition: all 500ms ease;
}
button:hover {
  background: rgba(0,0,0,0);
  color: #308c34;
  box-shadow: inset 0 0 0 3px #308c34;
}
button.checkout:before {
  content:'';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 42px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  transition: all 2s ease;
}
button.checkout:hover:before {
  width: 100%;
}
</style>
