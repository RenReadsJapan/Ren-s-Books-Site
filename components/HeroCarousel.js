"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/hero-ren-friends.png",
    alt: "Ren and his friends walking together under cherry blossoms",
  },
  {
    src: "/images/hero-everyday-together.png",
    alt: "Yui, Kaoru, Daichi, and Takumi sharing snacks outside a convenience store in Osaka",
  },
  {
    src: "/images/hero-shinji.png",
    alt: "Shinji standing outside an old house at dusk, holding a flashlight",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative rounded-md overflow-hidden aspect-[16/9]"
      style={{ border: "1px solid var(--rule)" }}
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={i === 0}
          className="object-cover transition-opacity duration-1000"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className="w-1.5 h-1.5 rounded-full transition-opacity"
            style={{
              background: "var(--paper-text)",
              opacity: i === index ? 1 : 0.35,
            }}
          />
        ))}
      </div>
    </div>
  );
}
