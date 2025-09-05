import React, { useMemo, useState } from 'react'
import { io } from 'socket.io-client';

function AdminNotification() {
    
    // Initialize socket connection
    const socket =useMemo(() =>io("http://localhost:5000/"),[]);

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [data1, setdata1] = useState()
    const [data2, setdata2] = useState()

  const handleSend = () => {
    // if (!title.trim() || !message.trim()) {
    //   setError('Both fields are required.');
    //   setSuccess('');
    //   return;
    // }

    // Simulate sending
    // console.log('Notification sent:', { title, message });
    socket.emit('message',{ title, message })

    setSuccess('Notification sent successfully!');
    setError('');
    setTitle('');
    setMessage('');
  };

    // receiving User's co-ordinates from backend
  socket.on("Backlatitude",(data)=>{
    console.log(data.title)
    setdata1(data.title)
    console.log(data.message)
    setdata2(data.message)
  })
  return (
    <>{data1}{data2}
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Send Notification</h2>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Enter notification title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Enter notification message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button
        onClick={handleSend}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-200"
      >
        Send Notification
      </button>
    </div>

    </>
  )
}

export default AdminNotification