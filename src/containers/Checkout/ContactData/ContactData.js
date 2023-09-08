import React, { useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import { useNavigate, useOutletContext } from 'react-router-dom'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

const ContactData = () => {
  const { ingredients, totalPrice } = useOutletContext()
  const [loading, setLoading] = useState(false)
  const naviagte = useNavigate()

  const orderHandler = (event) => {
    event.preventDefault()
    console.log('Ingredients:  ', ingredients, ' Total Price: ', totalPrice)

    setLoading(true)
    const order = {
      ingredients: ingredients,
      price: totalPrice,
      customer: {
        name: 'Abd',
        address: {
          street: 'dha Y block',
          city: 'lahore',
        },
        email: 'test@gmail.com',
      },
    }
    axios
      .post('/orders.json', order)
      .then((response) => {
        console.log(response)
        setLoading(false)
        naviagte('/orders')
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <div className={classes.contactdata}>
      <h4>Enter Your Contact Data</h4>
      {loading ? (
        <Spinner />
      ) : (
        <form>
          <input type='text' name='name' placeholder='Your Name' />
          <input type='email' name='email' placeholder='Your Email' />
          <input type='text' name='street' placeholder='Street' />
          <input type='text' name='postal' placeholder='Postal Code' />
          <Button btnType='Success' clicked={orderHandler}>
            Order
          </Button>
        </form>
      )}
    </div>
  )
}

export default ContactData
