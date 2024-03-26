"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";

import { addToCart } from "@/app/store/features/cart";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch } from "@/app/store/hooks";


const AddToCartToast = ({ cartItem }: any) => {
  const dispatch= useAppDispatch();
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
  return (<>
    <div className="w-fit"onClick={() => dispatch(addToCart(cartItem))}>
     {/* <button onClick={notify}>Notify!</button>  */}
       <Button onClick={notify} className="group bg-gray-900 hover:bg-transparent hover:text-purple-500 scroll-m-20   font-semibold tracking-tight text-base-100  "
       >
        <ShoppingCart className=" mr-2 h-4 w-4 group-hover:text-purple-500 group-hover:animate-bounce" />
         Add to Cart
       </Button></div>
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
      /></>
     
  );
};

export default AddToCartToast;
