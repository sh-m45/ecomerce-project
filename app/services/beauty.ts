import axios from "axios";
import { BeautyResponse } from "../types/beauty.interface";
import { SkincareResponse } from "../types/skincare.interface";

export const getBeauty= async () => {
  const { data } = await axios.get<BeautyResponse>(
    "https://dummyjson.com/products/category/beauty"
  );

  return data.products;
};

export const getSkinCare= async () => {
  const { data } = await axios.get<SkincareResponse>(
    "https://dummyjson.com/products/category/skin-care"
  );

  return data.products;
};