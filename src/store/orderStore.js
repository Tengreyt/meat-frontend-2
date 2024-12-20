import { defineStore } from 'pinia';
import { fetchOrders, fetchOrderById, createOrder, deleteOrder, createPayment } from '@/services/orders';

export const useOrderStore = defineStore('orderStore', {
  state: () => ({
    orders: [],
    selectedOrder: null,
  }),
  actions: {
    async loadOrders() {
      this.orders = await fetchOrders();
    },
    async loadOrderById(id) {
      this.selectedOrder = await fetchOrderById(id);
    },
    async addOrder(orderData) {
      const newOrder = await createOrder(orderData);
      this.orders.push(newOrder);
    },
    async removeOrder(id) {
      try {
        // Удаляем заказ на сервере
        await axios.delete(`/api/orders/${id}/`);
        // Удаляем заказ из локального списка
        this.orders = this.orders.filter((order) => order.id !== id);
      } catch (error) {
        console.error('Ошибка удаления заказа:', error);
        throw error;
      }
    },
    async removeAllOrders() {
      try {
        for (const order of this.orders) {
          await axios.delete(`/api/orders/${order.id}/`);
        }
        // Очищаем локальное состояние
        this.orders = [];
      } catch (error) {
        console.error('Ошибка удаления всех заказов:', error);
        throw error;
      }
    },
    async payForOrder(orderId) {
      return await createPayment(orderId);
    },
  },
});
