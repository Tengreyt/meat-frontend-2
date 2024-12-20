import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export async function fetchDiscounts() {
  const response = await axios.get(`${API_URL}/discounts/`);
  return response.data;
}

export async function fetchDiscountById(id) {
  const response = await axios.get(`${API_URL}/discounts/${id}/`);
  return response.data;
}
