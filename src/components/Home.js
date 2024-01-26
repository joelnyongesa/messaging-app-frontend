import React from 'react'
import logo from "../img/branch logo.png"

function Home() {
  return (
    <div className='flex flex-col justify-center items-center py-2'>
        <img src={logo} alt='Branch Logo' className='pb-10'/>
        <h1 className='py-5 text-4xl font-extrabold'>Here to Serve You</h1>
        <p className='py-2'>Do you have any questions or issues you want addressed?</p>
        <button className='bg-black text-white border border-black px-5 py-2 hover:bg-white hover:text-black font-medium'>Talk to our agents</button>
        
        <p className='py-10'>Or</p>

        <p className='py-2'>Are you a customer care agent?</p>
        <button className='bg-black text-white border border-black px-5 py-2 hover:bg-white hover:text-black font-medium'>Click here</button>
    </div>
  )
}

export default Home