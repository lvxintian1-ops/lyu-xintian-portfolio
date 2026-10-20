import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { paperSections } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Paper() {
  const rootRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".paper-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
      });
      gsap.fromTo(
        ".stat-num",
        { textContent: 0 },
        {
          textContent: 44,
          duration: 1.6,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: { trigger: ".stat-block", start: "top 80%" },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="paper" className="relative px-5 md:px-10 py-24 md:py-36">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14">
        <div className="lg:sticky lg:top-28 self-start paper-reveal opacity-0">
          <p className="font-mono2 text-[10px] tracking-[0.4em] uppercase text-[#a83226] mb-4">
            Project 02 — Academic Research
          </p>
          <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.05] text-[#f3efe9]">
            Creative Freedom in{" "}
            <span className="italic text-outline">Uncertain Times</span>
          </h2>
          <p className="mt-6 text-sm text-white/60 leading-relaxed max-w-md">
            Cultural expression pathways and institutional support for young artists under economic
            pressure — a thesis on how artists balance survival strategies with creative autonomy,
            from digital platforms to public funding systems.
          </p>

          <div className="stat-block mt-10 grid grid-cols-2 gap-6">
            <div className="border-l-2 border-[#a83226] pl-4">
              <p className="font-display text-5xl md:text-6xl text-[#f3efe9]">
                <span className="stat-num">0</span>
                <span className="text-[#a83226]">%</span>
              </p>
              <p className="mt-2 text-xs text-white/50 leading-relaxed">
                lower median annual income of graduate artists vs. other professions
              </p>
            </div>
            <div className="border-l-2 border-white/15 pl-4">
              <p className="font-display text-5xl md:text-6xl text-[#f3efe9]">4+2</p>
              <p className="mt-2 text-xs text-white/50 leading-relaxed">
                chapters plus conclusion, from economic precarity to institutional innovation
              </p>
            </div>
          </div>

          <div className="mt-10 border border-white/10 rounded-sm overflow-hidden group" data-cursor="view">
            <img
              src="images/page-11.jpg"
              alt="Thesis title page"
              className="w-full max-w-xs mx-auto transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="paper-reveal opacity-0">
          <p className="font-mono2 text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6">
            Key passages — click to expand
          </p>
          <div className="border-t border-white/10">
            {paperSections.map((s, i) => {
              const isOpen = open === i;
              return (
                <div key={s.no} className="border-b border-white/10">
                  <button
                    data-cursor="hover"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-baseline gap-4 md:gap-6 py-5 text-left group"
                  >
                    <span className="font-mono2 text-[10px] text-[#a83226] shrink-0">§{s.no}</span>
                    <span
                      className={`font-display text-lg md:text-2xl leading-snug transition-colors duration-300 ${
                        isOpen ? "text-[#f3efe9]" : "text-white/45 group-hover:text-white/85"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span className="ml-auto font-mono2 text-lg text-white/40">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pl-10 md:pl-16 pr-4 text-sm text-white/60 leading-relaxed max-w-2xl">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-xs text-white/35 font-mono2 leading-relaxed">
            Full thesis available in the PDF portfolio — references include Art Basel & UBS, Arts
            Council England, OECD, OCAD University and the Ministry of Culture, Sports and Tourism.
          </p>
        </div>
      </div>
    </section>
  );
}
