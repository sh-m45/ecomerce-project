"use client";

import { useQuery } from "@tanstack/react-query";
import { getBeauty, getSkinCare } from "../services/beauty";

export const useBeauty= () => {
  return useQuery({
    queryKey: ["getBeauty"],
    queryFn: getBeauty,
  });
};

export const useSkincare= () => {
  return useQuery({
    queryKey: ["getSkinCare"],
    queryFn: getSkinCare,
  });
};