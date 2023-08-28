import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
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

    // Find the product with the specified ID
    const product = products.find((p: any) => p.id === parseInt(params.id));

    if (product) {
      // If a matching product is found, return it as JSON
      return NextResponse.json(product, { status: 200 });
    } else {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    // Handle any other errors that might occur
    console.error("Error:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
