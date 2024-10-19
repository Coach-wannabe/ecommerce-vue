<template>
  <v-container class="checkout-page">
    <h1>Checkout</h1>
    <v-form>
      <!-- Shipping Information -->
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="First Name" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Last Name" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field label="Email Address" type="email" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field label="Shipping Address" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="City" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Postal Code" required></v-text-field>
        </v-col>
      </v-row>

      <!-- Payment Information -->
      <v-divider class="my-4"></v-divider>
      <h2>Payment Information</h2>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="Card Number" type="number" required></v-text-field>
        </v-col>
        <v-col cols="6" sm="3">
          <v-text-field label="Expiry (MM/YY)" required></v-text-field>
        </v-col>
        <v-col cols="6" sm="3">
          <v-text-field label="CVC" type="number" required></v-text-field>
        </v-col>
      </v-row>

      <!-- Order Summary -->
      <v-divider class="my-4"></v-divider>
      <h2>Order Summary</h2>
      <v-row>
        <v-col cols="12">
          <p>Total Items: 3</p>
          <p>Total Price: $299.99</p>
        </v-col>
      </v-row>

      <!-- Submit Button -->
      <v-row>
        <v-col cols="12" class="text-right">
          <v-btn color="primary" @click="submitOrder">Place Order</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "CheckoutPage",
  methods: {
    submitOrder() {
      alert("Your order has been placed!");
    }
  }
};
</script>

<style scoped>
.checkout-page {
  padding: 40px;
  max-width: 800px;
  margin: 20px auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.v-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.v-text-field {
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.my-4 {
  margin: 20px 0;
}

.text-right {
  text-align: right;
}

.v-btn {
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  background-color: #6200ea;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.v-btn:hover {
  background-color: #3700b3;
}

p {
  font-size: 18px;
  color: #666;
}

p.total-items,
p.total-price {
  font-weight: bold;
  color: #333;
}
</style>
