import { ArrowDown, Car, ChevronLeft, ChevronRight, Heart, Plus, Star } from "lucide-react";
import { useRef, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import styles from "./home.module.css";
import { useElectronics } from "@/app/hooks/useElectronics";
export default function Electronics() {
    const { data, isLoading, error } = useElectronics();
 
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const scroll = (dir: "left" | "right") => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
        //console.log("data is electronics : ", data)
    };

    const onScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setShowLeft(el.scrollLeft > 10);
        setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
        
    };
    return (
        <Fragment>
            <div className="relative w-full py-4 px-2 mt-5 ">
                <div className="flex justify-between px-4 my-5">
                    <h2 className="text-2xl font-bold text-gray-800 ml-7 pl-6 mb-3 font-sans antialiased ">Electronics picks</h2>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">VIEW ALL</button>
                </div>
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
                    className="flex gap-4 overflow-x-auto scroll-smooth px-6 scrollbar-none mx-5"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {data?.map((item: any, index: number) => (
                        <button
                            key={index}
                            className="flex flex-col gap-2 flex-shrink-0 group cursor-pointer rounded-lg pb-5 w-55 border border-gray-200 hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="">
                                <div className={styles.productCard}>
                                    <div className={styles.imageProductCard}>
                                        <img src= {item.images[0]} alt="Girl in a jacket" className="w-full h-full" />
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
                                        {item.title}
                                    </p>
                                    <div className="text-sm font-semibold text-gray-900 ">
                                        <div className="flex  bg-gray-100 rounded-sm w-22 h-5 justify-center items-center ml-1">
                                            <Star className="fill-green-400 text-green-400 pr-1" size={18} /> {Number(item.rating.toFixed(1))} <span className="text-gray-500 pl-1"> (14.1k)</span>
                                        </div>
                                    </div>
                                    <div className="text-lg text-gray-900 font-semibold mt-1 ml-1 text-start">
                                        <span className="text-sm font-normal ">EGP</span>{Number((item.price * ( 1 - item.discountPercentage / 100 )).toFixed(2))} 
                                        <span className="text-xs line-through text-gray-500 font-normal ml-1">{item.price}</span>
                                        <span className="text-sm text-green-600 font-bold ml-1">{Number(item.discountPercentage).toFixed(1)}%</span>
                                    </div>

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
        </Fragment>
    )
}