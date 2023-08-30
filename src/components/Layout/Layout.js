import React from 'react'
import Auxilary from '../../hoc/Auxilary'
import classes from './Layout.module.css'

const Layout = (props) => {
  return (
    <Auxilary>
      <div>Toolbar , SideDrawer , Backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </Auxilary>
  )
}

export default Layout
