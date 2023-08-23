import React from 'react'
import Login from "./component/Login"
import { BrowserRouter,Routes,Route, RouterProvider } from 'react-router-dom'
import Landing from './component/Landing'
import Product from './component/Product'
// import Zero from './component/Zero'
import Registration from './component/Registration'
import Cart from './component/Cart'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Landing/>}></Route>
   
      <Route path='/login-user' element={<Login/>}/>
      <Route path='/add-user' element={<Registration/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/viewcart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App