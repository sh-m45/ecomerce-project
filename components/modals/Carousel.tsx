"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    // title: "Discover Something New",
    // subtitle: "Explore our latest collection",
    bg: "/images/ImgSlider1.png",
    // accent: "bg-amber-400",
    // textAccent: "text-amber-400",
  },
  {
    id: 2,
    // title: "Built for Performance",
    // subtitle: "Speed, style, and substance combined",
    bg: "/images/ImgSlider2.png",
    // accent: "bg-pink-400",
    // textAccent: "text-pink-400",
  },
  {
    id: 3,
    title: "Crafted with Care",
    subtitle: "Every detail matters to us",
    bg: "/images/ImgSlider10.png",
    accent: "bg-lime-400",
    textAccent: "text-lime-400",
  },
  {
    id: 4,
    title: "Your Vision, Our Mission",
    subtitle: "Turning ideas into reality",
    bg: "/images/ImgSlider8.png",
    accent: "bg-yellow-300",
    textAccent: "text-yellow-300",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [autoplay, setAutoplay] = useState(true);

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating]
  );

  const prev = useCallback(() => {
    const index = (current - 1 + slides.length) % slides.length;
    goTo(index, "left");
  }, [current, goTo]);

  const next = useCallback(() => {
    const index = (current + 1) % slides.length;
    goTo(index, "right");
  }, [current, goTo]);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [autoplay, next]);

  const slide = slides[current];

  return (
    <div className="w-full select-none mt-17">
      {/* Main slide */}
      <div
        className={`relative overflow-hidden rounded-2xl h-72 md:h-96 transition-colors duration-500`}
        style={{
          backgroundImage: `url(${slide.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl" />

        {/* Content */}
        <div
          className={`absolute inset-0 flex flex-col justify-center px-10 md:px-16 transition-all duration-300
            ${isAnimating
              ? direction === "right"
                ? "-translate-x-8 opacity-0"
                : "translate-x-8 opacity-0"
              : "translate-x-0 opacity-100"
            }`}
        >
          {/* <span className={`text-xs font-semibold uppercase tracking-widest ${slide.textAccent} mb-3`}>
            {String(slide.id).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span> */}
          {/* <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
            {slide.title}
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-sm">
            {slide.subtitle}
          </p> */}
          {/* <button
            className={`mt-6 self-start px-5 py-2 rounded-full text-sm font-semibold
              ${slide.accent} text-slate-900 hover:opacity-90 transition-opacity`}
          >
            Learn more →
          </button> */}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
            bg-white/10 hover:bg-white/20 text-white flex items-center justify-center
            transition-colors backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
            bg-white/10 hover:bg-white/20 text-white flex items-center justify-center
            transition-colors backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full
                ${i === current
                  ? "w-6 h-2 bg-slate-800"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}