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
        more={props.more} 
        less={props.less} 
      />
    ))
  
    return (
    <div className={classes.BuildControls}>
      {buildControlComponents}
    </div>
  )
}

export default buildControls