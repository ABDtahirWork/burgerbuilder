import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Auxilary from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import errorHandaler from '../../hoc/errorHandaler/errorHandaler'

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
}

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  })

  const [totalPrice, setTotalPrice] = useState(0)
  const [purchaseable, setPurchaseable] = useState(false)
  const [purchasing, setPurchasing] = useState(false)
  const [loading] = useState(false)

  const navigate = useNavigate() // Access the navigation function

  useEffect(() => {
    // Check purchaseable whenever ingredients change
    const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0)
    setPurchaseable(sum > 0)
  }, [ingredients])

  const updateIngredient = (ingredient, amount) => {
    const updatedIngredients = { ...ingredients }
    updatedIngredients[ingredient] += amount
    const updatedPrice = totalPrice + INGREDIENT_PRICES[ingredient] * amount
    setIngredients(updatedIngredients)
    setTotalPrice(updatedPrice)
  }

  const addIngredient = (ingredient) => {
    updateIngredient(ingredient, 1)
  }

  const removeIngredient = (ingredient) => {
    if (ingredients[ingredient] > 0 && totalPrice > 0) {
      updateIngredient(ingredient, -1)
    }
  }

  const handlePurchasing = () => {
    setPurchasing((prevPurchasing) => !prevPurchasing)
  }

  const purchaseContinueHandler = () => {
    navigate('/checkout' , {state:{ingredients , totalPrice}})
  }

  const disabledInfo = { ...ingredients }
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  return (
    <Auxilary>
      <Modal show={purchasing} closeModal={handlePurchasing}>
        {loading ? (
          <Spinner />
        ) : (
          <OrderSummary
            ingredients={ingredients}
            cancelPurchase={handlePurchasing}
            continuePurchase={purchaseContinueHandler}
            totalPrice={totalPrice}
          />
        )}
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        price={totalPrice}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        disabled={disabledInfo}
        disableCheckout={!purchaseable}
        handlePurchasing={handlePurchasing}
      />
    </Auxilary>
  )
}

export default errorHandaler(BurgerBuilder, axios)
