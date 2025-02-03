import React from 'react'
import Signup from './Component/Signup'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './Component/Login';
import Quiz from './Component/Quiz';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/Signup" element={<Signup />} />
      {/* <Route path="/Signup" element={} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/Quiz" element={<Quiz />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
