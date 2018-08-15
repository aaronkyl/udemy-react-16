import axios from 'axios'

const database = axios.create({
  baseURL: 'https://react-burger-builder-29be2.firebaseio.com/'
})

export default database