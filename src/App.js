import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Routes, Route } from 'react-router-dom'
import ContactData from './containers/Checkout/ContactData/ContactData'
import Orders from './containers/Orders/Orders'

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path='/' element={<BurgerBuilder />} />
          <Route path='/checkout' element={<Checkout />}>
            <Route path='contact-data' element={<ContactData />} />
          </Route>
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </Layout>
    )
  }
}

export default App
