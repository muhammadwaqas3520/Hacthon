import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Promotion from "@/components/promotion";
import Categories from "@/components/categories";
import BestSelling from "@/components/bestselling";
import Category from "./[category]/page";
import FeatureProduct from "@/components/featureProduct";
import AddToCartToast from "@/components/addToCartToast";
export default function Home() {
  return (
   <div className="h-80%">
    <Hero/>

<Services/>
<FeatureProduct/>
<Promotion/>


<Categories/>
<BestSelling/>

    </div> 
 


);}
