import React from 'react'
import classes from './Order.css'

const order = (props) => {
  const ingredients = []
  for (let key in props.ingredients) {
    if (props.ingredients[key] > 0) {
      ingredients.push(key + ' (' + props.ingredients[key] + ')')
    }
  }
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredients.join(', ')}</p>
      <p>Price: <b>${props.price.toFixed(2)}</b></p>
    </div>
  )
}

export default order