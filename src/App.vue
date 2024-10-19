<template>
  <v-app>
    <!-- Navigation -->
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn text class="nav-btn" @click="$router.push('/')">Home</v-btn>
      <v-btn text class="nav-btn" @click="$router.push('/products')">Products</v-btn>
      <v-btn text class="nav-btn" @click="$router.push('/cart')">Cart</v-btn>

      <v-btn class="nav-btn" v-if="!isAuthenticated" color="primary" @click="$router.push('/login')">Login</v-btn>
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
/* Стили для навигационной панели */
v-app-bar {
  display: flex;
  justify-content: center; /* Центрирование контента */
  align-items: center;
  background-color: #007bff; /* Синий фон */
  height: 70px; /* Высота панели */
  padding: 0 20px;
}

/* Стили для кнопок навигации */
.nav-btn {
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  margin: 0 15px; /* Расстояние между кнопками */
  transition: background-color 0.3s ease;
}

.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Легкий эффект при наведении */
  border-radius: 5px; /* Скругленные углы */
}

/* Стили для логотипа или заголовка, если нужен */
v-app-bar-title {
  margin-right: auto; /* Перемещение заголовка или логотипа влево */
  font-size: 24px;
  color: white;
}
.nav-btn {
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 10px;
  color: white;
  transition: background-color 0.3s ease;
}

.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Эффект наведения */
}

v-main {
  flex-grow: 1; /* Чтобы основной контент занимал оставшееся пространство */
}

v-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Минимальная высота приложения - вся высота экрана */
}

v-footer {
  position: relative;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  bottom: 0;
  left: 0;
}
.text-center {
  font-size: 14px;
}

/* Медиа-запросы для мобильных устройств */
@media (max-width: 600px) {
  .nav-btn {
    font-size: 12px; /* Уменьшение шрифта на маленьких экранах */
  }

  v-footer {
    font-size: 12px; /* Меньший текст для футера */
  }
}
<<<<<<< HEAD
<style>
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
=======
>>>>>>> 0a1ce87e6cedd36a8cfe9559f3791c62bf5ecc46
</style>
