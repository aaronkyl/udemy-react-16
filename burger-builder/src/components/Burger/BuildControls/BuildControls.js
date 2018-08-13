import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const buildControls = (props) => {
  const buildControlComponents = Object.keys(props.ingredients)
    .map(ingredient => (
      <BuildControl 
        key={ingredient} 
        type={ingredient} 
        label={ingredient.toUpperCase()} 
        more={props.addIngredient} 
        less={props.removeIngredient} 
        disabled={props.disabled[ingredient]}
      />
    ))
  
    return (
    <div className={classes.BuildControls}>
      {buildControlComponents}
    </div>
  )
}

export default buildControls