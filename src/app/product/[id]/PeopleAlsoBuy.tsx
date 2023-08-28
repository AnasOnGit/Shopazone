"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductPreviewCard,{ProductPreviewCardSkeleton} from "@/components/ProductPreviewCard";

interface Props {
    id:string;
}

function PeopleAlsoBuy({ id  }: Props) {

  const {
    isLoading,
    error,
    data: suggestedProductsList,
  } = useQuery({
    queryKey: ["psb"],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products?limit=8`).then(
        (res) => res.json()
      ),
  });

  if (error) return "An error has occurred: " + error.message; // set type for error

  return (
    <div className="m-4">
      <h1 className="font-bold text-xl">Customers who viewed this item also viewed</h1>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">

      {isLoading?(
        <>
       <ProductPreviewCardSkeleton />
       <ProductPreviewCardSkeleton />
       <ProductPreviewCardSkeleton />
       <ProductPreviewCardSkeleton />
        </>
      ):suggestedProductsList.map((product: any) => {
          return product.id === id ? null : <ProductPreviewCard product={product} key={product.id} />;
        })}
        </div>
    </div>
  );
}

export default PeopleAlsoBuy;
