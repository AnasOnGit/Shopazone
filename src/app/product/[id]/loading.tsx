import React from "react";


async function Loading({ params }: Props) {
 
  return (
    <>
      
     
      {/* main section */}
      <div  className="flex md:flex-row flex-col  justify-center md:justify-start ">
        {/* first deatil section */}
        {/* <div className='flex flex-col justify-between md:flex-row border flex-1'> */}
        <div className="flex-1 grid md:grid-cols-[230px,auto] md:grid-rows-[2, auto]  justify-items-start content-start m-4">
          {/* image gallery */}
          <div className="w-[100%] h-[300px] md:m-4 border flex justify-center items-center p-2 md:w-[200px] md:h-[300px] order-2 md:order-1 row-span-2 col-span-1 animate-pulse bg-slate-300">
            {/* <div className="w-[100%] h-[300px] md:m-4 border flex justify-center items-center p-2 md:w-[200px] md:h-[300px] order-2 md:order-1 row-span-2 col-span-1" > */}
            
          </div>

          {/* detail section */}
          <div className="self-start  mt-3  order-1 md:order-2  ">
            <div className="text-gray-500 hover:text-blue-400 capitalize animate-pulse bg-slate-300 ">
              
              
            </div>

            <p className="font-bold text-3xl animate-pulse bg-slate-300"></p>
            {/* rating section */}
            <div className="flex flex-row gap-2 items-center animate-pulse bg-slate-300">
            </div>
          </div>

          {/* price section */}
          <div className="order-3 w-full row-span-2 md:mt-2 md:mb:0 flex flex-col gap-1 mt-8 mb-4 md:mb-0 ">
            
            <div className="flex flex-row gap-2 items-center mb-4 animate-pulse bg-slate-300">

            </div>
            <div className="pk-4 text-red-500 text-sm">
        
      </div>
            <div className="mt-4 p-4 border border-gray flex flex-row gap-3 md:w-[80%] rounded cursor-pointer border-green-300 hover:shadow items-center animate-pulse bg-slate-300">
             
            </div>
           
            <div className="mt-4 p-4 border border-gray flex flex-row gap-3 md:w-[80%] rounded cursor-pointer border-green-300 hover:shadow items-center animate-pulse bg-slate-300">
             
            </div>
           
          </div>
        </div>
        {/* actions */}
        <div className=" flex flex-col bg-white z-40 order-3  ">

          {/* <AddToCartProductPage
            productId={productInfo.id}
            name={productInfo.title}
            price={productInfo.price}
            limitPerUser={5}
            image={productInfo.image}
          /> */}
           {/* seller Info */}
           {/* <div className="flex flex-row items-center gap-2 p-3 hover:shadow cursor-pointer rounded border m-2 ">
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
          </div> */}
          {/* options / perks */}
          {/* <div className="flex flex-col gap-2 p-4 w-full">
          <div className="flex flex-row items-center gap-2 text-red-500"> <LiaShippingFastSolid size={23} /> <p className="font-lg">*Eligible for free shipping</p></div>
          <hr />
          <div className="flex flex-row items-center gap-2 text-gray-600 "> <TbTruckReturn size={23} /> <p className="font-lg">Enjoy FREE returns</p></div>
          <hr />
          <div className="flex flex-row items-center gap-2 text-gray-600 "> <SlBadge size={23} /> <p className="font-lg">2 year warranty</p></div>
<hr />
          </div> */}
        </div>
      </div>
      {/* call to action */}
    
      <hr />
      {/* blow main section */}
      {/* description section */}
      <div className="m-4">
        <div className="h-5 animate-pulse bg-slate-300"></div>
        {/* <p className="font-bold text-xl">Description</p>

        <p className="mt-2">{productInfo.description}</p> */}
      </div>

      <hr />
      {/* <SimilarProducts id={productInfo.id} category={productInfo.category} />
      <PeopleAlsoBuy id={productInfo.id} /> */}
      <div className="h-24 md:h-0" />
    </>
  );
}

export default Loading;
