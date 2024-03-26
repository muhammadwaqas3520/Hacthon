import React from 'react'

function Promotion() {
  return (
    <div className='mb-[100px] mt-[100px]'>
    {/* Heading */}
    <div className="text-center mb-10">
    <h1 className=" scroll-m-20 text-lg lg:text-xl font-bold tracking-tight title-font text-gray-900 mb-4 capitalize"> Our Promotions    </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex" /> 
        </div>
        </div>

  {/*promotions starts*/}
<div className=' '>
<div className='grid gap-4 grid-cols-1 lg:grid-cols-2  '>
    {/* 1-child */}
    <div className="hero h-[25rem]  promo-1" >
  <div className="hero-overlay bg-opacity-00"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight uppercase">upto <span className="text-purple-500 text-6xl">70% </span> off</h1>
      <p className="mb-5 scroll-m-20 text-xl font-baseline tracking-tight uppercase">flash sale is on get upto 70% off</p>
    
    </div>
  </div>
</div>
    {/* 2-child */}
    <div className="hero h-[25rem]  promo-2" >
  <div className="hero-overlay bg-opacity-00"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight uppercase">upto <span className="text-purple-500 text-6xl">20% </span>off </h1>
      <p className="mb-5 scroll-m-20 text-xl font-baseline tracking-tight uppercase">flash sale is on get upto 20% off</p>
    
    </div>
  </div>
</div>
  </div>
  </div>  
  </div>
  

  )
}

export default Promotion