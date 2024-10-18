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
  background-color: white;
  padding: 30px;
}

h1, h2 {
  color: #1e88e5;
}

.v-text-field {
  margin-bottom: 20px;
}

.v-btn {
  background-color: #1e88e5;
  color: white;
}

.v-btn:hover {
  background-color: #1565c0;
}
</style>
