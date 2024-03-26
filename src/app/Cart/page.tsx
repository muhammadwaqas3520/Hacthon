import React from "react";

import { useAppSelector } from "../store/hooks";
import CartPage from "./cartPage";
const CartSummery = () => {
  
  return (
    <div className="mb-[100px] mt-[100px]">
      {/*main Div*/}
      <CartPage/>
    </div>
  );
};

export default CartSummery;
