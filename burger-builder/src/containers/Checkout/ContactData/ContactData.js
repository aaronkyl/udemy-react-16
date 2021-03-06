import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

import classes from './ContactData.css'

class ContactData extends Component {
  state = {
    orderForm: {
      name: 'Aaron Wilkinson',
      street: '123 Main',
      zipCode: '12345',
      country: 'USA',
      email: 'test@test.com',
      deliveryMethod: 'fastest'
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({loading: true})
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
    }

    // Firebase requires .json for the node
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false
        })
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({
          loading: false
        })
      })
  }
  
  render() {
    let form = (
      <form>
        <Input inputtype='input' type='text' name='name' placeholder='Your Name' autoComplete='name' />
        <Input inputtype='input' type='email' name='email' placeholder='Your Email' autoComplete='email' />
        <Input inputtype='input' type='text' name='street' placeholder='Street' autoComplete='street' />
        <Input inputtype='input' type='text' name='postal' placeholder='Postal Code' autoComplete='postal' />
        <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
      </form>
    )

    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData