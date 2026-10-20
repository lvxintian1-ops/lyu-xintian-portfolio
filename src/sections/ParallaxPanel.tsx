import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  image: string;
  quote: string;
  alt: string;
}

export default function ParallaxPanel({ image, quote, alt }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 60%" },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      <img
        ref={imgRef}
        src={image}
        alt={alt}
        className="absolute inset-0 h-[124%] w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div
        ref={textRef}
        className="relative z-10 h-full flex items-center justify-center px-6 opacity-0"
      >
        <p className="font-display italic font-light text-2xl md:text-5xl text-[#f3efe9] text-center max-w-4xl leading-snug">
          {quote}
        </p>
      </div>
    </section>
  );
}
