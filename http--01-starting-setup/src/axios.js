import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
})

// instance.interceptors.request...

export default instance