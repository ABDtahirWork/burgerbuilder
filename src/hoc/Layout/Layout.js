import React, { Component } from 'react'
import Auxilary from '../Auxilary'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  toggleDrawerHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    return (
      <Auxilary>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <Toolbar toggleDrawer={this.toggleDrawerHandler} />
        <main className={classes.content}>{this.props.children}</main>
      </Auxilary>
    )
  }
}

export default Layout
