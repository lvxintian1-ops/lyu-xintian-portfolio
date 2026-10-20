import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function WorkIndex() {
  const rootRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-row",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.04,
          scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, [filter]);

  const shown = filter ? works.filter((w) => w.chapter === filter) : works;
  const chapterName = (n: string) =>
    ({ "01": "Flowing Dawn", "02": "Undercurrent", "03": "Voice of Wind", "04": "Light & Shadow" })[n];

  return (
    <section ref={rootRef} id="works" className="relative px-5 md:px-10 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <p className="font-mono2 text-[10px] tracking-[0.4em] uppercase text-[#a83226] mb-4">
            Index — 17 Artworks
          </p>
          <h2 className="font-display font-light text-5xl md:text-7xl text-[#f3efe9]">
            The <span className="italic text-outline">Worklist</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {["01", "02", "03", "04"].map((c) => (
            <button
              key={c}
              data-cursor="hover"
              onClick={() => setFilter(filter === c ? null : c)}
              className={`font-mono2 text-[10px] tracking-[0.25em] uppercase rounded-full border px-4 py-2 transition-colors duration-300 ${
                filter === c
                  ? "border-[#a83226] bg-[#a83226] text-[#f3efe9]"
                  : "border-white/15 text-white/50 hover:border-[#a83226]/70 hover:text-white"
              }`}
            >
              Ch.{c}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        {shown.map((w) => (
          <div
            key={w.no}
            data-cursor="hover"
            className="work-row group relative grid grid-cols-[3rem_1fr_auto] md:grid-cols-[5rem_1.2fr_2fr_8rem] items-center gap-3 md:gap-8 py-4 md:py-5 border-b border-white/10 px-1 transition-colors duration-300 hover:bg-white/[0.03]"
          >
            <span className="font-mono2 text-xs text-white/35 group-hover:text-[#a83226] transition-colors">
              {w.no}
            </span>
            <span className="font-display text-xl md:text-3xl text-white/75 group-hover:text-[#f3efe9] group-hover:translate-x-2 transition-all duration-300">
              {w.artist}
            </span>
            <span className="hidden md:block text-sm text-white/45 italic font-display truncate">
              “{w.title}”
            </span>
            <span className="text-right font-mono2 text-[10px] md:text-xs text-white/35">
              <span className="md:hidden block italic font-display text-xs text-white/50 mb-1">“{w.title}”</span>
              {w.year}
              <span className="block text-[#a83226]/70 mt-0.5">{chapterName(w.chapter)}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
