import React from 'react'
import BurgerIngedients from './BurgerIngridents/BurgerIngedients'
import classes from './Burger.module.css'

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngedients key={igKey + i} type={igKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Start Adding Ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngedients type='bread-top' />
      {transformedIngredients}
      <BurgerIngedients type='bread-bottom' />
    </div>
  )
}

export default Burger
