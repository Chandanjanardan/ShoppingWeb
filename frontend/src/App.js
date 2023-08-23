import React from 'react'
import Login from "./component/Login"
import { BrowserRouter,Routes,Route, RouterProvider } from 'react-router-dom'
import Landing from './component/Landing'
import Product from './component/Product'
import Registration from './component/Registration'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Landing/>}></Route>
      <Route path='/login-user' element={<Login/>}/>
      <Route path='/add-user' element={<Registration/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App