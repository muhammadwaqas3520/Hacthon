'use client'
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addToCart } from "@/app/store/features/cart";

const BsellingPopover = ({ slug }: { slug: string }) => {
  
  // calling products
  const product = useAppSelector((state) => state.products).find(
    (val) => val.slug == slug
  );
  // add to cart
  const dispatch= useAppDispatch();
  // setting cart items
  const [cartItem, setCartItem] = useState({
    id: product?.id,
    title: product?.title,
    image: product?.image[0],
    slug: product?.slug,
    price: product?.price,
    discount: product?.discount,
    category: product?.category,
    size: product?.size[0],
    qty: product?.qty,
    color: product?.color[0],
  });
//  add to cart ka notification krny k lilay
  const notify = () =>
    toast.success("Product added Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div>
      {" "}
      <Popover>
        <PopoverTrigger asChild>
          {/* add to cart */}
          <Button className="group bg-gray-900 hover:bg-transparent hover:text-purple-500 scroll-m-20   font-semibold tracking-tight text-base-100 absolute rounded-xl bottom-2 right-2">
            <ShoppingCart className=" mr-2 h-4 w-4 group-hover:text-purple-500 group-hover:animate-bounce" />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem] h-[10rem]">
          {/* Size div copy from slug page */}
          <div className="flex mb-3 items-center">
            <span className="mr-3 scroll-m-20 text-lg font-semibold tracking-tight ">
              Size
            </span>
            {/* size box */}
            <div className="relative">
              <select
                onChange={(e) => ({ ...cartItem, size: e.target.value })}
                className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
              >
                <option disabled selected>
                  Select size
                </option>
                {product?.size.map((item: any, i) => (
                  <option key={i}>{item}</option>
                ))}

                {/* <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option> */}
              </select>
              {/* arrow down icon */}
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <IoIosArrowDown />
              </span>
            </div>
          </div>
          {/* color */}
          <div className="flex mt-5">
            <span className="mr-3 scroll-m-20 text-base text-gray-900 font-semibold tracking-tight">
              Color
            </span>
            {product?.color.map((item: any, i) => (
              <button
                key={i}
                onClick={() => setCartItem({ ...cartItem, color: item })}
                className="border-2 border-gray-400 rounded-full  focus:outline-none mr-1 w-6 h-6 
                 active:border-gray-900 focus:border-gray-900"
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
          {/* add to cart */}
   <div className="w-fit" onClick={notify}>
    <Button onClick={() => dispatch(addToCart(cartItem))}className="group bg-gray-900   mt-3 w-full hover:bg-transparent
     hover:text-purple-500 scroll-m-20   font-semibold tracking-tight text-base-100 rounded-xl  ">
            <ShoppingCart className=" mr-2 h-4 w-4 group-hover:text-purple-500 group-hover:animate-bounce" />
            Add to Cart
          </Button> </div>
        
        </PopoverContent>
      </Popover>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default BsellingPopover;
