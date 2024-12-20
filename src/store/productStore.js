import { defineStore } from 'pinia';
import { fetchProducts, fetchProductById } from '@/services/products';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    selectedProduct: null,
  }),
  actions: {
    async loadProducts() {
      this.products = await fetchProducts();
    },
    async loadProductById(id) {
      this.selectedProduct = await fetchProductById(id);
    },
  },
});
