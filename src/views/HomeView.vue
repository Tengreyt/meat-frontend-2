<template>
    <div>
      <h1>Добро пожаловать в Магазин мяса!</h1>
      <div class="products">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
</template>

<script>
import ProductCard from './ProductView.vue';

export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        { id: 1, name: 'Говядина', price: 500 },
        { id: 2, name: 'Свинина', price: 400 },
        { id: 3, name: 'Курица', price: 300 },
      ],
    };
  },
};
</script>
  