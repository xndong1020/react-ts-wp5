import { setupInterceptorsTo } from './axiosInterceptors'
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_BASE_URL || ''
})

export default setupInterceptorsTo(instance)
