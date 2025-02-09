import React from 'react'
import Signup from './Component/Signup'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './Component/Login';
import Quiz from './Component/Quiz';
import { useAuth } from './Context/context';
import Result from './Component/Result';
import Error from './Component/Error';
const App = () => {
  const { user } = useAuth();
  console.log(user)
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/Signup" element={<Signup />} />
        {/* <Route path="/Signup" element={} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/Result" element={<Result />} />
        {user ? (
        <Route path="/Quiz" element={<Quiz />} />
      ) : (
        <Route path="*" element={< Error/>} />
      )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
