"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Slugcomponent from "@/components/slugcomponent";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addToCart } from "@/app/store/features/cart";
import AddToCartToast from "@/components/addToCartToast";

// params use
// Filter array method used for filtering
// is mai bestsell wala const ko change kr k slug rakh dia ha name

const Slugpage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.products);
  const slug = product.filter((val) => val.slug == params.slug);
  // product ko cart add krny k liay
  const dispatch = useAppDispatch();
  //  cart mai add krny k liay
  const [cartItem, setCartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    image: slug[0].image[0],
    slug: slug[0].slug,
    price: slug[0].price,
    discount: slug[0].discount,
    category: slug[0].category,
    size: slug[0].size[0],
    qty: slug[0].qty,
    color: slug[0].color[0],
  });

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Image tag lagna ha or ya useclient mai istmal ho ga is liay is ka serf componnt e lagen gy*/}
          <Slugcomponent image={slug[0].image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* Brand Heading */}
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {slug[0].category}
            </h2>
            {/* Title Heading */}
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {slug[0].title}
            </h1>
            {/* Rating */}
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="divider"></div>
            {/* Description  */}
            <p className="mt-2 leading-relaxed scroll-m-0 text-base font-normal text-gray-900">
              {slug[0].description}
            </p>

            <div className="flex mt-6 items-center  mb-5">
              <div className="flex">
                {/* color */}
                <div>
                  <span className="mr-3 scroll-m-20 text-base text-gray-900 font-semibold tracking-tight">
                    Color
                  </span>
                  {slug[0].color.map((item: any, i) => (
                    <button
                      key={i}
                      onClick={() => setCartItem({ ...cartItem, color: item })}
                      className="border-2 border-gray-400 rounded-full  focus:outline-none mr-1 w-6 h-6  active:border-gray-900 focus:border-gray-900"
                      style={{ backgroundColor: item }}
                    />
                  ))}
                </div>
                {/* <button className="border-2 border-gray-900 rounded-full w-6 h-6 focus:outline-none" /> */}
                {/* <button className="border-2 border-gray-900 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-900 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-900 ml-1 bg-gray-600 rounded-full w-6 h-6 focus:outline-none" /> */}
              </div>
              {/* Size div */}
              <div className="flex ml-6 items-center">
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
                    {slug[0].size.map((item: any, i) => (
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
            </div>
            <div>
              <div className="flex items-center ">
                <span className="mr-3 scroll-m-20 text-lg font-semibold tracking-tight ">
                  Quantity
                </span>
                <Button className="group bg-gray-900 hover:bg-transparent hover:text-purple-500 scroll-m-20 rounded-xl  font-semibold tracking-tight text-base-100  mt-3">
                  <FaPlus
                    onClick={() =>
                      setCartItem({ ...cartItem, qty: ++cartItem.qty })
                    }
                    className=" mr-2 h-4  "
                  />
                </Button>
                {/* slug[0] ki jaga cart item kr dia ha */}

                <div className="mr-2 ml-2 scroll-m-20 text-lg font-semibold tracking-tight text-bg-gray-900 items-center ">
                  {cartItem.qty}
                </div>
                <Button className="group bg-gray-900 hover:bg-transparent hover:text-purple-500 scroll-m-20 rounded-xl  font-semibold tracking-tight text-base-100  mt-3">
                  <FaMinus
                    onClick={() =>
                      setCartItem({
                        ...cartItem,
                        qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,
                      })
                    }
                    className=" mr-2 h-4  "
                  />
                </Button>
              </div>
            </div>
            {/* price */}
            <div className="flex justify-between items-center">
              <span
                className={`"title-font font-medium text-2xl text-gray-900 
                ${
                  cartItem.discount > 0 &&
                  "line-through decoration-2 decoration-black"
                }`}
              >
                ${cartItem.price * cartItem.qty}
              </span>
              {/* Discounted value */}
              {cartItem.discount > 0 && (
                <span
                  className="scroll-m-20 ml-3  pb-2 text-base font-Semibold tracking-tight 
                  text-gray-900  line-clamp-1"
                >
                  $
                  {(cartItem.price -
                    (cartItem.price * cartItem.discount) / 100) *
                    cartItem.qty}
                </span>
              )}
              {/* add to cart */}
              {/* <Button onClick={()=>dispatch(addToCart(cartItem))} 
              className="group bg-gray-900 hover:bg-transparent hover:text-purple-500 scroll-m-20   font-semibold tracking-tight text-base-100  ">
                <ShoppingCart className=" mr-2 h-4 w-4 group-hover:text-purple-500 group-hover:animate-bounce" />
                Add to Cart
              </Button> */}
              <AddToCartToast cartItem={cartItem} />
            </div>
            {/* Buy now button */}
            <Button className="group bg-gray-900 hover:bg-transparent hover:text-purple-500 scroll-m-20   font-semibold tracking-tight text-base-100 w-full mt-3">
              <FaHeart className=" mr-2 h-4 w-4 group-hover:text-purple-500 group-hover:animate-bounce" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slugpage;
