import { NextResponse } from 'next/server';
// import products from '../products.json';

export async function GET(request:any,) {
  let productsRes = await fetch(`${process.env.NEXT_URL}/products.json`);
  let products: any = await productsRes.json();
  const limit = request.nextUrl.searchParams.get('limit');

  if (limit) {
    // Parse the limit parameter as an integer
    const limitValue = parseInt(limit);

    if (!isNaN(limitValue) && limitValue > 0) {
      // If a valid limit value is provided, return the first "limitValue" products
      const limitedProducts = products.slice(0, limitValue);

      return NextResponse.json(limitedProducts, { status: 200 });
    } else {
      return NextResponse.json({message:"No products found!"}, { status: 404 });
    }
  } else {
    // If no "limit" parameter is provided, return the list of all products
    return NextResponse.json(products, { status: 200 });
  }
}