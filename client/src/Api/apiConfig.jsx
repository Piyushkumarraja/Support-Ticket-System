// apiConfig.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

const makeRequest = async (method, url, data = null) => {
  try {
    const response = await api({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export default makeRequest;
