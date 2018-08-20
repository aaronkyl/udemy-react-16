import React, { Component } from 'react'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import Order from '../../components/Order/Order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  componentDidMount() {
    axios.get('/orders.json')
    .then(response => {
      const fetchedOrders = []
      for (let key in response.data) {
        fetchedOrders.push({
          ...response.data[key],
          id: key
         })
      }
      console.log(fetchedOrders)
      this.setState({orders: fetchedOrders, loading: false})
    })
    .catch(error => {
      this.setState({loading: false})
    })
  }

  render() {
    let orders = this.state.loading ? <Spinner /> : <Order />
    return (
      <div>
        {orders}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios)