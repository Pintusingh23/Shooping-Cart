import React from 'react'
import './NewsLetter.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewsLetter = () => {
  const handleSubscribe =()=>{
    toast.success("Congratulations! you have subscribed")
  }
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
