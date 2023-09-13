import React, { useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import { useNavigate, useOutletContext } from 'react-router-dom'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

const ContactData = () => {
  const options = [
    { value: 'fastest', displayValue: 'Fastest' },
    { value: 'cheapest', displayValue: 'Cheapest' },
  ]
  const { ingredients, totalPrice } = useOutletContext()
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('example@gmail.com')
  const [address, setAddress] = useState({
    street: '',
    postal: '',
  })
  const [deliveryMode, setDeliveryMode] = useState(options[0].value)
  const naviagte = useNavigate()

  const orderHandler = (event) => {
    event.preventDefault()
    setLoading(true)
    const order = {
      ingredients: ingredients,
      price: totalPrice,
      customer: {
        name: name,
        email: email,
        address: address,
        deliveryMode: deliveryMode,
      },
    }
    console.log('Order:  ', order)

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

  const updateStreet = (newStreet) => {
    setAddress((prevState) => ({
      ...prevState,
      street: newStreet,
    }))
  }

  const updatePostal = (newPostal) => {
    setAddress((prevState) => ({
      ...prevState,
      postal: newPostal,
    }))
  }

  const inputChangeHandaler = (event, inputId) => {
    switch (inputId) {
      case 'name':
        setName(event.target.value)
        break
      case 'email':
        setEmail(event.target.value)
        break
      case 'street':
        updateStreet(event.target.value)
        break
      case 'postalCode':
        updatePostal(event.target.value)
        break
      case 'deliveryMode':
        setDeliveryMode(event.target.value)
        break
      default:
        break
    }
  }

  return (
    <div className={classes.contactdata}>
      <h4>Enter Your Contact Data</h4>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={orderHandler}>
          <Input
            id='name'
            type='text'
            label='Name'
            placeholder='Your Name'
            value={name}
            changed={inputChangeHandaler}
          />
          <Input
            id='email'
            type='email'
            label='Email'
            placeholder='Your Email'
            value={email}
            changed={inputChangeHandaler}
          />
          <Input
            id='street'
            type='text'
            label='Street Name'
            placeholder='Street'
            value={address.street}
            changed={inputChangeHandaler}
          />
          <Input
            id='postalCode'
            type='text'
            label='Postal Code'
            placeholder='Postal Code'
            value={address.postal}
            changed={inputChangeHandaler}
          />
          <Input
            id='deliveryMode'
            inputType='select'
            label='Delivery Mode'
            options={options}
            value={deliveryMode}
            changed={inputChangeHandaler}
          />
          <Button btnType='Success' value='Fastest'>
            Order
          </Button>
        </form>
      )}
    </div>
  )
}

export default ContactData
