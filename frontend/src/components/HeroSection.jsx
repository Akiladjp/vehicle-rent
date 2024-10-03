import React from 'react'
import image1 from '../assets/heroImage1.png'
import image2 from '../assets/heroImage2.png'

export const HeroSection = () => {
  return (
    <div>
        <div className='bg-[#FFEA00] flex justify-between pt-48 pb-8 font-poppins'>
            <div>
                <img src={image1} alt="" className='w-[600px] transform transition-all duration-300 hover:scale-105' />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='text-[48px] font-extrabold'>Rent a Car or Earn with Yours</h2>
                <h1 className='text-[64px] font-black'>All in One Place!</h1>
            </div>
            <div>
            <img src={image2} alt="" className='w-[600px] mt-6 transform transition-all duration-300 hover:scale-105' />
            </div>
        </div>
    </div>
  )
}
