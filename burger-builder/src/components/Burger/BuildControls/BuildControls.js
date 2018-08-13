import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import Aux from '../../../hoc/Aux'
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
      <Aux>
        <p className={classes.Price}>Current Price: <b>${props.price.toFixed(2)}</b></p>
        <div className={classes.BuildControls}>
          {buildControlComponents}
          <button className={classes.OrderButton} disabled={!props.purchasable}>PLACE ORDER</button>
        </div>
      </Aux>
  )
}

export default buildControls