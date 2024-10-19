import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ProductListPage from '@/components/ProductListPage.vue';
import ProductDetailPage from '@/components/ProductDetailPage.vue';
import CheckoutPage from '@/components/CheckoutPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';
import CartPage from "@/components/CartPage.vue";

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/products', name: 'Products', component: ProductListPage },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetailPage },
  { path: '/cart', name: 'Cart', component: CartPage },
  { path: '/checkout', name: 'Checkout', component: CheckoutPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Register', component: RegisterPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
