import { useEffect, useState } from "react";

const links = [
  { id: "energy", label: "Dimensions of Energy" },
  { id: "works", label: "Worklist" },
  { id: "paper", label: "Research" },
  { id: "essay", label: "Essay" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[130] flex items-center justify-between px-5 md:px-10 transition-all duration-500 ${
          scrolled ? "py-3 bg-black/70 backdrop-blur-md border-b border-white/5" : "py-5"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-cursor="hover"
          className="font-display text-lg tracking-wide text-[#f3efe9]"
        >
          Lyu Xintian<span className="text-[#a83226]">.</span>
        </button>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-cursor="hover"
              className="group relative font-mono2 text-[11px] tracking-[0.25em] uppercase text-white/60 hover:text-[#f3efe9] transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#a83226] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          data-cursor="hover"
          className="md:hidden font-mono2 text-[11px] tracking-[0.25em] uppercase text-white/70 border border-white/20 rounded-full px-4 py-2"
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-[125] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map((l, i) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="font-display text-3xl text-[#f3efe9] active:text-[#a83226]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
