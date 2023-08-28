import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import React, { ReactElement } from "react";
import {AddToCartProductPreview} from "./CartActions";

interface Props {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function ProductPreviewCard({ product }: { product: Props }): ReactElement {
  
  // if(true) {return <ProductPreviewCardSkeleton />}

  return (
    <div
      
      className="
         p-3 w-44 md:w-38 hover:shadow-lg border flex flex-col relative
          "
    >
      <Link title={product.title}
      href={`/product/${product.id}`}>
        
      <div className="h-24 mt-[6px]">
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={150}
          className="object-contain object-center w-full h-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <p>
          {product.title.length > 36
            ? product.title.slice(0, 36) + "..."
            : product.title}
        </p>
        <div className="h-2"></div>
        <span className="flex flex-row font-bold flex flex-row  items-center ">
          <p className="text-green-500 mr-2 ">SAR</p>
          <p className="flex-1">{(product.price).toFixed(2)}</p>
          <span className=" flex flex-row  border p-[4px]  rounded-xl w-[38px] bg-white" title={`${product?.rating?.rate} stars rating`}>
            <AiFillStar size={15} color={"#38ae04"} />
            <p className="text-xs ml-1">{product.rating.rate}</p>
          </span>
        </span>
      </div>
          </Link>
        <div className="flex-1"></div>
        <AddToCartProductPreview
          name={product.title}
          price={product.price}
          productId={product.id}
          image={product.image}
          limitPerUser={5}
          
          
          />
    </div>
  );


 


  // only price product image, title price and add to cart button and add hover effect and limit word limit in title
  // return(
  //   // add hover animation on card
  //   <Link href={`/product/${product.id}`} className="flex flex-col justify-center items-center border p-4 rounded
  //   w-60 h-80 hover:shadow-lg
  //   ">

  //       <div className="h-40">
  //       <Image
  //       src={product.image}
  //       width={150}
  //       height={150}
  //       alt={product.title}
  //   //     layout='fill'
  //   // objectFit='contain'
  //       className='object-fit object-center w-full h-full'
  //       />
  //       </div>
  //       <div className="h-2"></div>
  //       <h1 className="text-lg font-bold">{product.title.slice(0,10)}...</h1>
  //       <div
  //       className="flex flex-row"
  //       >
  //         <p className="text-lg font-bold">${product.price}</p>
  //         {/* add to cart */}
  //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
  //         Add to Cart
  //       </button>

  //       </div>
  //   </Link>
  // )
}

export function ProductPreviewCardSkeleton(){
  return (
    <div className="p-3 w-44 md:w-38 hover:shadow-lg border flex flex-col relative items-center">
    {/* image  */}
    <div className="h-24 mt-[6px] animate-pulse bg-slate-500 w-full rounded"/>
    {/* Title */}
    <div className="flex flex-col w-full rounded h-[20px] mt-2  animate-pulse bg-slate-500" />
  {/* price and stars */}
    <div className="flex flex-row w-full h-[20px] mt-2 justify-between">
      <div className="w-[40px] h-full rounded animate-pulse bg-slate-500" />
      <div className="w-[40px] h-full rounded animate-pulse bg-slate-500" />
    </div>
    <div className="h-5"/>
      <div className="w-[90%] h-[29px] rounded-full animate-pulse bg-slate-500" />
    <div className="h-4"/>
  </div>
  );
}

{/* <div className="flex flex-1 flex-col animate-pulse bg-slate-500 my-3 rounded"/>
<div className="h-2 w-2 rounded-full bg-red-500 " />
   
<div className="flex-1"></div> */}
// style on hover make the card bigger
// hover:scale-105
// transition-all
// duration-500
// ease-in-out
// transform
// hover:z-10
// hover:shadow-2xl
// hover:border-transparent
// hover:border-2
// hover:border-blue-500
// hover:rounded-xl

export default ProductPreviewCard;
