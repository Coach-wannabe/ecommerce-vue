<template>
  <div class="register-container">
    <h1>Register</h1>
    <form @submit.prevent="registerUser" class="register-form">
      <label for="firstName">First Name</label>
      <input v-model="firstName" id="firstName" type="text" placeholder="First Name" required />

      <label for="lastName">Last Name</label>
      <input v-model="lastName" id="lastName" type="text" placeholder="Last Name" required />

      <label for="email">Email</label>
      <input v-model="email" id="email" type="email" placeholder="Email" required />

      <label for="password">Password</label>
      <input v-model="password" id="password" type="password" placeholder="Password" required />

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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async registerUser() {
      const result = await this.$store.dispatch('register', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      });

      if (result.success) {
        this.$router.push('/products'); 
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
  