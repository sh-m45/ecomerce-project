"use client";

import Carousel from "@/components/modals/Carousel";
import { Fragment } from "react/jsx-runtime";
import { useProducts } from "./hooks/useProducts";
import MainCategories from "@/components/home/categories/mainCategories";
import BestSeller from "@/components/home/bestSeller";
import Electronics from "@/components/home/electronics";
import Fashion from "@/components/home/fashion";
import { Beauty } from "@/components/home/beauty";
import SmartPhones from "@/components/home/smartPhones";
import Stores from "@/components/home/stores";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <MainCategories />
      <BestSeller />
      <Electronics />
      <Fashion />
      <Beauty />
      <SmartPhones />
      <Stores />
      <Footer />
    </Fragment>

  );
}
