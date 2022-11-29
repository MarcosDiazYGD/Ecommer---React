import { useState } from 'react'
import { useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import NavBar from './components/NavBar'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Purchases from './pages/Purchases'

function App() {
  const isLoading = useSelector(state => state.loadingScreen)

  return (

    <div className="App">
      <HashRouter >
        <NavBar />
        {isLoading && <LoadingScreen />}

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ProductDetail />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/purchases' element={<Purchases />} />
          </Route>


        </Routes>




      </HashRouter>
    </div>
  )
}

export default App
