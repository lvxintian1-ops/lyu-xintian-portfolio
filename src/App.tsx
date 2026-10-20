import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Lightbox from "@/components/Lightbox";
import Hero from "@/sections/Hero";
import Manifesto from "@/sections/Manifesto";
import Exhibition from "@/sections/Exhibition";
import WorkIndex from "@/sections/WorkIndex";
import ParallaxPanel from "@/sections/ParallaxPanel";
import Paper from "@/sections/Paper";
import Essay from "@/sections/Essay";
import Footer from "@/sections/Footer";
import { exhibitionSpreads } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [lb, setLb] = useState<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (loading) lenisRef.current?.stop();
    else {
      lenisRef.current?.start();
      ScrollTrigger.refresh();
    }
  }, [loading]);

  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const handleLoaded = useCallback(() => setLoading(false), []);

  return (
    <div className="grain min-h-screen bg-[#0a0a0a] text-[#f3efe9]">
      <Cursor />
      {loading && <Preloader onDone={handleLoaded} />}
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Exhibition onOpen={setLb} />
        <WorkIndex />
        <ParallaxPanel
          image="images/detail-yellow.jpg"
          alt="Olafur Eliasson — Room For One Color"
          quote="Illumination is not just what we see, but how we inhabit and transform perception itself."
        />
        <Paper />
        <ParallaxPanel
          image="images/detail-stars.jpg"
          alt="Yuan Long — Sustainable Resonance"
          quote="The digital age need not be dissonant — it can also resonate in harmony with nature's cadence."
        />
        <Essay />
        <Footer />
      </main>
      {lb !== null && (
        <Lightbox items={exhibitionSpreads} index={lb} onClose={() => setLb(null)} onNav={setLb} />
      )}
    </div>
  );
}
