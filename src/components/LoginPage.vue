<template>
    <v-container class="login-page">
      <h1 class="page-title">Login</h1>
      <v-form>
        <v-text-field label="Email" type="email" required></v-text-field>
        <v-text-field label="Password" type="password" required></v-text-field>
        <v-btn color="primary" class="login-btn">Login</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'LoginPage'
  };
  </script>
  
  <style scoped>
  .login-page {
    padding: 40px;
    max-width: 600px;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
  }
  
  .page-title {
    font-size: 2rem;
    color: #1e88e5;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .login-btn {
    background-color: #1e88e5;
    color: white;
    margin-top: 20px;
  }
  
  .login-btn:hover {
    background-color: #1565c0;
  }
  </style>
  