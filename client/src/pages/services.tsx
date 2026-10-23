import { Link } from "react-router-dom";
import { Arrow, Reveal } from "../components/ui";
import { BUILD_SERVICES } from "../data/site";

const Services = () => (
  <section className="relative py-28 md:py-40 overflow-hidden">
    <div className="absolute inset-0 blueprint opacity-50 pointer-events-none" />
    <div className="container-x relative">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <Reveal><p className="eyebrow mb-6">What we build</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-display text-5xl md:text-7xl">
              Construction <span className="text-amber">&</span> design
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="max-w-md text-bone/65 text-lg leading-relaxed">
            High-quality construction for every project — from the first site visit to the final
            handover.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {BUILD_SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={(i % 2) * 0.12} y={30}>
            <Link
              to={`/services#${s.id}`}
              className="theme-dark group relative block overflow-hidden min-h-[420px] bg-ink"
            >
              <img
                src={s.images[0]}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="relative h-full min-h-[420px] p-8 md:p-10 flex flex-col justify-between">
                <span className="font-display text-amber text-xl font-semibold tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display uppercase text-4xl md:text-5xl font-bold leading-none">{s.title}</h3>
                  <p className="mt-4 max-w-md text-bone/80">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-display uppercase tracking-widest text-sm text-amber group-hover:gap-4 transition-all">
                    Learn more <Arrow />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
