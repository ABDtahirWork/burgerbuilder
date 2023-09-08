import React, { useState } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

const Checkout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [ingredients] = useState(
    location.state ? location.state.ingredients : {}
  )
  const [totalPrice] = useState(location.state ? location.state.totalPrice : 0)

  const cancelHandler = () => {
    navigate(-1)
  }

  const continueHandler = () => {
    navigate('/checkout/contact-data', { replace: true })
  }

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        cancelHandler={cancelHandler}
        continueHandler={continueHandler}
      />
      <Outlet context={{ ingredients, totalPrice }} />
    </div>
  )
}

export default Checkout
