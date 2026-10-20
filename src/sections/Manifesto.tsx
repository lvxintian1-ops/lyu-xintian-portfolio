import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SENTENCE =
  "At a time when the climate crisis and digital civilization are intertwined, the flow of energy is both a physical phenomenon and a metaphor for human perception of the world.";

export default function Manifesto() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".manifesto-word",
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
            end: "bottom 55%",
            scrub: true,
          },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const words = SENTENCE.split(" ");

  return (
    <section ref={rootRef} className="relative px-5 md:px-10 py-28 md:py-44">
      <p className="font-mono2 text-[10px] tracking-[0.4em] uppercase text-[#a83226] mb-10">
        ( Introduction — Exhibition Proposal )
      </p>
      <p className="font-display font-light text-3xl md:text-6xl leading-[1.25] max-w-6xl text-[#f3efe9]">
        {words.map((w, i) => (
          <span key={i} className="manifesto-word inline-block mr-[0.28em]">
            {w}
          </span>
        ))}
      </p>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {[
          {
            k: "Theory",
            v: "Taking David Hawkins' energy hierarchy theory as a clue, the exhibition sees energy as the 'in-between' of man, nature, technology and spirit.",
          },
          {
            k: "Method",
            v: "Translated into the grey-and-white exhibition hall and light court of Taikang Art Museum — the space itself becomes the carrier of the energy map.",
          },
          {
            k: "Question",
            v: "We ask: can art, in the language of energy, evoke human perception of the new life and the flow of life, and empower people to resist the torrent of the outside world?",
          },
        ].map((c) => (
          <div key={c.k} className="border-t border-white/10 pt-4">
            <p className="font-mono2 text-[10px] tracking-[0.35em] uppercase text-[#a83226] mb-3">{c.k}</p>
            <p className="text-sm leading-relaxed text-white/60">{c.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
