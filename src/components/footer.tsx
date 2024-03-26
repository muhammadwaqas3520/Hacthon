import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TfiFacebook } from "react-icons/tfi";
import { RxInstagramLogo } from "react-icons/rx";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=" body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 border-b pb-2 text-xl text-bg-base-100  font-semibold tracking-tight first:mt-0">
          Company
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">About-Us</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Contact</Link>
          </li><li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Jobs</Link>
          </li><li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Advertisement</Link>
          </li>
        </nav>
      </div>
      
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 border-b pb-2 text-xl text-bg-base-100  font-semibold tracking-tight first:mt-0">
          Servcies
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">Branding</Link>
          </li>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">Design</Link>
          </li><li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">Marketing</Link>
          </li><li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">Advertisement</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 border-b pb-2 text-xl text-bg-base-100  font-semibold tracking-tight first:mt-0">
          Legal
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Terms of use</Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Privacy Polices</Link>
          </li><li>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Cookies Polices</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="scroll-m-20 border-b pb-2 text-xl text-bg-base-100  font-semibold tracking-tight first:mt-0">
          SUBSCRIBE
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
              Enter Your Email 
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
            Get Notified
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
         Please provide your email 
          <br className="lg:block hidden" />
          to get notified for excited promos
        </p>
      </div>
    </div>
  </div>
  <div className="">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <Link href={"#"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <Image src={require("../../public/pictures/nav-logo1.jpg")}  alt="navlogo1" className="hidden lg:block  text-xl" width={100} height={100}  />
        <span className="ml-3 text-base uppercase">Women</span>
      </Link>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        © 2020 Women Wears 
      
      </p>
      {/* Link social media */}
      <span className="inline-flex  gap-1 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href="#" className="text-gray-500">
        <TfiFacebook />
        </Link>
        <Link href="#" className="text-gray-500">
        <RxInstagramLogo />
        </Link> <Link href="#" className="text-gray-500">
        <TfiTwitterAlt />
        </Link>
         <Link href="#" className="text-gray-500">
         <FaLinkedinIn />
        </Link>
      
      </span>
    </div>
  </div>
</footer>

  )
}

export default Footer