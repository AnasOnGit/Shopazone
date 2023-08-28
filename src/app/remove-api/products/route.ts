import { NextResponse } from 'next/server';

export async function GET(request: any) {
  try {
    // Fetch the products JSON data
    const productsRes = await fetch(`${process.env.NEXT_URL}/products.json`);

    // Check if the fetch request was successful
    if (!productsRes.ok) {
      // Handle the case when the fetch request is not successful (e.g., 404 Not Found)
      return NextResponse.json({ message: "Error fetching products" }, { status: 500 });
    }

    // Parse the JSON data
    const products: any = await productsRes.json();

    // Extract the "limit" parameter from the query parameters
    const limit = request.nextUrl.searchParams.get('limit');

    if (limit) {
      // Parse the limit parameter as an integer
      const limitValue = parseInt(limit);

      if (!isNaN(limitValue) && limitValue > 0) {
        // If a valid limit value is provided, return the first "limitValue" products
        const limitedProducts = products.slice(0, limitValue);

        return NextResponse.json(limitedProducts, { status: 200 });
      } else {
        return NextResponse.json({ message: "Invalid limit parameter" }, { status: 400 });
      }
    } else {
      // If no "limit" parameter is provided, return the list of all products
      return NextResponse.json(products, { status: 200 });
    }
  } catch (error) {
    // Handle any other errors that might occur
    console.error("Error:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
