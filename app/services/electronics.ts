import axios from "axios";

export const getElectronics = async () => {
  const { data } = await axios.get(
    "https://dummyjson.com/products/category/mobile-accessories"
  );

//   if(!data.ok){
//     throw new Error("Failed to fetch main categories");
//   }
  return data.products;
};