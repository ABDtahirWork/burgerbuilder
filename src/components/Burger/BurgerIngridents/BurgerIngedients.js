import React from 'react'
import classes from './BurgerIngridents.module.css'
import PropTypes from 'prop-types'

const BurgerIngedients = (props) => {
  let ingrident = null

  switch (props.type) {
    case 'bread-bottom':
      ingrident = <div className={classes.BreadBottom}></div>
      break
    case 'bread-middle':
      ingrident = <div className={classes.BreadMiddle}></div>
      break
    case 'bread-top':
      ingrident = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      )
      break
    case 'meat':
      ingrident = <div className={classes.Meat}></div>
      break
    case 'cheese':
      ingrident = <div className={classes.Cheese}></div>
      break
    case 'bacon':
      ingrident = <div className={classes.Bacon}></div>
      break
    case 'salad':
      ingrident = <div className={classes.Salad}></div>
      break
    default:
      ingrident = null
  }
  return ingrident
}

BurgerIngedients.propTypes = {
  type: PropTypes.string.isRequired,
}

export default BurgerIngedients
