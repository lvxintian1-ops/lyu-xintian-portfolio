import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { exhibitionSpreads, chapters } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  onOpen: (index: number) => void;
}

export default function Exhibition({ onOpen }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const track = trackRef.current!;
      const getDist = () => track.scrollWidth - window.innerWidth;
      const tween = gsap.to(track, {
        x: () => -getDist(),
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: () => `+=${getDist()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={rootRef} id="energy" className="relative overflow-hidden">
      <div className="px-5 md:px-10 pt-24 md:pt-32 pb-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono2 text-[10px] tracking-[0.4em] uppercase text-[#a83226] mb-4">
            Project 01 — Exhibition Proposal
          </p>
          <h2 className="font-display font-light text-5xl md:text-8xl leading-[0.95] text-[#f3efe9]">
            DIMENSIONS
            <br />
            <span className="italic text-outline">of Energy</span>
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-sm text-white/60 leading-relaxed">
            A group exhibition in four chapters at Taikang Art Museum — 17 works tracing energy from
            the flowing dawn to the realm of light and shadow.
          </p>
          <p className="mt-4 font-mono2 text-[10px] tracking-[0.3em] uppercase text-white/40">
            ⟵ Scroll / swipe to explore the proposal ⟶
          </p>
        </div>
      </div>

      {/* Horizontal spread gallery */}
      <div className="md:h-[78vh] md:overflow-hidden overflow-x-auto overflow-y-hidden md:pb-0 pb-6">
        <div
          ref={trackRef}
          className="flex w-max gap-5 md:gap-8 px-5 md:px-10 items-center will-change-transform"
        >
          {exhibitionSpreads.map((s, i) => (
            <figure key={s.src} className="group relative shrink-0">
              <div
                data-cursor="view"
                onClick={() => onOpen(i)}
                className="relative overflow-hidden rounded-sm border border-white/10 transition-colors duration-300 group-hover:border-[#a83226]/70"
              >
                <img
                  src={s.src}
                  alt={s.caption}
                  loading="lazy"
                  className="h-[42vh] md:h-[62vh] w-auto aspect-[2/1] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/85 to-transparent">
                  <p className="font-mono2 text-[10px] tracking-[0.3em] text-[#a83226]">{s.label}</p>
                  <p className="text-sm text-[#f3efe9] mt-1">{s.caption}</p>
                </figcaption>
              </div>
            </figure>
          ))}
          <div className="shrink-0 w-[40vw] md:w-[24vw] flex items-center">
            <p className="font-display italic text-2xl md:text-4xl text-white/30 leading-snug">
              "Let the audience understand the existence and change of natural energy — and think about
              their relationship with the outside world."
            </p>
          </div>
        </div>
      </div>

      {/* Chapters accordion */}
      <div className="px-5 md:px-10 py-24 md:py-32">
        <p className="font-mono2 text-[10px] tracking-[0.4em] uppercase text-[#a83226] mb-8">
          Curatorial Logic — Four Chapters
        </p>
        <div className="border-t border-white/10">
          {chapters.map((c, i) => {
            const openItem = active === i;
            return (
              <div key={c.no} className="border-b border-white/10">
                <button
                  data-cursor="hover"
                  onClick={() => setActive(openItem ? null : i)}
                  className="w-full flex items-center gap-5 md:gap-10 py-6 md:py-8 text-left group"
                >
                  <span className="font-mono2 text-xs text-[#a83226] w-10">{c.no}</span>
                  <span
                    className={`font-display font-light text-2xl md:text-5xl transition-colors duration-300 ${
                      openItem ? "text-[#f3efe9]" : "text-white/40 group-hover:text-white/80"
                    }`}
                  >
                    {c.title}
                  </span>
                  <span className="ml-auto font-mono2 text-xl md:text-2xl text-white/40 transition-transform duration-300">
                    {openItem ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: openItem ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pl-14 md:pl-20 pr-4 grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-mono2 text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">{c.en}</p>
                        <p className="text-sm text-white/65 leading-relaxed max-w-md">{c.desc}</p>
                      </div>
                      <ul className="space-y-1.5">
                        {c.works.map((w) => (
                          <li key={w} className="text-sm text-white/50 font-mono2">
                            <span className="text-[#a83226] mr-2">—</span>
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {[
            {
              tag: "Public Program · Workshop",
              title: "Tethered Wind — Kite-Making Experience",
              body: "Participants physically engage with one of nature's most subtle forces. The kite string becomes a metaphor for the delicate yet resilient connections between people — approximately 2 hours, from structure demonstration to outdoor flying and reflection.",
            },
            {
              tag: "Public Program · Keynote",
              title: "The Energy of Perception — Olafur Eliasson",
              body: "A keynote on how energy — natural, psychological and social — intersects with human perception. Drawing from The Weather Project and Ice Watch, Eliasson reflects on whether art can still awaken our awareness in a world saturated by digital systems.",
            },
          ].map((p) => (
            <div
              key={p.title}
              data-cursor="hover"
              className="group border border-white/10 rounded-sm p-7 hover:border-[#a83226]/60 transition-colors duration-300 bg-white/[0.02]"
            >
              <p className="font-mono2 text-[10px] tracking-[0.3em] uppercase text-[#a83226] mb-4">{p.tag}</p>
              <h3 className="font-display text-2xl md:text-3xl text-[#f3efe9] mb-4 leading-snug group-hover:italic transition-all">
                {p.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
