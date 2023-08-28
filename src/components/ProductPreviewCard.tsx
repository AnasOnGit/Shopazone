import Image from "next/image";
import Link from "next/link";
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

export default ProductPreviewCard;
