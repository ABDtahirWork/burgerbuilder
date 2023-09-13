import React from 'react'
import classes from './NavigationItems.module.css'
import { NavLink } from 'react-router-dom'

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <li className={classes.NavigationItem}>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Burger Builder
        </NavLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavLink
          to='/orders'
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Orders
        </NavLink>
      </li>
    </ul>
  )
}

export default NavigationItems
