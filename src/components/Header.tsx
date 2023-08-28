"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { TbSquareRoundedX } from "react-icons/tb";
import { useRouter } from 'next/navigation'
import { CartHeader } from "./CartActions";


function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <header
      className="flex flex-row justify-between p-2 items-center bg-white relative 
        
        z-50

        "
      // bg-slate-950
    >
      <div className="md:hidden flex cursor-pointer">
        <SearchBarForSmartPhone className="" showSearchBar={showSearchBar} />
      </div>
      <div className="flex flex-row items-center">
        <Link href="/">
          <Image
            alt="Shopazone Logo"
            src={"/logo.png"}
            width={150}
            height={150}
          />
        </Link>
      </div>
      <SearchBar className="hidden md:flex"  setShowSearchBar={setShowSearchBar}/>
      <CartHeader />
      <SearchBarCatergoryMenu setShowSearchBar={setShowSearchBar} showSearchBar={showSearchBar} />
    </header>
  );
}

function Cart() {
    let cartTotal = 10;
    // after:w-1/2 after:h-1/2 after:bg-blue-500
  return (
    <div attr-cart-total={10} className={`relative cursor-pointer flex flex-row text-[#ea580c]  after:content-[attr(attr-cart-total)] after:absolute after:-right-4 after:-top-1 after:text-[10px] after:text-white mr-3 after:w-[18px] after:h-[18px] after:p-2 after:flex after:items-center after:justify-center after:bg-[#ea580c] after:rounded-full`}>
      <HiOutlineShoppingBag size={24} />
      <div className=" ml-2  text-lg cursor-pointer hover:text-white-400">
        Cart
      </div>
    </div>
  );
}

function SearchBar({ className='', size=20,setShowSearchBar }: { className: string, size:number,setShowSearchBar:any }) {
  const router = useRouter()
  return (
    // for style I want to make search bar center and full width but have some distance from both sides
    <form className={`rounded-full px-4 py-2 flex flex-row justify-between items-center w-1/2 border border-slate-300 ${className} focus-within:border-orange-600 `} onSubmit={
      (e)=>{
        e.preventDefault();
       setShowSearchBar(false);
       
        // router.push(`/search?search-term=${e.target.search.value}`);
      }
    }
    onClick={()=>setShowSearchBar(true)}
    >
      <div
        className="
            placeholder-slate-950
              bg-transparent
            text-slate-950
            placeholder:text-slate-400
            outline-none
            flex-1
            w-full
            font-family-cuprum focus-within:border-orange-600 "
        type="search"
        alt="search"
        placeholder="Search"
        name="search"
        // disabled={true}
        autoComplete={false}

        onClick={()=>setShowSearchBar(true)}
      >Search</div>
      <button type="submit" className="cursor-pointer" title="Search" alt="Search">
        <GoSearch size={size} color={"gray"} />
      </button>
    </form>
  );
}


const SearchBarForSmartPhone = ({ className,showSearchBar:ssb }: { className: string,showSearchBar: boolean }) => {
  const [showSearchBar, setShowSearchBar] = useState(ssb);
  const [searchValue, setSearchValue] = useState("");


  return (
    <div className="relative" 
    // ref={menuRef}
    >
      <div className="group">
        {/* Trigger button */}
        <CiSearch
          size={32}
          className="cursor-pointer"
          onClick={() => setShowSearchBar(!showSearchBar)}
        />
      </div>
      <SearchBarCatergoryMenu setShowSearchBar={setShowSearchBar} showSearchBar={showSearchBar} />
    </div>
  );
};


const SearchBarCatergoryMenu = ({showSearchBar,setShowSearchBar}) => {
  const categories = [
    { name: 'Electronics', image: '/electronics.jpg' ,search:"electronics"},
    { name: "Men's Clothing", image: '/mens-clothing.jpg',search:"men's clothing" },
    { name: 'Jewelry', image: '/jewelry.jpg',search:"jewelery" },
    { name: "Women's Clothing", image: '/womens-clothing.jpg',search:"women's clothing" },
  ];
  return(
    <div
        className={`${
          showSearchBar ? "translate-y-0" : "translate-y-full"
        }  fixed top-[50px] right-0 h-screen w-screen bg-slate-50 transform transition-transform duration-500 ease-in-out z-50 mb-24`}
      >
        {/* closing touch */}
        <div className={`w-screen bg-[rgba(0,0,0,0.3)] h-[50px] -top-[50px] relative z-[51] ${showSearchBar ? 'block': "hidden"} transition-none	 `} onClick={()=>{
            setShowSearchBar(false);
        }}></div>
        {/* closing touch */}
        {/* Close icon */}
        <TbSquareRoundedX
          size={42}
          className="mr-3 mt-3 cursor-pointer absolute top-0 right-0"
          color="red"
          onClick={() => {
            setShowSearchBar(false);
          }}
        />
        {/* Search bar */}
        <div className="flex w-full justify-center items-center mt-16">
        {/* <SearchBar className="w-[80%] py-3" size={30} setShowSearchBar={setShowSearchBar} /> */}
        </div>
       
         {/* Title */}
         <p className="text-center mt-6 text-xl font-bold">Quick Search</p>
        {/* Quick search categories */}
        <div className="mt-1 flex flex-wrap justify-center p-4 h-80 overfllow-y-auto">
          {categories.map((category, index) => (
            <Link href={`/search?category=${category.search}`} className="w-1/2 md:w-1/4 p-2" key={index} onClick={()=>setShowSearchBar(false)}>
              <div className="bg-white shadow rounded-lg p-4">
                <Image
                width={100}
                height={100}
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <p className="text-center">{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
       
      </div>
  );
}

export default Header;
