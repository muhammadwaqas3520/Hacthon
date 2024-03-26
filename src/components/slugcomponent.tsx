"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
const Slugcomponent = ({
  image,
}: string | string[] | StaticImageData | any) => {
  const [path, setPath] = useState("");

  return (
    <div>
      <Image
        src={path ? path : image[0]}
        alt="ecommerce"
        width={400}
        height={400}
      />
      <div className=" flex gap-4 mt-4 items-center justify-evenly mx-auto">
      {image.map((item: string , i:number) => (
        <div key={i} className="cursor-pointer h-16 w-16">
          <Image
          src={item}
          alt="abc"
          width={60}
          height={60}
          onClick={() => setPath(item)}
        />
      </div>

      ))}
        
        {/* <div className="cursor-pointer h-16 w-16">
          <Image
            src={"/pictures/p4.png"}
            alt="Shoes"
            width={60}
            height={60}
            onClick={() => setPath("/pictures/p4.png")}
          />
        </div>
        <div className="cursor-pointer h-16 w-16">
          <Image
            src={"/pictures/p10.png"}
            alt="Shoes"
            width={60}
            height={60}
            onClick={() => setPath("/pictures/p10.png")}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Slugcomponent;
