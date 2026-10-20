import { useCallback, useEffect, useRef } from "react";
import type { Spread } from "@/data/content";

interface Props {
  items: Spread[];
  index: number;
  onClose: () => void;
  onNav: (next: number) => void;
}

export default function Lightbox({ items, index, onClose, onNav }: Props) {
  const touchStart = useRef<number | null>(null);
  const current = items[index];

  const prev = useCallback(() => onNav((index - 1 + items.length) % items.length), [index, items.length, onNav]);
  const next = useCallback(() => onNav((index + 1) % items.length), [index, items.length, onNav]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.documentElement.classList.add("lenis-stopped");
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, []);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[160] flex flex-col bg-black/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onTouchStart={(e) => {
        touchStart.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStart.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(dx) > 48) {
          if (dx < 0) next();
          else prev();
        }
        touchStart.current = null;
      }}
    >
      <div className="flex items-center justify-between px-5 md:px-10 py-4">
        <p className="font-mono2 text-xs tracking-[0.3em] text-white/60 uppercase">
          {current.label} — {current.caption}
        </p>
        <button
          onClick={onClose}
          data-cursor="hover"
          className="font-mono2 text-xs tracking-[0.3em] text-white/80 hover:text-[#a83226] transition-colors uppercase border border-white/20 hover:border-[#a83226] rounded-full px-4 py-2"
        >
          Close ✕
        </button>
      </div>
      <div className="relative flex-1 flex items-center justify-center min-h-0 px-14 md:px-24 pb-4">
        <img
          key={current.src}
          src={current.src}
          alt={current.caption}
          className="lightbox-img max-h-full max-w-full object-contain select-none"
          draggable={false}
        />
        <button
          onClick={prev}
          data-cursor="hover"
          aria-label="Previous"
          className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 text-white/70 hover:text-[#a83226] hover:border-[#a83226] transition-colors flex items-center justify-center text-lg"
        >
          ←
        </button>
        <button
          onClick={next}
          data-cursor="hover"
          aria-label="Next"
          className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 text-white/70 hover:text-[#a83226] hover:border-[#a83226] transition-colors flex items-center justify-center text-lg"
        >
          →
        </button>
      </div>
      <div className="flex justify-center gap-2 pb-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => onNav(i)}
            aria-label={`Go to ${i + 1}`}
            className={`h-1 rounded-full transition-all ${i === index ? "w-8 bg-[#a83226]" : "w-3 bg-white/25 hover:bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
