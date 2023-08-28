// "use client"
import ProductPreviewCard, { ProductPreviewCardSkeleton } from '@/components/ProductPreviewCard';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from "react";
// get products from api function with typescript
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}


export default async function Home() {

  interface dataType {
    isLoading: boolean;
    error: Error;
    data: Product[];
    rating: Object,
  }

 const productData = await fetch(process.env.URL + '/api/products');
  const productsList = await productData.json();

  type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    }
  }

  return (
    <div className="" >
      <div className="flex flex-col justify-center items-center">
        <Image src="/hero-banner.jpeg" alt="hero"
          className="object-cover object-center"
          width={1920}
          height={1080}
        />
          {/* Enjoy free delivery on orders above SAR 200 */}

        <div className="h-20"></div>
        <h1 className="text-4xl font-bold">Shopazone</h1>
        <p className="text-xl">Best place to buy your favorite products</p>
        <Link scroll={true} href="#products" className="bg-[#ea580c] hover:bg-[#ff6613] text-white font-bold py-2 px-4 rounded" >
          Shop Now
        </Link>
      </div>
      <div className="h-20"></div>
      <p id="products" className='
      text-2xl
      font-bold
      text-center
      
      ' >Today's Deals</p>
      <div className="h-2"></div>
      <div className="flex flex-wrap gap-3 justify-center align-center " >
        {
          productsList?.map((product: Product) => {
            return (
              <Suspense key={product.id} fallback={<ProductPreviewCardSkeleton />}>
              <ProductPreviewCard product={product} key={product.id} />
              </Suspense>
            )
          }
          )

        }

      </div>
    </div>
  )
}


