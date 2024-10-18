<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="loginUser" class="login-form">
      <label for="username">Username</label>
      <input
        v-model="username"
        id="username"
        type="text"
        placeholder="Enter your username"
        required
      />

      <label for="password">Password</label>
      <input
        v-model="password"
        id="password"
        type="password"
        placeholder="Enter your password"
        required
      />

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <button type="submit">Login</button>

      <p>Don't have an account? <router-link to="/register">Register here</router-link></p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    loginUser() {
      const credentials = {
        username: this.username,
        password: this.password
      };
      // Dispatch Vuex action to login
      const success = this.$store.dispatch('login', credentials);
      if (success) {
        const redirect = this.$route.query.redirect || '/products'; // Redirect after login
        this.$router.push(redirect);
      } else {
        this.errorMessage = 'Invalid username or password'; // Show error message on failure
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
