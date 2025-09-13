import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {toast , ToastContainer} from 'react-toastify'
import Loader from '../Components/Loader'

function AllQuestion() {

    const [questionlist, setquestionlist] = useState([])
    const [deletequestion, setdeletequestion] = useState()
    const [active, setactive] = useState(false)

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SECRET_KEY}/getandshowquestion`).then(res =>{
            setquestionlist(res.data)
        }).catch(er=>{
            toast.warn('Error found !')
        })
    },[deletequestion])
  return (
    <>
    <ToastContainer className={`text-[15px]`}/>
    <h1 className='text-center font-bold'>All Questions List</h1>
    <div>
        {questionlist.map((e,x)=>{
            return <div key={x} className='sm:text-[20px] vmd:text-[16px] mt-3 p-5'>
                <p>{x+1}. {e.question1}</p>
                <div className={`w-[200px] h-[200px]`}>
                <img src={e.questionImage} alt={e.questionImage}/></div>
                <p>{e.option1}</p>
                <p>{e.option2}</p>
                <p>{e.option3}</p>
                <p>{e.option4}</p>
                <button onClick={async(w)=>{
                console.log(e.question1)
                setactive(true)
                setdeletequestion(e.question1)
                axios.post(`${process.env.REACT_APP_SECRET_KEY}/deletequestion`,{deletequestion}).then(res=>{
                    console.log(res)
                    if(res.data.status===200 && res.data.message==='Question Deleted'){
                        toast.success(res.data.message)
                    }else{
                        toast.warn(res.data.message)
                    }
                }).catch(err=>{
                    setactive(false)
                }).finally(final =>{
                    setactive(false)
                })

                }} className='bg-red-600 px-3 hover:opacity-80 transition-all rounded-sm text-[15px] '>{active ? <Loader></Loader> :'Delete'}</button>
            </div>
        })}
    </div>
    </>
  )
}

export default AllQuestion