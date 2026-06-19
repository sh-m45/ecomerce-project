"use Client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useMainCategories } from "@/app/hooks/useMainCategories";

export default function mainCategories() {
  const { data, isLoading, error } = useMainCategories();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft]   = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  return (
    <div className="relative w-full bg-white py-4 px-2 ">

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
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth px-6 scrollbar-none mx-5"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {data?.map((item:any, index:number) => (
          <button
            key={index}
            className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-pointer"
          >
            {/* Image tile */}
            <div className="w-17 h-20 rounded-2xl overflow-hidden bg-gray-50
              flex items-center justify-center border border-gray-100
              group-hover:shadow-md transition-shadow duration-200">
              <Image
                src= {`/images/categories/${index}.jpg`}
                alt={item.name}
                width={80}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Label */}
            <span className="text-xs text-center text-gray-700 font-medium
              max-w-[80px] leading-tight group-hover:text-orange-500 transition-colors">
              {item.name}
            </span>
          </button>
        ))}
      </div>

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