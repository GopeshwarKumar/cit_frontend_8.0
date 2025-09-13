import React, { useEffect, useMemo, useState } from 'react'
import { io } from 'socket.io-client';
import {AnimatePresence, motion} from 'framer-motion'

function ChatWithFreind() {
    
    // Initialize socket connection
    const socket =useMemo(() =>io(`${process.env.REACT_APP_SECRET_KEY}/`),[]);

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // const [data1, setdata1] = useState()

  const handleSend = () => {
    if (!message.trim()) {
      setError('Fields required.');
      return;
    }

    // Simulate sending
    // console.log('Notification sent:', { title, message });
    socket.emit('freindmessage',message)

    // Just push the message into messages array
    //  setMessages(prev => [...prev, message]);
    setError('');
    setMessage('');
  };

  // receiving User's co-ordinates from backend
  // socket.on("sentBack",(data)=>{
  //   setdata1(data)
  // })


  const [messages, setMessages] = useState([]);

useEffect(() => {
  socket.on("sentBack", (data) => {
    setMessages(prev => [...prev, data]);
  });

  return () => socket.off("sentBack");
}, []);

  return (
    <>
    <AnimatePresence>
    <motion.div title='Drag' initial={{y:100}} drag dragMomentum={false} className="w-[70vw] h-[40vh] p-6 bg-gradient-to-t from-[#5fb486] to-[#3c805c] shadow-md rounded-lg z-100">
<div className="hidescrollbar w-full h-[80%] overflow-y-scroll p-3 space-y-2">
  {messages.map((msg, index) => (
    <div key={index} className="flex justify-end">
      <div className="relative bg-blue-500 text-white text-[14px] px-4 py-2 rounded-xl max-w-xs shadow-md">
        <p>{msg}</p>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-blue-500"></div>
      </div>
    </div>
  ))}
</div>


      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

<div className='absolute bottom-0 p-2'>
        <div className='flex items-center gap-2'>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <input className="w-full px-4 py-2 text-[16px] border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button
        onClick={handleSend}
        className="bg-blue-600 hover:bg-blue-700 text-white text-[16px] px-5 py-1 rounded-md transition duration-200">Send</button>
      </div>

      
</div>
    </motion.div>
    </AnimatePresence>

    </>
  )
}

export default ChatWithFreind