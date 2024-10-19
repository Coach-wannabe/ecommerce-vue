<template>
  <div class="checkout-page">
    <h1>Checkout</h1>
    <form>
      <div>
        <label>First Name</label>
        <input type="text" v-model="firstName" required>
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" v-model="lastName" required>
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" v-model="email" required>
      </div>
      <div>
        <label>Shipping Address</label>
        <input type="text" v-model="shippingAddress" required>
      </div>
      <div>
        <label>City</label>
        <input type="text" v-model="city" required>
      </div>
      <div>
        <label>Postal Code</label>
        <input type="text" v-model="postalCode" required>
      </div>

      <hr>
      <h2>Payment Information</h2>
      <div>
        <label>Card Number</label>
        <input type="number" v-model="cardNumber" required>
      </div>
      <div>
        <label>Expiry (MM/YY)</label>
        <input type="text" v-model="expiryDate" required>
      </div>
      <div>
        <label>CVC</label>
        <input type="number" v-model="cvc" required>
      </div>

      <hr>
      <h2>Order Summary</h2>
      <div>
        <p>Total Items: {{ totalItems }}</p>
        <p>Total Price: {{ cartTotal }} Tg</p>
      </div>

      <div>
        <button type="button" @click="submitOrder">Place Order</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const shippingAddress = ref('');
    const city = ref('');
    const postalCode = ref('');
    const cardNumber = ref('');
    const expiryDate = ref('');
    const cvc = ref('');

    const totalItems = computed(() => store.state.cart.reduce((sum, item) => sum + item.quantity, 0));
    const cartTotal = computed(() => store.getters.cartTotal);

    const submitOrder = () => {
      alert('Your order has been placed!');
    };

    return {
      firstName,
      lastName,
      email,
      shippingAddress,
      city,
      postalCode,
      cardNumber,
      expiryDate,
      cvc,
      totalItems,
      cartTotal,
      submitOrder,
    };
  },
};
</script>

<style scoped>
.checkout-page {
  background-color: white;
  padding: 30px;
}

h1, h2 {
  color: #1e88e5;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}

button {
  background-color: #1e88e5;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #1565c0;
}
</style>