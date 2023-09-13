import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'

const CheckoutSummary = ({ ingredients, cancelHandler, continueHandler }) => {
  return (
    <div className={classes.checkoutsummary}>
      <h1>We Hope it Tastes Well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType='Danger' clicked={cancelHandler}>
        Cancel
      </Button>
      <Button btnType='Success' clicked={continueHandler}>
        Continue
      </Button>
    </div>
  )
}

export default CheckoutSummary
