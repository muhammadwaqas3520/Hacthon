import React from "react";
import Image from "next/image";
import  Link from "next/link";
export default function Categories() {
  
  
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className=" scroll-m-20 text-lg lg:text-xl font-bold tracking-tight  title-font text-gray-900 mb-4 capitalize">
          Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex" />
        </div>
      </div>
      {/* categories starts */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
        {/* category-1 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/tops"}>
            <Image
              src={require("../../public/pictures/p6.png")}
              alt="tops"
              width={350}
              height={350}
              className="rounded-xl hover:scale-125 duration-500"
            /></Link>
            <div className="absolute -bottom-24 scroll-m-20  text-4xl group-hover:bottom-0 text-center bg-purple-500 text-white w-full lg:text-3xl font-extrabold tracking-tight  title-font mb-4 capitalize ">
              <h1 className=" ">Tops</h1>
            </div>
         
        
        </div>
{/* category-2 */}
        <div className="mb-10 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"#"}>
            
            <Image
              src={require("../../public/pictures/p8.png")}
              alt="Pants"
              width={350}
              height={350}
              className="rounded-xl hover:scale-125 duration-500"
            /></Link>
            <div className="absolute -bottom-24 scroll-m-20  text-4xl group-hover:bottom-0 text-center bg-purple-500 text-white w-full lg:text-3xl font-extrabold tracking-tight  title-font mb-4 capitalize ">
              <h1 className=" ">Pants</h1>
            </div>
          
        </div>
        {/* category-3 */}
        <div className="mb-10 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/"}>
            
            <Image
              src={require("../../public/pictures/jewellery-1.jpeg")}
              alt="Jewelry"
              width={210}
              height={210}
              className="rounded-xl hover:scale-125 duration-500"
            /></Link>
            <div className="absolute -bottom-24 scroll-m-20  text-4xl group-hover:bottom-0 text-center bg-purple-500 text-white w-full lg:text-3xl font-extrabold tracking-tight  title-font mb-4 capitalize ">
              <h1 className=" ">Jewelry</h1>
            </div>
          
        </div>
        {/* category-4 */}
        <div className="mb-10 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"#"}>
            <Image
              src={require("../../public/pictures/p7 .1.png")}
              alt="shoes"
              width={350}
              height={350}
              className="rounded-xl hover:scale-125 duration-500"
            /></Link>
            <div className="absolute -bottom-24 scroll-m-20  text-4xl group-hover:bottom-0 text-center bg-purple-500 text-white w-full lg:text-3xl font-extrabold tracking-tight  title-font mb-4 capitalize ">
              <h1 className=" ">Shoes</h1>
            </div>
          
        </div>
      </div>
    </div>
  );
}
