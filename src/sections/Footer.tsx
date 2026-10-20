import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-line",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={rootRef} id="contact" className="relative px-5 md:px-10 pt-28 md:pt-40 pb-10 overflow-hidden">
      <div className="select-none">
        <div className="overflow-hidden">
          <p className="footer-line font-display font-light text-[13vw] md:text-[9vw] leading-[0.9] text-[#f3efe9]">
            LET'S TALK
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="footer-line font-display font-light italic text-[13vw] md:text-[9vw] leading-[0.9] text-outline-red">
            ABOUT ENERGY
          </p>
        </div>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-10 border-t border-white/10 pt-8">
        <div>
          <p className="font-mono2 text-[10px] tracking-[0.35em] uppercase text-[#a83226] mb-3">About</p>
          <p className="text-sm text-white/60 leading-relaxed max-w-xs">
            Lyu Xintian — curator and arts researcher. This interactive portfolio gathers an
            exhibition proposal, an academic thesis and a piece of art criticism into one continuous
            flow of energy.
          </p>
        </div>
        <div>
          <p className="font-mono2 text-[10px] tracking-[0.35em] uppercase text-[#a83226] mb-3">Index</p>
          <ul className="space-y-2 text-sm text-white/60">
            {[
              ["energy", "Dimensions of Energy"],
              ["works", "Worklist — 17 artworks"],
              ["paper", "Creative Freedom in Uncertain Times"],
              ["essay", "Erosion and the Breath of the City"],
            ].map(([id, label]) => (
              <li key={id}>
                <button
                  data-cursor="hover"
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-[#a83226] transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:items-end justify-between gap-6">
          <button
            data-cursor="hover"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono2 text-[11px] tracking-[0.3em] uppercase border border-white/20 rounded-full px-6 py-3 hover:border-[#a83226] hover:text-[#a83226] transition-colors"
          >
            ↑ Back to top
          </button>
          <p className="font-mono2 text-[10px] tracking-[0.3em] uppercase text-white/30">
            © 2025 Lyu Xintian — Curated with energy
          </p>
        </div>
      </div>
    </footer>
  );
}
