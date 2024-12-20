import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import OrdersView from '@/views/OrdersView.vue';
import ProductsView from '@/views/ProductsView.vue';
import ProductView from '@/views/ProductView.vue';
import CartView from '@/views/CartView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/orders', name: 'orders', component: OrdersView },
  { path: '/products', name: 'products', component: ProductsView },
  { path: '/products/:id', name: 'product', component: ProductView },
  { path: '/cart', name: 'cart', component: CartView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
