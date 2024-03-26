'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import CartCard from "@/components/cartCard";
import { useAppSelector } from '../store/hooks';
const CartPage = () => {
    // Data call krny k liay
    const cartArray = useAppSelector((state )=>state.cart);
    // amount total k liay
    const total = cartArray.reduce((total,arr)=>{return(total+((arr.price-(arr.price*arr.discount)/100))*arr.qty)},0)
    return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* items */}

        <div className="col-span-2">
          <CartCard
            // src={"/pictures/p1.png"}
            // alt={"Black Shirt"}
            // title={"Black shirts"}
            // size={"L"}
            // price={400}
          />
        </div>
        {/* summary */}
        <div className="bg-purple-100 rounded-xl p-5">
          <div>
            {/* Heading       */}

            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl">
              Order Summary
            </h1>
            {/* divider */}
            <div className="divider mt-0 mb-1"></div>
            {/* pricing */}
            <div className="text-sm font-medium tracking-tight  ">
              <div className="flex item-center justify-between capitalize">
                {/* product pricing */}
                <h2 className=""> Sub Total </h2>
                <h2 className=""> ${total} </h2>
              </div>
              {/* delivery */}
              <div className="flex item-center justify-between capitalize">
                <h2 className=""> Delivery charges</h2>
                <h2 className=""> $TBD </h2>
              </div>
              {/* Service charges */}
              <div className="flex item-center justify-between capitalize">
                <h2 className=""> Service charges</h2>
                <h2 className=""> $TBD </h2>
              </div>
              {/* tax div */}
              <div className="flex item-center justify-between capitalize">
                <h2 className=""> Tax</h2>
                <h2 className=""> $TBD </h2>
              </div>
              {/* divider */}
              <div className="divider mt-0 mb-1"></div>
              {/* Estimated total div */}
              <div className="flex font-bold item-center justify-between uppercase">
                <h2 className=""> Estimate Total</h2>
                <h2 className=""> ${total} </h2>
              </div>
              {/* divider */}
              <div className="divider mt-0 mb-1"></div>

              {/* Checkout button */}
              <div className="flex items-center justify-center w-full mt-3">
                <Button className="group bg-gray-900 hover:bg-transparent hover:text-purple-500 scroll-m-20 rounded-xl  font-semibold tracking-tight text-base-100  mt-3">
                  Proceed to checkout
                </Button>{" "}
                {/* divider */}
                <div className="divider mt-0 mb-1"></div>
              </div>
              {/* Note */}
              <p className="w-[97] mt-3 text-sm font-medium tracking-tight  text-center italic">
                Note: Service charges and taxes are included{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CartPage