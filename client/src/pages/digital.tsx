import { Link } from "react-router-dom";
import { Arrow, Reveal } from "../components/ui";
import { DIGITAL_SERVICES } from "../data/site";

// "Code" half of the brand — digital services section for the home page.
const Digital = () => (
  <section className="relative py-28 md:py-40 bg-steel border-y border-bone/10 overflow-hidden">
    <div className="absolute inset-0 blueprint opacity-40 pointer-events-none" />
    <div className="container-x relative grid lg:grid-cols-12 gap-14 lg:gap-20">
      <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
        <Reveal><p className="eyebrow mb-6">The code side</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="h-display text-5xl md:text-7xl">
            Built with <span className="text-amber">technology</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-lg text-bone/70 leading-relaxed">
            We don't just pour concrete — we write code. Our digital team builds websites and web
            apps, runs marketing and manages social media, so your business looks as solid online as
            the buildings we deliver.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 font-display uppercase tracking-[0.2em] text-sm text-bone/60">
            {["Websites", "Web apps", "SEO & ads", "Social media", "Branding"].map((t) => (
              <span key={t} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber" />{t}</span>
            ))}
          </div>
          <Link to="/services#web" className="btn btn-amber mt-10">Explore digital services <Arrow /></Link>
        </Reveal>
      </div>

      <div className="lg:col-span-7 border-t border-bone/15">
        {DIGITAL_SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.08} y={24}>
            <Link
              to={`/services#${s.id}`}
              className="group flex items-center gap-6 py-7 border-b border-bone/15 hover:bg-bone/5 transition-colors px-2 md:px-4"
            >
              <img
                src={s.images[0]}
                alt=""
                loading="lazy"
                className="w-24 h-24 md:w-32 md:h-32 object-cover shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="flex-1 min-w-0">
                <span className="font-display text-amber text-lg font-semibold tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display uppercase text-3xl md:text-4xl font-bold leading-none group-hover:text-amber transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-bone/60">{s.short}</p>
              </div>
              <span className="text-amber hidden sm:block group-hover:translate-x-2 transition-transform"><Arrow /></span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Digital;
