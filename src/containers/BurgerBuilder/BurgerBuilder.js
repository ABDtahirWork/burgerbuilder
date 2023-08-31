import React, { Component } from 'react'
import Auxilary from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
}

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchaseable: false,
    purchasing: false
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ingredients !== this.state.ingredients) {
      this.updatePurchaseableState(this.state.ingredients)
    }
  }

  updatePurchaseableState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)

    this.setState({ purchaseable: sum > 0 })
  }

  addIngredient = (ingredient) => {
    this.setState((prevState) => {
      const updatedIngredients = { ...prevState.ingredients }
      updatedIngredients[ingredient] += 1
      const updatedPrice = prevState.totalPrice + INGREDIENT_PRICES[ingredient]
      return { ingredients: updatedIngredients, totalPrice: updatedPrice }
    })
  }

  removeIngredient = (ingredient) => {
    this.setState((prevState) => {
      const updatedIngredients = { ...prevState.ingredients }
      let updatedPrice = prevState.totalPrice
      if (updatedIngredients[ingredient] > 0 && prevState.totalPrice > 0) {
        updatedIngredients[ingredient] -= 1
        updatedPrice -= INGREDIENT_PRICES[ingredient]
      }
      updatedPrice = parseFloat(updatedPrice.toFixed(2))
      return { ingredients: updatedIngredients, totalPrice: updatedPrice}
    })
  }

  handlePurchasing = () => {
    this.setState((prevState) => ({purchasing: !prevState.purchasing}))
  }

  purchaseContinueHandaler = () => {
    alert("You can Continue")
  }

  render() {
    const disabaledInfo = {
      ...this.state.ingredients,
    }
    for (let key in disabaledInfo) {
      disabaledInfo[key] = disabaledInfo[key] <= 0
    }
    return (
      <Auxilary>
        <Modal show={this.state.purchasing} closeModal={this.handlePurchasing}>
          <OrderSummary ingredients={this.state.ingredients} cancelPurchase={this.handlePurchasing} continuePurchase={this.purchaseContinueHandaler} totalPrice={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          disabled={disabaledInfo}
          diableCheckout={!this.state.purchaseable}
          handlePurchasing={this.handlePurchasing}
        />
      </Auxilary>
    )
  }
}

export default BurgerBuilder
