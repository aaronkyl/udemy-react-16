import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: .5,
  cheese: .4,
  meat: 1.3,
  bacon: .7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = (ingredient) => {
    const oldCount = this.state.ingredients[ingredient]
    const newCount = oldCount + 1
    const updatedIngredients = {...this.state.ingredients}
    updatedIngredients[ingredient] = newCount
    const priceAdditions = INGREDIENT_PRICES[ingredient]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAdditions
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
  }

  removeIngredientHandler = (ingredient) => {
    if(this.state.ingredients[ingredient]) {
      const oldCount = this.state.ingredients[ingredient]
      const newCount = oldCount - 1
      const updatedIngredients = {...this.state.ingredients}
      updatedIngredients[ingredient] = newCount
      const priceAdditions = INGREDIENT_PRICES[ingredient]
      const oldPrice = this.state.totalPrice
      const newPrice = oldPrice - priceAdditions
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      })
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredients={this.state.ingredients} 
          more={this.addIngredientHandler} 
          less={this.removeIngredientHandler} />
      </Aux>
    )
  }
}

export default BurgerBuilder