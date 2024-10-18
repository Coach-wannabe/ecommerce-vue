<template>
  <v-app>
    <!-- Navigation -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>E-Commerce</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="nav-btn" @click="$router.push('/')">Home</v-btn>
      <v-btn text class="nav-btn" @click="$router.push('/products')">Products</v-btn>
      <v-btn text class="nav-btn" @click="$router.push('/cart')">Cart</v-btn>
      <v-btn text class="nav-btn" @click="$router.push('/login')">Login</v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- Footer -->
    <v-footer app>
      <v-col class="text-center">© 2024 E-Commerce</v-col>
    </v-footer>
  </v-app>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItemCount']) 
  }
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.nav-btn {
  margin-left: 15px;
  cursor: pointer;
}

.nav-btn:hover {
  text-decoration: underline; 
}

v-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
