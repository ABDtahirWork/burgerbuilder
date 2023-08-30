import React from 'react'
import Auxilary from '../../../hoc/Auxilary'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    )
  })
  return (
    <Auxilary>
      <h3>Your Order</h3>
      <p>A Delicous Burger with following Ingredients: </p>
      <ul>{ingredientsSummary}</ul>
      <p>Click to Continue</p>
      <Button btnType='Danger' clicked={props.cancelPurchase}>
        Cancel
      </Button>
      <Button btnType='Success' clicked={props.continuePurchase}>
        Continue
      </Button>
    </Auxilary>
  )
}

export default OrderSummary
