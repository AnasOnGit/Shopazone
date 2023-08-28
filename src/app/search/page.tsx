'use client'
import { use, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useQuery } from "@tanstack/react-query";
import ProductPreviewCard, { ProductPreviewCardSkeleton } from "@/components/ProductPreviewCard";

export default function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
    const [category, setCategory] = useState("");
  useEffect(() => {
    let term = searchParams.get("search-term");
    let category = searchParams.get("category");
    setCategory(category);

  }, [searchParams]);

  const {
    isLoading,
    error,
    data: searchResult,
  } = useQuery(["search"], () =>
    fetch(`https://fakestoreapi.com/products/category/${category}`).then((result) => {
      if (!result.ok) {
        throw new Error("Network response was not ok");
      }
      return result.json();
    }),
  );

  if (error) {
    console.log(error);
    return "An error has occurred: " + error.message;
  }


  return (
    <div className="m-4">
      <h1 className="font-bold text-xl">Search results</h1>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {isLoading?(
        <>
        <ProductPreviewCardSkeleton />
        <ProductPreviewCardSkeleton />
        <ProductPreviewCardSkeleton />
        <ProductPreviewCardSkeleton />
         </>) : searchResult ? (
          searchResult.map((product: any) => (
            <ProductPreviewCard product={product} key={product.id} />
          ))
        ) : null}
      </div>
    </div>
  );
}
