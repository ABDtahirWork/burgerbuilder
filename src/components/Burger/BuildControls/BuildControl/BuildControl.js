import React from 'react'
import classes from './BuildControl.module.css'

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={() => props.removeIngredient(props.type)}
        disabled={props.disabled}
      >
        Less
      </button>
      <button
        className={classes.More}
        onClick={() => props.addIngredient(props.type)}
      >
        More
      </button>
    </div>
  )
}

export default BuildControl
