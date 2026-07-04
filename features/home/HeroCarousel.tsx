"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/images/hero/slide-1.webp",
  "/images/hero/slide-2.webp",
  "/images/hero/slide-3.webp",
  "/images/hero/slide-4.webp",
  "/images/hero/slide-5.webp",
  "/images/hero/slide-6.webp",
  "/images/hero/slide-7.webp",
  "/images/hero/slide-8.webp",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const extendedImages = [...images, images[0]];
  const totalSlides = extendedImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (current === images.length) {
      setWithTransition(false);
      setCurrent(0);
    }
  };

  useEffect(() => {
    if (!withTransition && trackRef.current) {
      trackRef.current.getBoundingClientRect();
      requestAnimationFrame(() => {
        setWithTransition(true);
      });
    }
  }, [withTransition]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        ref={trackRef}
        onTransitionEnd={handleTransitionEnd}
        className={`flex h-full ${
          withTransition ? "transition-transform duration-[1200ms] ease-in-out" : ""
        }`}
        style={{
          width: `${totalSlides * 100}%`,
          transform: `translateX(-${current * (100 / totalSlides)}%)`,
        }}
      >
        {extendedImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative h-full"
            style={{ width: `${100 / totalSlides}%` }}
          >
            <Image src={src} alt="" fill priority={index === 0} className="object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-bg/70" />
    </div>
  );
}