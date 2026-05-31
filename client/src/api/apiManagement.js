import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5001",
  timeout: 10000,
});

export async function connectApi({ method = "GET", url, params }) {
  try {
    const response = await apiClient({
      method,
      url,
      params,
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
}
