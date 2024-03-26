'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCart from './bestSellingCart';
import { useAppSelector } from '@/app/store/hooks';
const FeatureProduct = () => {
// mydata
const bestSell =useAppSelector ((state) => state.products);

//   carousel Setting
var settings = {
  dots: true,
  arrows: false,
  infinite: true,

  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };    
return (
    <div className='mb-[100px] mt-[100px]'>
    {/* Heading */}
    <div className="text-center mb-10">
    <h1 className=" scroll-m-20 text-lg lg:text-xl font-bold tracking-tight title-font text-gray-900 mb-4 capitalize"> Feature Products    </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex" /> 
        </div>
        </div>
        {/* Carousel div */}
        <Slider {...settings}>
       
        {
        bestSell.map((item:any, i) => (
          <BestSellingCart
          key={i}  
          src={item.image[0]}
            alt={item.title}
            title={item.title}
            description={item.description}
            price={item.price}
            category={item.category}
             slug={item.slug}
            discount={item.discount}
            />
        ))}
       
      </Slider>
        </div>
  )
}

export default FeatureProduct