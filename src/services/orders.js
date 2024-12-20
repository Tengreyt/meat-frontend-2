import axios from 'axios';

const API_BASE = '/api/orders/';

export const fetchOrders = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const fetchOrderById = async (id) => {
  const response = await axios.get(`${API_BASE}${id}/`);
  return response.data;
};

export const createOrder = async (orderData) => {
  const response = await axios.post(API_BASE, orderData);
  return response.data;
};

export const deleteOrder = async (id) => {
  await axios.delete(`${API_BASE}${id}/`);
};

export const createPayment = async (orderId) => {
  const response = await axios.post(`${API_BASE}${orderId}/create-payment/`);
  return response.data;
};
