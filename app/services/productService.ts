// services/productService.ts

export const getProducts = async () => {
  const response = await fetch("https://fake-store-api.mock.beeceptor.com/api/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};