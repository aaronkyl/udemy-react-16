import React from 'react'
import Aux from '../../../hoc/Aux'

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
      <p>Delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Complete order?</p>
    </Aux>
  )
}

export default orderSummary