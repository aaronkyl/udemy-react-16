import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
  salad: .5,
  cheese: .4,
  meat: 1.3,
  bacon: .7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    axios.get('https://react-burger-builder-29be2.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data})
        return true
      })
      .then(response => this.updatePurchaseState(this.state.ingredients))
      .catch(error => this.setState({error: true}))
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

  cancelPurchaseHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    const queryParams = []
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    }
    queryParams.push('price=' + this.state.totalPrice)
    this.props.history.push({
      pathname: '/checkout',
      search: queryParams.join('&')
    })
  }

  render() {
    const disabledInfo = {...this.state.ingredients}
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null
    let burger = this.state.error ? <p>Application Error!</p> : <Spinner />

    if (this.state.ingredients) {
      burger = (
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
        </Aux>
      )

      orderSummary = <OrderSummary 
        ingredients={this.state.ingredients} 
        cancelPurchasing={this.cancelPurchaseHandler} 
        continuePurchasing={this.purchaseContinueHandler}
        totalPrice={this.state.totalPrice}
      />
    }

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <Aux>
        {burger}
        <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler} loading={this.state.loading} >
          {orderSummary}
        </Modal>
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)