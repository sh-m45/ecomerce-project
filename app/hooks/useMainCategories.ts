"use client";

import { useQuery } from "@tanstack/react-query";
import { mainCategories } from "../services/mainCategories";

export const useMainCategories = () => {
  return useQuery({
    queryKey: ["mainCategories"],
    queryFn: mainCategories,
  });
};