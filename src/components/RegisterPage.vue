<template>
<div class="register-container">
  <h1>Register</h1>
  <form @submit.prevent="registerUser" class="register-form">
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

    <button type="submit">Register</button>

    <p>Already have an account? <router-link to="/login">Login here</router-link></p>
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
  registerUser() {
    const credentials = {
      username: this.username,
      password: this.password
    };
    
    const result = this.$store.dispatch('register', credentials);
    if (result.success) {
      const redirect = this.$route.query.redirect || '/products'; 
      this.$router.push(redirect);
    } else {
      this.errorMessage = result.message; 
    }
  }
}
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.register-form {
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0069d9;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
  