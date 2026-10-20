import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  onDone: () => void;
}

export default function Preloader({ onDone }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(rootRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
          onComplete: onDone,
        });
      },
    });
    tl.to(counter, {
      v: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        if (numRef.current) numRef.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
        if (barRef.current) barRef.current.style.transform = `scaleX(${counter.v / 100})`;
      },
    });
    tl.to({}, { duration: 0.25 });
    return () => {
      tl.kill();
    };
  }, [onDone]);

  return (
    <div ref={rootRef} className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-[#0a0a0a]">
      <p className="font-mono2 text-[10px] tracking-[0.4em] text-[#a83226] uppercase mb-6">Curating the energy</p>
      <div className="overflow-hidden">
        <h1 className="font-display text-[13vw] md:text-[7vw] leading-none font-light text-[#f3efe9]">
          DIMENSIONS<span className="text-[#a83226]">·</span>OF<span className="text-[#a83226]">·</span>ENERGY
        </h1>
      </div>
      <div className="mt-10 w-56 h-px bg-white/10 overflow-hidden">
        <div ref={barRef} className="h-full w-full bg-[#a83226] origin-left scale-x-0" />
      </div>
      <p className="mt-4 font-mono2 text-xs text-white/50">
        <span ref={numRef}>000</span> %
      </p>
    </div>
  );
}
