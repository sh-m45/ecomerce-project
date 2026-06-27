import axios from "axios";

export const getElectronics = async () => {
  const { data } = await axios.get(
    "https://dummyjson.com/products/category/mobile-accessories"
  );

  return data.products;
};


export const getSmartphones = async () => {
  const { data } = await axios.get(
    "https://dummyjson.com/products/category/smartphones"
  );

  return data.products;
};