"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductPreviewCard,{ProductPreviewCardSkeleton} from "@/components/ProductPreviewCard";

interface Props {
    id:string;
  category: string;
}

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type QueryResult = {
  isLoading: boolean;
  error: any;
  data?: Product[];
};


function SimilarProducts({id, category }: Props) {
  const {
    isLoading,
    error,
    data: similarProductsList,
  }: QueryResult = useQuery({
    queryKey: ["suggestions"],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/category/${category}`).then(
        (res) => res.json()
      ),
  });

  if (error) return "An error has occurred: " + error.message; // set type for error

  return (
    <div className="m-4">
      <h1 className="font-bold text-xl">Similar Products</h1>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">

      {isLoading?(
        <>
        <ProductPreviewCardSkeleton />
        <ProductPreviewCardSkeleton />
        <ProductPreviewCardSkeleton />
        <ProductPreviewCardSkeleton />
         </>
      ):similarProductsList?.map((product: any) => {
         return product.id === id ? null :  <ProductPreviewCard product={product} key={product.id} />;
        })}
        </div>
    </div>
  );
}



export default SimilarProducts;
