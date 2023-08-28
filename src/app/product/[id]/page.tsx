import React from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import PeopleAlsoBuy from "@/components/PeopleAlsoBuy";
import SimilarProducts from "@/components/SimilarProducts";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";
import { TbTruckReturn } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { LiaShippingFastSolid } from "react-icons/lia";
import AddToCartProductPage from "@/components/CartActions";

interface Props {
  params: { id: string };
}

async function ProductPage({ params }: Props) {
  // Get today's date
  const today = new Date();

  // Calculate the minimum delivery date (3 days from today)
  const minDeliveryDate = new Date(today);
  minDeliveryDate.setDate(today.getDate() + 3);

  // Calculate the maximum delivery date (5 days from today)
  const maxDeliveryDate = new Date(today);
  maxDeliveryDate.setDate(today.getDate() + 5);

  // Format the dates as strings in the desired format
  const minDeliveryDateString = minDeliveryDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  const maxDeliveryDateString = maxDeliveryDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  // Create the delivery message
  const deliveryMessage = `Order now and get delivery between ${minDeliveryDateString} - ${maxDeliveryDateString}.`;
  const productData = await fetch(`https://fakestoreapi.com/products/${params.id}`
  );
  const productInfo = await productData.json();

  return (
    <>
      <title>{`${productInfo.title} | Shopazone`}</title>
      <meta property="og:title" content={`${productInfo.title} | Shopazone`} />
      {/* main section */}
      <div  className="flex md:flex-row flex-col  justify-center md:justify-start ">
        {/* first deatil section */}
        <div className="flex-1 grid md:grid-cols-[230px,auto] md:grid-rows-[2, auto]  justify-items-start content-start m-4">
          {/* image gallery */}
          <div className="w-[100%] h-[300px] md:m-4 border flex justify-center items-center p-2 md:w-[200px] md:h-[300px] order-2 md:order-1 row-span-2 col-span-1">
            <Image
              src={productInfo.image}
              alt={productInfo.title}
              width={160}
              height={160}
              className="object-contain object-center"
            />
          </div>

          {/* detail section */}
          <div className="self-start  mt-3  order-1 md:order-2  ">
            <div className="text-gray-500 hover:text-blue-400 capitalize ">
              Catergory:{" "}
              <Link href={`/search/${productInfo.category}`}>
                {productInfo.category}{" "}
              </Link>
            </div>

            <p className="font-bold text-3xl">{productInfo.title}</p>
            {/* rating section */}
            <div className="flex flex-row gap-2 items-center">
              <p className=" ">Product Ratings:</p>
              <p>{productInfo?.rating?.rate}</p>
              <div
                className="flex flex-row items-center"
                title={`${productInfo?.rating?.rate} stars rating`}
              >
                {/* show all rating stars if star is not full show half star, if the rating is 3 for star 4 and 5 show e,pty star */}
                {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => {
                  return star <= productInfo?.rating?.rate ? (
                    <BiSolidStar color="#38ae04" key={star} />
                  ) : star === Math.ceil(productInfo?.rating?.rate) ? (
                    <BiSolidStarHalf color="#38ae04" key={star} />
                  ) : (
                    <BiStar color="#38ae04" key={star} />
                  );
                })}
                <p className=" ml-2 text-neutral-500">
                  ({productInfo?.rating?.count})
                </p>
              </div>
            </div>
          </div>

          {/* price section */}
          <div className="order-3 w-full row-span-2 md:mt-2 md:mb:0 flex flex-col gap-1 mt-8 mb-4 md:mb-0 ">
            
            <div className="flex flex-row gap-2 items-center mb-4">
              <p className="font-bold text-2xl text-[#565959] ">Price:</p>
              <p className="font-bold text-2xl ">SAR {(productInfo.price).toFixed(2)}</p>
              <p className="text-gray-500  text-sm">Inclusive of VAT</p>
            </div>
            <div className="pk-4 text-red-500 text-sm">
        <p>
          {deliveryMessage}
        </p>
      </div>
            <div className="mt-4 p-4 border border-gray flex flex-row gap-3 md:w-[80%] rounded cursor-pointer border-green-300 hover:shadow items-center">
              <div className="text-green-400 font-bold">Splity</div>
              <p >Pay 4 interest-free payments of SAR {(productInfo.price / 4).toFixed(2)}. <span className="text-blue-500 hover:text-blue-700 hover:cursor-pointer">Learn more</span></p>
            </div>
            <div className="mt-4 p-4 border border-gray flex flex-row gap-3 md:w-[80%] rounded cursor-pointer border-red-300 hover:shadow items-center">
              <div className="text-red-400 font-bold">Paymenty</div>
              <p >Pay 3 interest-free payments of SAR {(productInfo.price / 3).toFixed(2)}. <span className="text-blue-500 hover:text-blue-700 hover:cursor-pointer">Learn more</span></p>
            </div>
          </div>
        </div>
        {/* actions */}
        <div className=" flex flex-col bg-white z-40 order-3  ">

          <AddToCartProductPage
            productId={productInfo.id}
            name={productInfo.title}
            price={productInfo.price}
            limitPerUser={5}
            image={productInfo.image}
          />
           {/* seller Info */}
           <div className="flex flex-row items-center gap-2 p-3 hover:shadow cursor-pointer rounded border m-2 ">
              <div className="p-1 flex flex-col justify-center items-center border rounded-full bg-white shadow-sm w-[50px] h-[50px]">
                <Image width={160} height={160} src="/logo.png" className="object-contain object-center" alt="Seller Logo" title="Seller Logo" />
              </div>
            <div className="flex flex-col items-start gap-1 justify-start">
              <div className="flex flex-row gap-1 items-center">
              <p className="text-sm text-gray-500">Sold by Shopazone</p>
              <HiOutlineBadgeCheck color="#ea580c" title="Verifed Seller" className="cursor-pointer" />
              </div>
             <div className="bg-[#38ae04] rounded-full px-3 py-1 flex flex-row  items-center justify-center">
             <BiSolidStar className="" size={12} color="white "/> 
<p className="text-white text-[12px]">4.5</p>
             </div>
              </div>
          </div>
          {/* options / perks */}
          <div className="flex flex-col gap-2 p-4 w-full">
          <div className="flex flex-row items-center gap-2 text-red-500"> <LiaShippingFastSolid size={23} /> <p className="font-lg">*Eligible for free shipping</p></div>
          <hr />
          <div className="flex flex-row items-center gap-2 text-gray-600 "> <TbTruckReturn size={23} /> <p className="font-lg">Enjoy FREE returns</p></div>
          <hr />
          <div className="flex flex-row items-center gap-2 text-gray-600 "> <SlBadge size={23} /> <p className="font-lg">2 year warranty</p></div>
<hr />
          </div>
        </div>
      </div>
      {/* call to action */}
    
      <hr />
      {/* blow main section */}
      {/* description section */}
      <div className="m-4">
        <div className="h-5"></div>
        <p className="font-bold text-xl">Description</p>

        <p className="mt-2">{productInfo.description}</p>
      </div>

      <hr />
      <SimilarProducts id={productInfo.id} category={productInfo.category} />
      <PeopleAlsoBuy id={productInfo.id} />
      <div className="h-24 md:h-0" />
    </>
  );
}

export default ProductPage;
