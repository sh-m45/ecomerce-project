"use client";

import { useQuery } from "@tanstack/react-query";
import { getElectronics } from "../services/electronics";

export const useElectronics = () => {
  return useQuery({
    queryKey: ["getElectronics"],
    queryFn: getElectronics,
  });
};