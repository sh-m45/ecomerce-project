"use client";

import { useQuery } from "@tanstack/react-query";
import { getElectronics, getSmartphones } from "../services/electronics";

export const useElectronics = () => {
  return useQuery({
    queryKey: ["getElectronics"],
    queryFn: getElectronics,
  });
};

export const useSmartphones = () => {
  return useQuery({
    queryKey: ["getSmartphones"],
    queryFn: getSmartphones,
  });
};