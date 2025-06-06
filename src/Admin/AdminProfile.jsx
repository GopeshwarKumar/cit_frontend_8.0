import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminProfile() {

  const navigate=useNavigate()
      const handleLogout = () => {
        localStorage.removeItem("Adminname")
        localStorage.removeItem("Adminemail")
        localStorage.removeItem("Admintoken")
        navigate("/adminloginpage")
        // window.location.reload();
      }
  return (
    <>
    <div className='w-screen flex items-center justify-center gap-[10px] lg:text-[60px] sm:text-[45px] mb:text-[35px] text-[35px] text-center font-extrabold cursor-pointer'>
      
      <div className='flex items-center'>
        <div className='hover:-translate-y-2  transition-all'>A</div>
        <div className='hover:translate-y-2  transition-all'>d</div>
        <div className='hover:translate-y-2 hover:rotate-2 transition-all'>m</div>
        <div className='hover:-translate-y-2 hover:rotate-2 transition-all'>i</div>
        <div className='hover:-translate-y-2  transition-all'>n</div>
        </div>

        <div className='flex items-center'>
          <div className='hover:-translate-y-2  transition-all'>P</div>
        <div className='hover:translate-y-2  transition-all'>r</div>
        <div className='hover:translate-y-2 hover:rotate-2 transition-all'>o</div>
        <div className='hover:-translate-y-2 hover:rotate-2 transition-all'>f</div>
        <div className='hover:-translate-y-2  transition-all'>i</div>
        <div className='hover:translate-y-2  transition-all'>l</div>
        <div className='hover:translate-y-2 hover:-rotate-2 transition-all'>e</div>
        </div>

        </div>

      <div className="flex justify-center items-center mt-[5%] p-5 ">
        <div>
          <img src='/assets/citcartoon.svg' alt='lost' loading='lazy' className='sm:block vmd:hidden p-5'/>
        </div>
        <div className="shadow-xl shadow-slate-900 rounded-lg p-10 w-full max-w-md">
          <div className="space-y-4">
            <p className="text-xl "><mark className='rounded-md p-1'>Name</mark> {localStorage.getItem("Adminname")}</p>
            <p className="text-xl"><mark className='rounded-md bg-pink-600 p-1'>Email</mark> {localStorage.getItem("Adminemail")}</p>
          </div>
          <button 
            onClick={handleLogout} 
            className="w-full mt-6 py-2 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition duration-300">
            Log Out
          </button>
        </div>
      </div>
    </>
  )
}

export default AdminProfile