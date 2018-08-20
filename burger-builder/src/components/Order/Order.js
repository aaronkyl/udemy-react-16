import React from 'react'
import classes from './Order.css'

const order = (props) => {
  const ingredients = []
  const ingredientStyle = {
    textTransform: 'capitalize',
    border: '1px solid #ccc',
    padding: '5px',
    margin: '0 5px'
  }
  for (let ingredientName in props.ingredients) {
    if (props.ingredients[ingredientName] > 0) {
      ingredients.push(
        <span key={ingredientName} style={ingredientStyle}>{ingredientName} ( {props.ingredients[ingredientName]} )</span>)
    }
  }
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredients}</p>
      <p>Price: <b>${props.price.toFixed(2)}</b></p>
    </div>
  )
}

export default order