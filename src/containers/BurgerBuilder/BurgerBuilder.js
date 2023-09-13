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
import { useDispatch, useSelector } from 'react-redux'
import { burgerActions } from '../../store/store'

const BurgerBuilder = () => {
  const dispatch = useDispatch()
  const ingredients = useSelector((state) => state.ingredients)
  const totalPrice = useSelector((state) => state.totalPrice)
  console.log('redux ingredients: ', ingredients)
  const [purchaseable, setPurchaseable] = useState(false)
  const [purchasing, setPurchasing] = useState(false)
  const [loading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0)
    setPurchaseable(sum > 0)
  }, [ingredients])


  const addIngredient = (ingredient) => {
    dispatch(burgerActions.addIngredients({ ingredient, amount: 1 }))
  }

  const removeIngredient = (ingredient) => {
    if (ingredients[ingredient] > 0 && totalPrice > 0) {
      dispatch(burgerActions.removeIngredients({ ingredient, amount: 1 }))
    } 
  }

  const handlePurchasing = () => {
    setPurchasing((prevPurchasing) => !prevPurchasing)
  }

  const purchaseContinueHandler = () => {
    navigate('/checkout')
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
