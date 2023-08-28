import React from "react";

async function Loading() {

    return (
        <>


            {/* main section */}
            <div className="flex md:flex-row flex-col  justify-center md:justify-start ">
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


                </div>
            </div>
            {/* call to action */}

            <hr />

            <div className="m-4">
                <div className="h-5 animate-pulse bg-slate-300"></div>

            </div>

            <hr />

            <div className="h-24 md:h-0" />
        </>
    );
}

export default Loading;
