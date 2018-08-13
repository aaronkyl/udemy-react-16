import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'

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
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(ingredient => ingredients[ingredient])
      .reduce((sum, el) => sum + el, 0)
    this.setState({purchasable: sum > 0})
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
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (ingredient) => {
    if(this.state.ingredients[ingredient]) {
      const oldCount = this.state.ingredients[ingredient]
      const newCount = oldCount - 1
      const updatedIngredients = {...this.state.ingredients}
      updatedIngredients[ingredient] = newCount
      const priceDeduction = INGREDIENT_PRICES[ingredient]
      const oldPrice = this.state.totalPrice
      const newPrice = oldPrice - priceDeduction
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      })
      this.updatePurchaseState(updatedIngredients)
    }
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  render() {
    const disabledInfo = {...this.state.ingredients}
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} purchasable={this.state.purchasable} />
        <BuildControls 
          ingredients={this.state.ingredients} 
          addIngredient={this.addIngredientHandler} 
          removeIngredient={this.removeIngredientHandler} 
          disabled={disabledInfo}
          price={this.state.totalPrice} 
          purchasable={this.state.purchasable}
          purchasing={this.purchaseHandler}
        />
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
      </Aux>
    )
  }
}

export default BurgerBuilder