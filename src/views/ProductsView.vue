<template>
    <div class="products">
      <h1>Все товары</h1>
  
      <div v-if="products.length === 0">
        <p>Товары не найдены.</p>
      </div>
  
      <ul>
        <li v-for="product in products" :key="product.id" class="product-item">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p><strong>Цена:</strong> {{ product.price }} ₽</p>
          <button @click="viewProduct(product.id)">Подробнее</button>
        </li>
      </ul>
    </div>
</template>

<script>
import { useProductStore } from '@/store/productStore';
import { useRouter } from 'vue-router';

export default {
  name: 'ProductsView',
  setup() {
    const productStore = useProductStore();
    const router = useRouter();

    const loadProducts = async () => {
      await productStore.loadProducts();
    };

    const viewProduct = (id) => {
      router.push(`/products/${id}`);
    };

    return {
      products: productStore.products,
      loadProducts,
      viewProduct,
    };
  },
  mounted() {
    this.loadProducts();
  },
};
</script>

<style>
.products {
  padding: 20px;
}
.product-item {
  margin-bottom: 20px;
  list-style: none;
}
.product-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
</style>
  