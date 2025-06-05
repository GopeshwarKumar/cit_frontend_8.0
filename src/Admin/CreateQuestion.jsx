import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Loader from '../Components/Loader'

function CreateQuestion() {
    const [question1, setquestion1 ] = useState()
    const [option1, setoption1 ] = useState()
    const [option2, setoption2 ] = useState()
    const [option3, setoption3 ] = useState()
    const [option4, setoption4 ] = useState()
    const [answer, setanswer] = useState()
    const [active, setactive] = useState(false)
    const [message, setmessage] = useState()

    const SaveQuestions=async(e)=>{
        e.preventDefault()
        setactive(true)

        axios.post('http://localhost:5000/createquestion',{question1,option1,option2,option3,option4,answer}).then(res=>{
            console.log(res)
            setmessage(res.data.message)
        }).catch(err=>{

        }).finally(final =>{
            setactive(false)
            setanswer("")
            setoption1("")
            setoption2("")
            setoption3("")
            setoption4("")
            setquestion1("")
        })

    }
  return (
    <>
    <form onSubmit={SaveQuestions} className="max-w-3xl mx-auto p-8 bg-slate-900 rounded-lg shadow-xl space-y-6">
  <h2 className="text-2xl font-bold text-yellow-300 text-center">Create New Question</h2>

  {/* Question TextArea */}
  <div>
    <label className="block text-yellow-200 mb-1 font-medium">Question</label>
    <textarea
      value={question1}
      rows={3}
      typeof="text"
      placeholder="Enter the question"
      onChange={(e) => setquestion1(e.target.value)}
      className="w-full text-black rounded-md p-3 focus:outline-none border-b-4 border-transparent focus:border-yellow-300 transition-all resize-none"
    />
  </div>

  {/* Options */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block text-yellow-200 mb-1 font-medium">Option A</label>
      <input
        value={option1}
        onChange={(e) => setoption1(e.target.value)}
        placeholder="Option A"
        className="w-full text-black rounded-md p-2 focus:outline-none border-b-4 border-transparent focus:border-yellow-300 transition-all"
      />
    </div>
    <div>
      <label className="block text-yellow-200 mb-1 font-medium">Option B</label>
      <input
        value={option2}
        onChange={(e) => setoption2(e.target.value)}
        placeholder="Option B"
        className="w-full text-black rounded-md p-2 focus:outline-none border-b-4 border-transparent focus:border-yellow-300 transition-all"
      />
    </div>
    <div>
      <label className="block text-yellow-200 mb-1 font-medium">Option C</label>
      <input
        value={option3}
        onChange={(e) => setoption3(e.target.value)}
        placeholder="Option C"
        className="w-full text-black rounded-md p-2 focus:outline-none border-b-4 border-transparent focus:border-yellow-300 transition-all"
      />
    </div>
    <div>
      <label className="block text-yellow-200 mb-1 font-medium">Option D</label>
      <input
        value={option4}
        onChange={(e) => setoption4(e.target.value)}
        placeholder="Option D"
        className="w-full text-black rounded-md p-2 focus:outline-none border-b-4 border-transparent focus:border-yellow-300 transition-all"
      />
    </div>
  </div>

  {/* Correct Answer */}
  <div>
    <label className="block text-yellow-200 mb-1 font-medium">Correct Answer</label>
    <input
      value={answer}
      onChange={(e) => setanswer(e.target.value)}
      placeholder="Type the correct option (e.g., Option A)"
      className="w-full text-black rounded-md p-2 focus:outline-none border-b-4 border-transparent focus:border-green-400 transition-all"
    />
  </div>

  {/* Submit Button & Loader */}
  <div className="flex justify-center">
    {active === false ? (
      <input
        type="submit"
        value="Save Question"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md cursor-pointer transition duration-200"
      />
    ) : (
      <Loader />
    )}
  </div>

  {/* Message */}
  {message && (
    <p className={`text-center font-semibold text-[18px] ${message === 'Question saved ...' ? 'text-green-400' : 'text-red-400'}`}>
      {message}
    </p>
  )}
</form>

    </>
  )
}

export default CreateQuestion