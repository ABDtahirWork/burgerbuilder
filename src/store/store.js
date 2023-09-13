import { createSlice, configureStore } from '@reduxjs/toolkit'

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
}

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 0,
}

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    addIngredients(state, action) {
      state.ingredients[action.payload.ingredient] += action.payload.amount
      state.totalPrice = state.totalPrice + INGREDIENT_PRICES[action.payload.ingredient]
    },
    removeIngredients(state, action) {
      state.ingredients[action.payload.ingredient] -= action.payload.amount
      state.totalPrice = state.totalPrice - INGREDIENT_PRICES[action.payload.ingredient]
    },
  },
})

const store = configureStore({
  reducer: burgerSlice.reducer,
})

export const burgerActions = burgerSlice.actions
export default store
