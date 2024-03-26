import BestSellingCart from "@/components/bestSellingCart";
import Categorypage from "./categorypage";
const Category = ({params}:{params: {category: string}}) => {

 
  //   {
  //     src: "/Pictures/p1.png",
  //     alt: " Black Shirt ",
  //     title: "Black Shirt Hot Products",
  //     description: "Best Quality Shirts for women",
  //     price: 550,
  //     category: "Tops",
  //     products: "black",
  //   },
  //   {
  //     src: "/Pictures/p2.png",
  //     alt: " Skin Shirt ",
  //     title: "Skin Shirt ",
  //     description: "Best Quality Shirts for women",
  //     price: 500,
  //     category: "Tops",
  //     products: "black",
  //   },
  //   {
  //     src: "/Pictures/p3.png",
  //     alt: " Gray Shirt ",
  //     title: " Gray T Shirt Hot Products",
  //     description: "Best Quality Shirts for women",
  //     price: 150,
  //     category: "Tops",
  //     products: "black",
  //   },
  //   {
  //     src: "/Pictures/p1.png",
  //     alt: " Black Shirt ",
  //     title: "Black Shirt Hot Products",
  //     description: "Best Quality Shirts for women",
  //     price: 550,
  //     category: "Tops",
  //     products: "black",
  //   },
  //   {
  //     src: "/Pictures/p2.png",
  //     alt: " Black Shirt ",
  //     title: "Black Shirt Hot Products",
  //     description: "Best Quality Shirts for women",
  //     price: 500,
  //     category: "Shoes",
  //     products: "black",
  //   },
  //   {
  //     src: "/Pictures/p3.png",
  //     alt: " Black Shirt ",
  //     title: "Black Shirt Hot Products",
  //     description: "Best Quality Shirts for women",
  //     price: 150,
  //     category: "pants",
  //     products: "black",
  //   },
  // ];

  return (
    <div className="mb-[100px] mt-[50px]">
    <Categorypage params={params}/>
    </div>
  
  
  );
};

export default Category;
