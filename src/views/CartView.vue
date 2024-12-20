<template>
    <div>
      <h1>Корзина</h1>
      <div v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id">
          <p>{{ item.name }} - {{ item.price }}₽</p>
          <button @click="removeFromCart(item.id)">Удалить</button>
        </div>
        <p>Общая сумма: {{ totalPrice }}₽</p>
      </div>
      <p v-else>Корзина пуста</p>
    </div>
</template>

<script>
import { useCartStore } from '../store/cartStore';

export default {
  computed: {
    cartItems() {
      return useCartStore().items;
    },
    totalPrice() {
      return useCartStore().totalPrice;
    },
  },
  methods: {
    removeFromCart(id) {
      useCartStore().removeFromCart(id);
    },
  },
};
</script>
