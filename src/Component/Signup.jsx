import React,{ useState } from "react"
import { Link } from "react-router"
import { useAuth } from "../Context/context"

const Signup = () => {
  const {register}=useAuth();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rollNo: "",
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const {firstName,lastName,email,password,confirmPassword,rollNo} =userData


  const validateForm = () => {
    const newErrors = {}
    if (!userData.firstName) newErrors.firstName = "First name is required"
    if (!userData.lastName) newErrors.lastName = "Last name is required"
    if (!userData.email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(userData.email)) newErrors.email = "Email is invalid"
    if (!userData.password) newErrors.password = "Password is required"
    else if (userData.password.length < 6) newErrors.password = "Password must be at least 6 characters"
    if (userData.password !== userData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"
    if (!userData.rollNo) newErrors.rollNo = "Roll number is required"
    return newErrors
  }

  const handleSubmit =async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      console.log("Signup data:", userData)
      // Implement signup logic here
      // For example: sendSignupRequest(userData);
    }

   try{
    await register(email,password,{firstName,lastName,confirmPassword,rollNo})
    console.log("user added Sucessfully")
    setUserData(" ")
  }catch(e){
    console.log("user not added",e)
    
   }
   
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
          </div>
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
          </div>
          <div>
            <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700">
              Roll Number
            </label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              value={userData.rollNo}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.rollNo && <p className="mt-1 text-xs text-red-500">{errors.rollNo}</p>}
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
          <div className="mt-4 text-center">
                   <button  className="text-sm text-indigo-600 hover:text-indigo-500">
                      Already have an account? <Link  to="/">Login</Link> 
                   </button>
                 </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
