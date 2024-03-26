'use client'
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import BestSellingCart from "./bestSellingCart";
import { Item } from "@radix-ui/react-navigation-menu";
import { useAppSelector } from "@/app/store/hooks";
import { productSlice } from "@/app/store/features/product";
function BestSelling() {
  const product =useAppSelector((state) => state.products);
  // we need only three product so we are using productSlice method
    const bestSell = product.slice(0,3);
    //   const bestSell =  [
//     {
//       src: "/Pictures/p1.png",
//       alt: " Black Shirt ",
//       title: "Black Shirt Hot Products",
//       description: "Best Quality Shirts for women",
//       price: 550,
//       discount: 50,
//     category: "Tops",
//   slug:"black" 
// },
//   {
//       src: "/Pictures/p8.png",
//       alt: " pant ",
//       title: "Pant",
//       description: "Best Quality Pants for women",
//       price: 500,
//       category: "Pants",
      
//   slug:"Blue" },
//     {
//       src: "/pictures/jewellery-1.jpeg",
//       alt: " Jewelry ",
//       title: "Artificial Jewelry ",
//       description: "Best Quality Jewelry for women",
//       price: 150,
//       category: "Jewelry",
//   slug:"Artificial" },
//   ];

  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className=" scroll-m-20 text-lg lg:text-xl font-bold tracking-tight  title-font text-gray-900 mb-4 capitalize">
          Best selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex" />
        </div>
      </div>
      {/* Best Selling Products starts */}
      <div className="flex flex-wrap justify-center gap-6">
        {
        bestSell.map((item:any, i) => (
          <BestSellingCart
          key={i}  
          src={item.image[0]}
            alt={item.title}
            title={item.title}
            description={item.description}
            price={item.price}
        discount={item.discount}
            category={item.category}
        slug={item.slug}
            />
        ))}

      </div>
    </div>
  );
}

export default BestSelling;
