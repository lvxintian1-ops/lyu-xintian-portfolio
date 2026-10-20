import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { essayPages } from "@/data/content";
import Lightbox from "@/components/Lightbox";

gsap.registerPlugin(ScrollTrigger);

export default function Essay() {
  const rootRef = useRef<HTMLElement>(null);
  const [lb, setLb] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".essay-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%" },
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="essay" className="relative px-5 md:px-10 py-24 md:py-36">
      <div className="max-w-5xl">
        <p className="essay-reveal opacity-0 font-mono2 text-[10px] tracking-[0.4em] uppercase text-[#a83226] mb-4">
          Project 03 — Art Criticism
        </p>
        <h2 className="essay-reveal opacity-0 font-display font-light text-4xl md:text-6xl leading-[1.08] text-[#f3efe9]">
          "Erosion and the Breath of the City"{" "}
          <span className="italic text-white/45 block text-2xl md:text-4xl mt-3">
            — Experiencing Eva Nielsen's Insolare in Xiamen
          </span>
        </h2>

        <div className="essay-reveal opacity-0 mt-10 grid md:grid-cols-[1.4fr_1fr] gap-10">
          <div className="space-y-5 text-sm md:text-base text-white/65 leading-relaxed">
            <p>
              Growing up in Xiamen, I've long grown used to the salt in the air. Iron railings rust
              quickly; houses by the sea fade faster than those inland. In September 2025, walking
              into Three Shadows Photography Art Centre in Xiamen, I encountered Eva Nielsen's
              <em className="text-[#f3efe9]"> Insolare</em> — and understood light as both a gentle
              and cruel force.
            </p>
            <p>
              In Nielsen's practice, light surpasses symbolism — it becomes a force that shapes both
              space and perception. Dawn's radiance spreads a golden hue across the canvas; faded
              specks left by exposure resemble the scorched edges of old film. The piece becomes a
              metaphor for the way industrialization reshapes and confines urban vision.
            </p>
            <p className="font-display italic text-lg md:text-xl text-[#f3efe9] border-l-2 border-[#a83226] pl-5">
              "Erosion is not destruction but transformation: like seawater carving stone, like memory
              thinning and returning, endlessly reborn in the light."
            </p>
            <p className="text-xs text-white/35 font-mono2">
              Three Shadows Photography Art Centre, Xiamen — September 2025
            </p>
          </div>

          <div className="space-y-5">
            {essayPages.map((p, i) => (
              <div
                key={p.src}
                data-cursor="view"
                onClick={() => setLb(i)}
                className="group relative overflow-hidden rounded-sm border border-white/10 hover:border-[#a83226]/70 transition-colors duration-300"
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <p className="font-mono2 text-[10px] tracking-[0.3em] text-[#f3efe9] uppercase">
                    {p.label} — Click to read
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lb !== null && (
        <Lightbox items={essayPages} index={lb} onClose={() => setLb(null)} onNav={setLb} />
      )}
    </section>
  );
}
