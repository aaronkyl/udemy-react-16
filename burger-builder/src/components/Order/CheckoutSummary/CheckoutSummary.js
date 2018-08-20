import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes good!</h1>
      <div style={{width: '300px', margin: 'auto'}}>
        <Burger ingredients={{salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }} />
      </div>
      <Button 
        btnType='Danger' 
        clicked>CANCEL</Button>
      <Button 
        btnType='Success'
        clicked>CONTINUE</Button>
    </div>
  )
}

export default checkoutSummary