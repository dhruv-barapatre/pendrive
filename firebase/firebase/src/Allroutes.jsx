import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import Privatepage from './Componets/Privatepage'
import Addproduct from './pages/Addproduct'


const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/products' element={
          <Privatepage>
            <ProductPage />
          </Privatepage>
        }></Route>
        <Route path='/addproducts' element={
          <Privatepage>
            <Addproduct />
          </Privatepage>
        }></Route>
      </Routes>
    </>
  )
}

export default Allroutes