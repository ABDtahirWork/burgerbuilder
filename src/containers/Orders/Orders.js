import React, { useEffect, useState } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import errorHandaler from '../../hoc/errorHandaler/errorHandaler'
import Spinner from '../../components/UI/Spinner/Spinner'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('/orders.json')
      .then((res) => {
        const fetchedOrders = []
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          })
        }
        setOrders(fetchedOrders)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [])
 
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))
      )}
    </div>
  )
}

export default errorHandaler(Orders, axios)
