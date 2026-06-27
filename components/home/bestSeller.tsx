import { Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { ArrowDown, Car, ChevronLeft, ChevronRight, Heart, Plus, Star } from "lucide-react";
import Image from "next/image";
import styles from "./home.module.css";

export default function BestSeller() {
    const data = [{ name: "Product 1" }, { name: "Product 2" }, { name: "Product 3" }, { name: "Product 4" }, { name: "Product 5" }, { name: "Product 6" }];
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const scroll = (dir: "left" | "right") => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === "right" ? 500 : -500, behavior: "smooth" });
    };

    const onScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setShowLeft(el.scrollLeft > 10);
        setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    };

    return (
        <div className="relative w-full py-4 px-2 mt-5 ">
            <h2 className="text-2xl font-bold text-gray-800 ml-2 pl-3 mb-3 font-sans antialiased ">Recommended for you</h2>
            {/* Left arrow */}
            {showLeft && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute rounded-2xl left-3 top-1/2 -translate-y-1/2 z-10
            w-9 h-9 bg-white shadow-md flex items-center justify-center border border-gray-200
            hover:bg-gray-50 transition-colors"
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={20} className="text-gray-600" />
                </button>
            )}

            {/* Scrollable row */}
            {/* <div className="w-full bg-gray-800 "> */}
            <div
                ref={scrollRef}
                onScroll={onScroll}
                className="flex gap-4 overflow-x-auto scroll-smooth px-1 scrollbar-none"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {data?.map((item: any, index: number) => (
                    <button
                        key={index}
                        className="flex flex-col gap-2 flex-shrink-0 group cursor-pointer rounded-lg pb-5 w-[15.68%] border border-gray-200 hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="">
                            <div className={styles.productCard}>
                                <div className={styles.imageProductCard}>
                                    <img src="/images/ipad.jpg" alt="Girl in a jacket" className="w-full h-full" />
                                </div>

                                <div className={styles.heartIconCard} >
                                    <Heart className="fill-white-400 text-dark-400" size={22} />
                                </div>

                                <div className={styles.plusIconCard} >
                                    <Plus className="fill-white-400 text-dark-400 " size={22} />
                                </div>

                            </div>

                            {/* Label */}
                            <div className="px-1 pb-2">
                                <p className="text-md text-start text-gray-700 font-medium leading-tight mb-2 ml-1">
                                    iPad 2025 A16 11-inch Wi-Fi 128GB Silver - Middle East Version
                                </p>
                                <div className="text-sm font-semibold text-gray-900 ">
                                    <div className="flex  bg-gray-100 rounded-sm w-22 h-5 justify-center items-center ml-1">
                                        <Star className="fill-green-400 text-green-400 pr-1" size={18} /> 4.6 <span className="text-gray-500 pl-1"> (14.1k)</span>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-900 font-semibold mt-1 ml-1 text-start">
                                    <span className="text-sm font-normal">EGP</span> 599.99 <span className="text-sm line-through text-gray-500 font-normal">EGP 699.99</span>
                                </p>

                                <div className={styles.animationCard}>
                                    <div className={styles.box}>
                                        <div className="flex items-center">
                                            <Car className="fill-blue-400 text-blue-400 pr-1" size={15} />
                                            <p>Free Delivery</p>
                                        </div>
                                    </div>

                                    <div className={styles.box2}>
                                        <div className="flex items-center">
                                            <ArrowDown className="fill-red-400 text-red-400 pr-1" size={15} />
                                            <p> Lowest Price in 7 days</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
            {/* </div> */}

            {/* Right arrow */}
            {showRight && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute rounded-2xl right-3 top-1/2 -translate-y-1/2 z-10
            w-9 h-9 bg-white shadow-md flex items-center justify-center border border-gray-200
            hover:bg-gray-50 transition-colors"
                    aria-label="Scroll right"
                >
                    <ChevronRight size={20} className="text-gray-600" />
                </button>
            )}

        </div>
    );
}