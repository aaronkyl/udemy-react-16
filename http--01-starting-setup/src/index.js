import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com'

axios.interceptors.request.use(requestConfig => {
  console.log(requestConfig)
  return requestConfig
}, error => {
  console.log(error)
  return Promise.reject(error)
})

axios.interceptors.response.use(responseConfig => {
  console.log(responseConfig)
  return responseConfig
}, error => {
  console.log(error)
  return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
