import { useEffect, useRef, type ReactNode } from "react";
import { motion, animate, useInView } from "framer-motion";

export const Reveal = ({
  children,
  delay = 0,
  y = 40,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => (el.textContent = Math.round(v) + suffix),
    });
    return () => controls.stop();
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
};

export const PageHero = ({
  eyebrow,
  title,
  accent,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
  image: string;
}) => (
  <section className="theme-dark relative min-h-[70vh] flex items-end overflow-hidden">
    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
    <div className="absolute inset-0 blueprint opacity-60" />
    <div className="container-x relative pb-20 pt-48 w-full">
      <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="eyebrow mb-6">
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="h-display text-6xl sm:text-7xl md:text-9xl"
      >
        {title} <span className="text-amber">{accent}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 max-w-2xl text-lg text-bone/75 leading-relaxed"
      >
        {text}
      </motion.p>
    </div>
  </section>
);

export const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="square" />
  </svg>
);
