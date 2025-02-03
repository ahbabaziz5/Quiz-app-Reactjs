import React,{ useState } from "react"
import { Link } from "react-router"
import { useAuth } from "../Context/context"


const Login = () => {
  const{login,}=useAuth();
  // const [isLogin, setIsLogin] = useState(true)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
//   const{email,passowrd}=userData
// console.log()
  const handleSubmit = async(e) => {
    e.preventDefault()
   try{
await login(userData.email,userData.password)
console.log("user Login Sucessfully")
window.location.href="/Quiz"
   }catch(e){
console.log("user not found")
   }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
         
    {/* <Link tQuizo="/">       */}
    <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <button  className="text-sm text-indigo-600 hover:text-indigo-500">
             Need an account? <Link to="/Signup">Sign Up</Link> 
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login

