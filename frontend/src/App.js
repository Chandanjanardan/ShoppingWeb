import React from 'react'
import Login from "./component/Login"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='login-user' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App