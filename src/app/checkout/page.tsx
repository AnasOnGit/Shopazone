import React from "react";
import {CartItems,CartTotalCalculation} from "@/components/CartActions";
interface Props {
  params: { };
}

async function CheckoutPage({  }: Props) {

  return(
    <div className="flex flex-col md:flex-row m-4 h-full md:h-screen gap-3 justify-evenly">
   
        <div className="md:w-[50%] min-h-[95%]">
            <p className="md:m-4 mb-0 text-2xl font-bold text-gray-600">Cart</p>
            <div className="w-full md:m-4 border rounded min-h-full md:mt-0 flex justify-center items-center">
                <CartItems />
            </div>
        </div>
       {/* overview section */}
        <div className=" flex-1 lg:flex-[0.5]">
            <p className="md:m-4 mb-0 text-2xl font-bold text-gray-600">Order Summary</p>
            <>
            <div className="md:m-4 border rounded p-4  ">
                <CartTotalCalculation />
            </div>
            <div className="md:m-4 mb-0 flex flex-row justify-end mt-3">
            <button className="bg-red-500 px-[10px] py-[5px] text-white rounded-full hover:bg-red-700">Checkout </button>
            </div>
            </>
        </div>
    </div>
  )
  
}

export default CheckoutPage;
