import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000"

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
})

export const multipartClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: false,
})
