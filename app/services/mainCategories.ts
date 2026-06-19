// services/mainCategories.ts

export const mainCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");

  if (!response.ok) {
    throw new Error("Failed to fetch main categories");
  }

  return response.json();
};