'use client'
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import {  FaPlus, FaMinus , FaTrash} from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addToCart, additionCart, delItem, subtractCart } from "@/app/store/features/cart";
const CartCard = ()=> {

//   src,
//   alt,
//   title,
//   size,
//   price,
// }: {
//   src: string;
//   alt: string;
//   title: string;
//   size: string;
//   price: number;
// Data mangwany k liiay
const cartArray =useAppSelector((state)=>state.cart);
//  delete data from uuid krny k liiay hmen dispactch functioon bnana parhy ga
const dispatch = useAppDispatch();
 return <>
  {cartArray.length>=1 && 
  cartArray.map((item:any,i:any)=>(
     
    <div key={i} className="flex px-10 py-3">
      {/* image div */}
      <Image
        src={item.image}
        alt={item.title}
        height={80}
        width={80}
        className="w-[100px] h-[100px]"
      />

      {/* information */}

      <div className="flex px-5 items-center justify-between w-full  ">
        <div>
          <h1 className="text-sm font-bold text-gray-900 leading-none line-clamp-1">
            {item.title}
          </h1>
          {/* size */}
          <p className="text-sm mt-4 font-semibold text-gray-900 leading-none line-clamp-1">
            Size:&nbsp;{item.size}
          </p>
          {/* color logo */}
          <p className="text-sm mt-4 font-semibold text-gray-900 leading-none line-clamp-1">
            color:&nbsp; 
            <span>
            <button
                    
                 
                    className="border-2 border-gray-400 rounded-full  focus:outline-none mr-1 w-[15px] h-[15px] foucus:outline-none active:border-gray-900 focus:border-gray-900"
                    style={{ backgroundColor: item.color }}
                  /></span>
          </p>
{/* Quantity */}
          <div className="mt-2 flex items-center  ">
            <Button onClick={()=>dispatch((additionCart(item)))}className="group w-fit h-fit bg-gray-900 items-center hover:bg-transparent hover:text-purple-500  rounded-lg  font-semibold tracking-tight text-base-100  mt-3">
              {" "}
              <FaPlus  className=" mr-2 h-4  " />
            </Button>
            <div className="mr-2 ml-2  text-sm font-semibold tracking-tight text-bg-gray-900 items-center ">
              {item.qty}
            </div>
            <Button onClick={()=>dispatch((subtractCart(item)))} className="group w-fit h-fit bg-gray-900 items-center hover:bg-transparent hover:text-purple-500 rounded-lg  font-semibold tracking-tight text-base-100  mt-3">
              {" "}
              <FaMinus  className=" mr-2 h-4  " />
            </Button>
          </div>
        </div>
      </div>
      {/* price/amount */}
      <div className=" flex flex-col items-end  gap-5">
        <h1 className=" flex text-sm font-bold text-gray-900 leading-none line-clamp-1">
          <span className="text-gray-900">Price: &nbsp; </span> 
          &#36;{item.discount>0 ? (item.price-((item.price*item.discount)/100))*item.qty: item.price*item.qty}
        </h1>

        {/* delete */}
      <FaTrashAlt onClick={()=>dispatch((delItem(item.uuid)))} className="h-6  cursor-pointer text-red-500"/>
      </div>
    </div>
  ))}
  </>
};

export default CartCard;
