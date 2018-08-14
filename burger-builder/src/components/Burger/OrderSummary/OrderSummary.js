import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = []
  for (let ingredient in props.ingredients) {
    if (props.ingredients[ingredient]) {
      ingredientSummary.push(<li key={ingredient}><span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}</li>)
    }
  }
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>One delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><b>Total: ${props.totalPrice.toFixed(2)}</b></p>
      <p>Complete order?</p>
      <Button clicked={props.cancelPurchasing} btnType='Danger' >CANCEL</Button>
      <Button clicked={props.continuePurchasing} btnType='Success' >CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary