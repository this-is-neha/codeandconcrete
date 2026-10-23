import { Counter, Reveal } from "../components/ui";
import { STATS } from "../data/site";

// Impact figures band (file name kept for existing imports).
const Stats = () => (
  <section className="theme-dark relative bg-amber text-ink overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />
    <div className="container-x relative py-20 grid sm:grid-cols-3 gap-12 sm:gap-0 sm:divide-x divide-ink/25">
      {STATS.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.12} className="sm:px-10 first:pl-0">
          <p className="font-display font-bold text-8xl md:text-9xl leading-none">
            <Counter to={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-3 font-display uppercase tracking-[0.25em] font-semibold">{s.label}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Stats;
