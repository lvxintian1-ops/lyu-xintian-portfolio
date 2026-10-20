import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line",
        { yPercent: 110 },
        { yPercent: 0, duration: 1.2, ease: "power4.out", stagger: 0.12, delay: 0.15 }
      );
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.1, delay: 0.7 }
      );
      gsap.to(imgRef.current, {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative h-[100svh] overflow-hidden" id="top">
      <img
        ref={imgRef}
        src="images/spread-01.jpg"
        alt="Dimensions of Energy — exhibition proposal cover by Lyu Xintian"
        className="absolute inset-0 h-full w-full object-cover opacity-60 will-change-transform"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0a0a0a]" />

      <div className="relative z-10 flex h-full flex-col justify-between px-5 md:px-10 pt-24 pb-6">
        <div className="flex items-start justify-between hero-fade opacity-0">
          <p className="font-mono2 text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/60">
            Portfolio — 2025
          </p>
          <p className="font-mono2 text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/60 text-right">
            Curator / Researcher
          </p>
        </div>

        <div className="select-none">
          <div className="overflow-hidden">
            <h1 className="hero-line font-display font-light leading-[0.88] text-[17.5vw] md:text-[13vw] text-[#f3efe9]">
              LYU
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-line font-display font-light italic leading-[0.88] text-[17.5vw] md:text-[13vw] text-outline">
              XINTIAN
            </h1>
          </div>
        </div>

        <div>
          <div className="hero-fade opacity-0 mb-5 max-w-md">
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              An interactive portfolio of curatorial practice, academic research and art criticism —
              built around one question: <span className="text-[#f3efe9]">can art, in the language of energy,
              awaken our perception of the world?</span>
            </p>
          </div>
          <div className="hero-fade opacity-0 overflow-hidden border-y border-white/10 py-3 mask-fade-x">
            <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-mono2 text-[11px] tracking-[0.35em] uppercase text-white/50">
              {Array.from({ length: 2 }).map((_, k) => (
                <span key={k} className="flex gap-10">
                  <span>Dimensions of Energy</span><span className="text-[#a83226]">✳</span>
                  <span>Taikang Art Museum</span><span className="text-[#a83226]">✳</span>
                  <span>17 Artworks · 4 Chapters</span><span className="text-[#a83226]">✳</span>
                  <span>Creative Freedom in Uncertain Times</span><span className="text-[#a83226]">✳</span>
                  <span>Erosion and the Breath of the City</span><span className="text-[#a83226]">✳</span>
                  <span>Curating by Lyu Xintian</span><span className="text-[#a83226]">✳</span>
                </span>
              ))}
            </div>
          </div>
          <div className="hero-fade opacity-0 mt-5 flex items-center justify-between">
            <p className="font-mono2 text-[10px] tracking-[0.4em] uppercase text-white/40">
              01 — Dimensions of Energy ↓
            </p>
            <p className="font-mono2 text-[10px] tracking-[0.4em] uppercase text-white/40 animate-pulse">
              Scroll
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
