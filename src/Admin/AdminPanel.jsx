import React, { lazy, Suspense } from 'react'
import LoadingPage from '../LoadingPage'
import AdminProfile from './AdminProfile'
import { useNavigate } from 'react-router-dom'
import AdminLogin from './AdminLogin'


const CreateQuestion=lazy(()=>(import('../Admin/CreateQuestion')))
const AllQuestion=lazy(()=>(import('../Admin/AllQuestion')))

function AdminPanel() {

  const navigate=useNavigate()
  const adminToken=localStorage.getItem('Admintoken')
  if(!adminToken){
    navigate('/adminloginpage')
}
  return (
    <>
    <Suspense fallback={<LoadingPage/>}>
    {adminToken ? <AdminProfile/> :<AdminLogin/>}
    {adminToken ? <CreateQuestion/> :<AdminLogin/>}
    {adminToken ? <AllQuestion/> :<AdminLogin/>}
    </Suspense>
    </>
  )
}

export default AdminPanel