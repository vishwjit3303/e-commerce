import axios from "axios"

export const API_BASE_URL = "https://ecommerce-server-production-f74b.up.railway.app"

const jwt = localStorage.getItem("jwt")

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Authorization": `Bearer ${jwt}`,
    "Content-Type": "application/json"
  }
})
export default api;

export default api