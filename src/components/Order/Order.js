import React from 'react'
import classes from './Order.module.css'

const Order = ({ ingredients, price }) => {
  const ingredientsList = []

  for (let ingredientName in ingredients) {
    ingredientsList.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
    })
  }

  return (
    <div className={classes.order}>
      {ingredientsList.map((ingredient) => (
        <span
          style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px',
          }}
          key={ingredient.name}
        >
          {ingredient.name} ({ingredient.amount})
        </span>
      ))}
      <p>
        Price: <strong>USD {Number.parseFloat(price).toFixed(2)}</strong>
      </p>
    </div>
  )
}

export default Order
