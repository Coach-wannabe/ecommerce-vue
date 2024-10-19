<template>
  <v-app>
    <!-- Navigation -->
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn text class="nav-btn" @click="$router.push('/')">Home</v-btn>
      <v-btn text class="nav-btn" @click="$router.push('/products')">Products</v-btn>
      <v-btn text class="nav-btn" @click="$router.push('/cart')">Cart</v-btn>

      <!-- Conditionally show Login button if the user is not logged in -->
      <v-btn class="nav-btn" v-if="!isAuthenticated" color="primary" @click="$router.push('/login')">Login</v-btn>

      <!-- Conditionally show Logout button if the user is logged in -->
      <v-btn class="nav-btn" v-if="isAuthenticated" color="secondary" @click="logout">Logout</v-btn>
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
    ...mapGetters(['cartItemCount']),
    ...mapGetters(['isAuthenticated']),
  },
  
  methods: {
    logout() {
      this.$store.dispatch('logout'); // Dispatch the logout action in Vuex
      this.$router.push('/login'); // Redirect to login page after logout
    },
  },
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
