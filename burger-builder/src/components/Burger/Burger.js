import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  // create array of ingredients in the props.ingredients object, then
  // for each ingredient type create an empty array of length = number
  // of that ingredient type, then fill each ingredient-specific sub array
  // with that number of an ingredient, leading to an array of arrays
  // concat() allows for the merging of arrays to flatten out our array
  // of arrays
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, index) => {
        return <BurgerIngredient key={ingredient + index} type={ingredient}/> 
      })
    })
    .reduce((acc, el) => acc.concat(el), [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger