<template>
    <div class="product-detail">
      <h1>{{ product?.name }}</h1>
  
      <div v-if="product">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <p><strong>Описание:</strong> {{ product.description }}</p>
        <p><strong>Цена:</strong> {{ product.price }} ₽</p>
        <button @click="addToCart(product)">Добавить в корзину</button>
      </div>
      <div v-else>
        <p>Загрузка данных...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '@/store/productStore';
  import { useCartStore } from '@/store/cartStore'; // Добавь это для работы с корзиной
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'ProductView',
    setup() {
      const productStore = useProductStore();
      const cartStore = useCartStore();
      const route = useRoute();
  
      const loadProduct = async () => {
        const productId = route.params.id;
        await productStore.loadProductById(productId);
      };
  
      const addToCart = (product) => {
        cartStore.addToCart(product);
        alert('Товар добавлен в корзину!');
      };
  
      return {
        product: productStore.selectedProduct,
        loadProduct,
        addToCart,
      };
    },
    mounted() {
      this.loadProduct();
    },
  };
  </script>
  
  <style>
  .product-detail {
    padding: 20px;
  }
  .product-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  </style>
  