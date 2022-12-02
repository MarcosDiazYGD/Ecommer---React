import { useState } from 'react'
import { Container } from 'react-bootstrap'
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
import Signup from './pages/Signup'

function App() {
  const isLoading = useSelector(state => state.loadingScreen)

  return (

    <div className="App">
      <HashRouter >
        <NavBar />
        {isLoading && <LoadingScreen />}
        <Container className=''>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/purchases' element={<Purchases />} />
            </Route>
          </Routes>
        </Container>
      </HashRouter>
    </div>
  )
}

export default App
