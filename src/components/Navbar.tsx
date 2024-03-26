'use client'
import React from 'react'
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import Image from 'next/image'
import { NavigationMenuDemo } from './navLinks'
import p3 from "/public/p3.png";
import { FiShoppingCart } from "react-icons/fi";
import { useAppSelector } from '@/app/store/hooks'

const Navbar = () => {
// Data ko call krny k liay useAppSelector ko istmal krty hain
  const cart = useAppSelector((state)=>(state.cart));
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0}  className="p-0 text-2xl  lg:hidden">
          <GiHamburgerMenu />
        </div>
        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={"/"}>Home</Link></li>
        <li>
          <details>
            <summary>Women</summary>
            <ul className="p-2">
              <li><Link href={"/Tops"}>Tops</Link></li>
              <li><Link href={"/Pants"}>Pants </Link></li>
              <li><Link href={"/Jewelry"}>Jewelry </Link></li>
              <li><Link href={"/Shoes"}>Shoes </Link></li>
              
            </ul>
          </details>
        </li>
        <li><Link href={"/About"}>About</Link></li>
        <li><Link href={"/CountactUs"}>ContactUs</Link></li>
        </ul>
      </div>
    
      <Image src={require("../../public/pictures/nav-logo1.jpg")}  alt="navlogo1" className="hidden lg:block  text-xl" width={100} height={100}  />

     
    </div>
    <div className="navbar-center ">
    <Image src={require("../../public/pictures/nav-logo1.jpg")}  alt="navlogo1" className=" lg:hidden  text-xl" width={100} height={100}  />
      
    
     
     <NavigationMenuDemo/> 
     
    </div>
    <div className="navbar-end">
      <Link href={"/Cart"} >
        
      <div className="navbar bg-base-100">
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className=" pr-4">
            <div className="indicator  ">
            <div className="mt-1  hover:text-purple-500 text-gray-900"><FiShoppingCart className=" " /></div>
             {cart.length>0 && 
              <span className="badge  badge-sm indicator-item bg-purple-100 hover:bg-purple-400 text-purple-900">
                {cart.length}
              </span>}
            </div>
          </div>
        
        </div>
        
      </div>
    </div>
        </Link>
    </div>
  </div>
  )
}

export default Navbar