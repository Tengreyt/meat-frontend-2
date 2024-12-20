import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // Массив товаров в корзине
  }),
  actions: {
    addToCart(item) {
      this.items.push(item); // Добавление товара в корзину
    },
    removeFromCart(id) {
      this.items = this.items.filter((item) => item.id !== id); // Удаление товара по ID
    },
  },
});
