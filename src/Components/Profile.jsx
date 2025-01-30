import React, { useContext } from 'react'
import { AuthenticationContext } from '../Auth/AuthProvide'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate=useNavigate()
  const profileAuth = useContext(AuthenticationContext)
  console.log(profileAuth.username)
  const name=localStorage.getItem("userName")
  const userNmaeEmail=localStorage.getItem("userNmaeEmail")

  const handleLogout = () => {
    localStorage.clear()
    // window.location.reload();
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-slate-800">
      <Navbar />
      <div className="flex justify-center items-center py-10">
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Profile</h1>
          <div className="space-y-4">
            <p className="text-xl text-gray-800"><strong>Name:</strong> {profileAuth.username}{name}</p>
            <p className="text-xl text-gray-800"><strong>Email:</strong> {profileAuth.useremail}{userNmaeEmail}</p>
            {/* <p className="text-xl text-gray-800"><strong>Phone:</strong> {profileAuth.userphone || 'N/A'}</p>
            <p className="text-xl text-gray-800"><strong>Address:</strong> {profileAuth.useraddress || 'N/A'}</p> */}
          </div>
          <button 
            onClick={handleLogout} 
            className="w-full mt-6 py-2 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition duration-300">
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
