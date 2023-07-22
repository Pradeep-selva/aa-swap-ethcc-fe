import axios, { AxiosInstance } from 'axios'
import { generateUUID } from '@/features/shared'

export const API_URL = 'https://clownfish-app-bvrqr.ondigitalocean.app'

export const API_ENDPOINTS = {
  getAssets: (chainId: number) => `${API_URL}/assets/${chainId}`,
  placeOrder: () => `${API_URL}/order`,
  getOrders: (safeAddress: string) => `${API_URL}/order/${safeAddress}`,
  createAccount: () => `${API_URL}/user`
}

export type { AxiosInstance }

export const apiInstance = axios.create({
  baseURL: API_URL
})

apiInstance.interceptors.request.use((config) => {
  const trackingId = generateUUID()
  config.headers['trackingId'] = trackingId
  return config
})

apiInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const message = error.response?.data?.message || error.message
    console.error('error axios', message)

    return Promise.reject(error)
  }
)
