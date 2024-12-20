import axios from 'axios';

const API_BASE = '/api/products/';

export const fetchProducts = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE}${id}/`);
  return response.data;
};
