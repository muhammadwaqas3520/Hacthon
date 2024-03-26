'use client'
import BestSellingCart from "@/components/bestSellingCart";
import { useAppSelector } from "../store/hooks";


const Categorypage = ({params}:{params: {category: string}}) => {
  const product = useAppSelector((state) => state.products);
  const bestSell = product.filter((val) => val.category == params.category);
  return (
    <div>  {/* Heading */}
    <div className="text-center mb-10">
      <h1 className=" scroll-m-20 text-lg lg:text-2xl font-extrabold tracking-tight   text-gray-900  capitalize">
        {params.category}
      </h1>

      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex" />
      </div>
    </div>
    {/* Category page starts */}
    <div className="flex flex-wrap justify-center gap-6">
    {
      bestSell.map((item: any, i: number) => (
        <BestSellingCart
        key={i}  
        src={item.image[0]}
          alt={item.title}
          title={item.title}
          description={item.description}
          price={item.price}
          discount={item.discount}
          category={item.Category}
           slug={item.slug}
    
          />
      ))}
    </div>
</div>
  )
}

export default Categorypage