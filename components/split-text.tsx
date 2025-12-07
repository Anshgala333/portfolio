"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chars = ref.current.querySelectorAll(".char");
        gsap.set(ref.current, { opacity: 0 });


    gsap.set(chars, {
      opacity: 0,
      y: 100,
      rotationX: -90,
    });
    // Initial hidden state
   
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(ref.current, { opacity: 1, duration: 0.01 });

          gsap.to(chars, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: duration,
            delay: delay,
            stagger: 0.09,
            ease: "power4.out",
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [delay, duration]);

  return (
    <div ref={ref} className="overflow-hidden">
      <div className={`flex flex-wrap items-center gap-0.5 ${className}`}>
        {text.split("").map((char, index) => {
          const isSpace = char === " ";
          const isFirstPart = index < 4;

          return (
            <span
              key={`${char}-${index}`}
              className={`char inline-block ${isSpace ? "w-2 md:w-3" : ""} ${
                isFirstPart ? "text-white" : "text-[#F46C38]"
              }`}
              style={{
                perspective: "1000px",
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              {isSpace ? "\u00A0" : char}
            </span>
          );
        })}
      </div>
    </div>
  );
}
