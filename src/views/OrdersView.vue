<template>
    <div class="orders">
      <h1>Ваши заказы</h1>
  
      <div v-if="orders.length === 0">
        <p>У вас еще нет заказов.</p>
      </div>
  
      <ul>
        <li v-for="order in orders" :key="order.id">
          <strong>Заказ #{{ order.id }}</strong> - {{ order.status }}
          <button @click="viewOrder(order.id)">Посмотреть</button>
          <button @click="deleteOrder(order.id)">Удалить</button>
        </li>
      </ul>
      <button @click="deleteAllOrders">Удалить все заказы</button>
      <button @click="createNewOrder">Создать новый заказ</button>
    </div>
</template>

<script>
import { useOrderStore } from '@/store/orderStore';

export default {
  name: 'OrdersView',
  setup() {
    const orderStore = useOrderStore();

    const loadOrders = async () => {
      await orderStore.loadOrders();
    };

    const viewOrder = async (id) => {
      await orderStore.loadOrderById(id);
      alert(JSON.stringify(orderStore.selectedOrder, null, 2)); // Покажи данные о заказе
    };

    const deleteAllOrders = async () => {
      if (confirm('Вы уверены, что хотите удалить все заказы?')) {
        await orderStore.removeAllOrders();
        alert('Все заказы удалены.');
      }
    };

    const createNewOrder = async () => {
      const newOrderData = {
        items: [
          { product_id: 1, quantity: 2 },
          { product_id: 2, quantity: 1 },
        ],
      };
      await orderStore.addOrder(newOrderData);
      alert('Новый заказ создан!');
    };

    const deleteOrder = async (id) => {
      if (confirm('Вы уверены, что хотите удалить заказ?')) {
        await orderStore.removeOrder(id);
        alert('Заказ удален.');
      }
    };

    return {
      orders: orderStore.orders,
      loadOrders,
      viewOrder,
      createNewOrder,
      deleteOrder,
      deleteAllOrders,
    };
  },
  mounted() {
    this.loadOrders();
  },
};
</script>

<style>
.orders {
  padding: 20px;
}
</style>
  