import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { HiShoppingBag } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className='mb-[100px]'>
        <div className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat" >
        
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20   tracking-tight text-5xl font-bold text-purple-900">Futuristic <span className="text-white"> Clothes</span></h1>
      <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight">Happiness is the secret to all beauty.</p>
      <Button className=' bg-transparent group hover:hover-rounded-3xl duration-300 hover:outline-purple-500  text-white outline outline-offset-0 outline-1'>
      <HiShoppingBag  className="mr-2 h-6 w-6 scroll-m-20  group-hover:text-purple-500 group-hover:animate-bounce text-xl font-semibold tracking-tight " /> Shop Now
    </Button>
    </div>
  </div>
</div></div>
  )
}

export default Hero