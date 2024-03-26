import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import Slug from "@/app/[category]/[slug]/page";
import BsellingPopover from "./bsellingPopover";
const BestSellingCart = ({
  src,
  alt,
  title,
  description,
  price,
  discount,
  category,
  slug,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  slug: string;
}) => {
  return (
    <div>
      <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
        <Link href={`/${category}/${slug}`}>
          {/* image div */}
          <div className="block relative h-[23rem] rounded overflow-hidden ">
            <Image src={src} alt="selling" height={400} width={400} />
          </div>
          {/* Headiing  */}
          <div className="mt-4  ">
            {title && (
              <h2
                className="scroll-m-20  text-lg font-semibold tracking-tight 
    text-gray-900 transition-colors first:mt-0 line-clamp-1"
              >
                {title}
              </h2>
            )}

            {description && (
              <p
                className="scroll-m-20  pb-2 text-base font-Semibold tracking-tight 
    text-gray-900  line-clamp-1"
              >
                {description}
              </p>
            )}
            {price && (
              <div className="flex gap-5">
                {" "}
                <p
                  className={`scroll-m-20  pb-2 text-base font-Semibold tracking-tight 
                  text-gray-900  line-clamp-1 ${
                    discount > 0 && "line-through decoration-2 decoration-black"
                  }`}
                >
                  ${price}
                </p>
                {/* Discounted value */}
                {discount > 0 && (
                  <p
                    className="scroll-m-20 pb-2 text-base font-Semibold tracking-tight 
                  text-gray-900  line-clamp-1"
                  >
                    ${(price * discount) / 100}
                  </p>
                )}
              </div>
            )}
          </div>
        </Link>
        {/* Button div */}
        <div>
          {/* <Button className="group bg-gray-900 hover:bg-transparent hover:text-purple-500 scroll-m-20   font-semibold tracking-tight text-base-100 absolute rounded-xl bottom-2 right-2">
            <ShoppingCart className=" mr-2 h-4 w-4 group-hover:text-purple-500 group-hover:animate-bounce" />
            Add to Cart
          </Button> */}
          <BsellingPopover slug={slug} />

          <Button className="group bg-gray-900 hover:bg-transparent hover:text-purple-500 scroll-m-20   font-semibold tracking-tight text-base-100 absolute rounded-xl bottom-2 left-2">
            <FaHeart className=" mr-2 h-4 w-4 group-hover:text-purple-500 group-hover:animate-bounce" />
            Buy Now
          </Button>
          {/* off sale badge created  */}
          {discount > 0 && (
            <div
              className="scroll-m-20  text-center text-xs font-semibold tracking-tight 
                 text-base-100 bg-red-400 absolute top-0 left-2 w-[87px] p-2 uppercase rounded-tl-xl rounded-bl-xl myDiscount"
            >
              {" "}
              {`${discount} % off`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSellingCart;
