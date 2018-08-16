import React, { Component } from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  // This was a functional component that was turned into a class
  // to use lifecycle hooks for teaching purposes
  // componentWillUpdate() {
  //   console.log('[OrderSummary] componentWillUpdate()')
  // }

  render() {
    const ingredientSummary = []
    for (let ingredient in this.props.ingredients) {
      if (this.props.ingredients[ingredient]) {
        ingredientSummary.push(<li key={ingredient}><span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {this.props.ingredients[ingredient]}</li>)
      }
    }

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>One delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><b>Total: ${this.props.totalPrice.toFixed(2)}</b></p>
        <p>Complete order?</p>
        <Button clicked={this.props.cancelPurchasing} btnType='Danger' >CANCEL</Button>
        <Button clicked={this.props.continuePurchasing} btnType='Success' >CONTINUE</Button>
      </Aux>
    )
  }
}

export default OrderSummary