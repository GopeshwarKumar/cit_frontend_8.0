import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
// import { AuthenticationContext } from '../Auth/AuthProvide'

function Profile() {
  const navigate=useNavigate()
  // const profileAuth =useContext(AuthenticationContext)

  const handleLogout = () => {
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("token")
    // window.location.reload();
    navigate("/login")
  }

  return (
    <div className="w-screen h-screen bg-slate-800">
      <Navbar />
        <div className='w-screen flex items-center justify-center gap-[2px] lg:text-[60px] sm:text-[45px] mb:text-[35px] text-[35px] text-center font-extrabold cursor-pointer'>
          <div className='hover:-translate-y-2  transition-all'>P</div>
        <div className='hover:translate-y-2  transition-all'>r</div>
        <div className='hover:translate-y-2 hover:rotate-2 transition-all'>o</div>
        <div className='hover:-translate-y-2 hover:rotate-2 transition-all'>f</div>
        <div className='hover:-translate-y-2  transition-all'>i</div>
        <div className='hover:translate-y-2  transition-all'>l</div>
        <div className='hover:translate-y-2 hover:-rotate-2 transition-all'>e</div>
        </div>

      <div className="flex justify-center items-center mt-[5%]  ">
        <div>
          <img src='/assets/citcartoon.svg' alt='lost' loading='lazy' className='sm:block vmd:hidden p-5'/>
        </div>
        <div className="shadow-xl shadow-slate-900 rounded-lg p-10 w-full max-w-md">
          <div className="space-y-4">
            <p className="text-xl "><mark className='rounded-md p-1'>Name</mark> {localStorage.getItem("name")}</p>
            <p className="text-xl"><mark className='rounded-md bg-pink-600 p-1'>Email</mark> {localStorage.getItem("email")}</p>
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
