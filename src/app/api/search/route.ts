import { NextResponse } from 'next/server';


interface Product {
  title: string;
  category: string;
  // Add other fields as needed
}

export async function GET(request: any) {
  let productsRes = await fetch(`${process.env.NEXT_URL}/products.json`);
  let products:any = await productsRes.json();
  // Extract the search term and category from the query parameters
  const searchTerm = request.nextUrl.searchParams.get('search-term');
  const category = request.nextUrl.searchParams.get('category');

  // Split the search term into individual words
  const searchWords = searchTerm ? searchTerm.split(" ") : [];

  // Perform the search
  const searchResults = searchProducts(products, searchWords, category);

  // Check if there are search results
  if (searchResults.length > 0) {
    // Return the search results as JSON with a 200 status code
    console.log(searchResults, { status: 200 });
    return NextResponse.json(searchResults, { status: 200 });
  } else {
    // Return an empty JSON response with a 404 status code
    return NextResponse.json({message:"No products found!"}, { status: 404 });
  }
  // Function to filter products based on the search term and category
  function searchProducts(products: Product[], searchWords: string[], category: string | null): Product[] {
    return products.filter(product => {
      // Check if any word in the search term is found in the product title
      const matchesSearchTerm = searchWords.length === 0 ||
        searchWords.some(word => product.title.toLowerCase().includes(word.toLowerCase()));
  
      // Check if the product belongs to the specified category
      const matchesCategory = !category || product.category.toLowerCase() === category.toLowerCase();
  
      // Return true if both conditions are met
      return matchesSearchTerm && matchesCategory;
    });
  }
}





