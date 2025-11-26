import React from 'react'
import { Route, Routes } from "react-router"
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App