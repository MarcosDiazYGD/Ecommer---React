import { configureStore } from '@reduxjs/toolkit'
import { UNSAFE_getPathContributingMatches } from '@remix-run/router'
import cartSlice from './slices/cart.slice'
import loadingScreenSlice from './slices/loadingScreen.slice'
import productsSlice from './slices/Products.slice'
import purchasesSlice from './slices/Purchases.slice'

export default configureStore({
  reducer: {
    products: productsSlice,
    loadingScreen: loadingScreenSlice,
    purchases: purchasesSlice,
    cart: cartSlice
  } 
})
