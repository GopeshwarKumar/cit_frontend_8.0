import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {toast , ToastContainer} from 'react-toastify'

function AllQuestion() {

    const [questionlist, setquestionlist] = useState([])
    const [deletequestion, setdeletequestion] = useState()
    useEffect(()=>{
        axios.get('http://localhost:5000/getandshowquestion').then(res =>{
            setquestionlist(res.data)
        }).catch(er=>{

        })
    })
  return (
    <>
    <ToastContainer/>
    <h1 className='text-center font-bold'>All Questions List</h1>
    <div>
        {questionlist.map((e,x)=>{
            return <div key={x} className='bg-slate-800 mt-3 p-5'>
                <p>{e.question1}</p>
                <p>{e.option1}</p>
                <p>{e.option2}</p>
                <p>{e.option3}</p>
                <p>{e.option4}</p>
                <button onClick={async(w)=>{
                console.log(e.question1)
                setdeletequestion(e.question1)
                axios.post('http://localhost:5000/deletequestion',{deletequestion}).then(res=>{
                    // console.log(res)
                    if(res.data.status===200){
                        toast.success(res.data.message)
                    }
                }).catch(err=>{

                }).finally(final =>{

                })

                }} className='bg-red-600 px-3 rounded-sm text-[15px] '>Delete</button>
            </div>
        })}
    </div>
    </>
  )
}

export default AllQuestion