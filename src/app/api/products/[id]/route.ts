import { NextResponse } from 'next/server'
import products from "../../products.json"
 
export async function GET(request: Request,{params}:{params: {id: string}}) {
    const product = products.find(p => p.id === parseInt(params.id));

    if (product) {
      // If a matching product is found, return it as JSON
      return NextResponse.json(product, { status: 200 });
    } else {
      // If no matching product is found, return a 404 error response
      return NextResponse.json({});
    }
}