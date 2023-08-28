import { NextResponse } from 'next/server'

 
export async function GET(request: Request,{params}:{params: {id: string}}) {
  let productsRes = await fetch(`${process.env.NEXT_URL}/products.json`);
  let products:any = await productsRes.json(); 
  const product = products.find((p :any)  => p.id === parseInt(params.id));

    if (product) {
      // If a matching product is found, return it as JSON
      return NextResponse.json(product, { status: 200 });
    } else {
      // If no matching product is found, return a 404 error response
      return NextResponse.json({});
    }
}