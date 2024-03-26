import React from 'react'
import Image from 'next/image'
const Services = () => {
  return (
    
     <section className="text-gray-900 body-font mb-[100px] mt-[100px]">
    {/* Main div */}
    <div className="container px-5  mx-auto">
     {/* Services heading div */}
      <div className="text-center mb-10">
        <h1 className=" scroll-m-20 text-lg lg:text-xl font-bold tracking-tight  title-font text-gray-900 mb-4 capitalize">
          Our Services
        </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex" />
        </div>
      </div>
  {/* services div */}
 
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
  {/* Delivery */}      
        <div className=" group p-4  mx-auto md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 line-clamp-2">
            <Image 
            src= {require("../../public/pictures/delivery.png")}
            alt="Deliveryvan"
            className='w-20 h-20'/>
          </div>
          <div className="flex-grow ">
            <h2 className="scroll-m-20 text-base group-hover:text-purple-500 duration-300  mb-2 lg:text-xl font-semibold tracking-tight  title-font text-gray-900  capitalize ">
              Free Home Delivery
            </h2>
            <p className="scroll-m-20 text-base  line-clamp-2 duration-300  font-baseline tracking-tight   text-gray-900">

            Free Delivery on order Above $1000.
            </p>
            {/* image */}
          </div>
        </div>
    {/* 24/7 services */}
     <div className="group p-4 mx-auto  md:w-1/3 flex flex-col text-center items-center">
        
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-base-100 text-purple-500 mb-5 flex-shrink-0">
            <Image 
            src= {require("../../public/pictures/customerService.png")}
            alt="Deliveryvan"
            className='w-20 h-20'/>
          </div>
          <div className="flex-grow ">
            <h2 className="scroll-m-20 text-base group-hover:text-purple-500 duration-300  mb-2 lg:text-xl font-semibold tracking-tight  title-font text-gray-900  capitalize">
            24/7  customer services
            </h2>
            <p className=" scroll-m-20 text-base  line-clamp-2 duration-300  font-baseline tracking-tight   text-gray-900">
            Free Delivery on order Above $1000.
            </p>
            
          </div>
        </div>
      
      
       {/* Moneyback guarantee */}
      <div className="group p-4 mx-auto  md:w-1/3 flex flex-col text-center items-center">
        
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-base-100 text-purple-500 mb-5 flex-shrink-0 ">
            <Image 
            src= {require("../../public/pictures/moneyback.png")}
            alt="Deliveryvan"
            className='w-20 h-20'/>
          </div>
          <div className="flex-grow ">
            <h2 className="scroll-m-20 text-base group-hover:text-purple-500 duration-300  mb-2 lg:text-xl font-semibold tracking-tight  title-font text-gray-900  capitalize">
              Money Back Guarantee
            </h2>
            <p className=" scroll-m-20 text-base  line-clamp-2 duration-300  font-baseline tracking-tight   text-gray-900">
            Money back Guarantee on all damages items.
            </p>
           
          </div>
        
          
          </div>  
      </div>
    </div>
  </section>
  
  )
}

export default Services