import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../common/header";
import Footer from "./footer";
import { Arrow, PageHero, Reveal } from "../components/ui";
import { SERVICES } from "../data/site";
import hero from "../assets/image4.jpg";

// Short labels so all eight fit on one row.
const SHORT: Record<string, string> = {
  architectural: "Architecture",
  site: "Site Evaluation",
  interior: "Interior",
  project: "Construction",
  web: "Web",
  marketing: "Marketing",
  social: "Social Media",
  creative: "Creative",
};

const ServicePage = () => {
  const { hash } = useLocation();
  const [active, setActive] = useState("");

  // Highlight the section currently in view.
  useEffect(() => {
    const els = SERVICES.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <>
      <Header />
      <PageHero
        eyebrow="Our services"
        title="Design. Build."
        accent="Deliver."
        text="From site evaluation and architectural design to construction and interiors — plus digital services to help your business grow."
        image={hero}
      />

      {/* Quick index */}
      <nav className="sticky top-16 z-30 bg-ink/90 backdrop-blur border-b border-bone/10">
        <div className="container-x no-scrollbar overflow-x-auto">
          <div className="flex items-center justify-between gap-8 min-w-max">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative py-5 font-display uppercase tracking-[0.2em] text-sm font-semibold whitespace-nowrap transition-colors hover:text-amber ${
                  active === s.id ? "text-amber" : "text-bone/60"
                }`}
              >
                {SHORT[s.id] ?? s.title}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-amber origin-left transition-transform duration-300 ${
                    active === s.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="py-12">
        {SERVICES.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <section key={s.id} id={s.id} className="scroll-mt-40 py-16 md:py-24">
              <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <div className="relative">
                    <div className={`absolute -bottom-5 ${flip ? "-left-5" : "-right-5"} w-full h-full border border-amber/60`} />
                    <div className={`relative grid gap-3 ${s.images.length > 1 ? "grid-cols-2" : ""}`}>
                      {s.images.map((src, k) => (
                        <img
                          key={k}
                          src={src}
                          alt={s.title}
                          loading="lazy"
                          className="w-full h-72 md:h-[26rem] object-cover"
                        />
                      ))}
                    </div>
                  </div>
                </Reveal>

                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <Reveal>
                    <span className="font-display text-8xl font-bold text-transparent [-webkit-text-stroke:1px_#f5a623]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="h-display text-5xl md:text-6xl mt-2">{s.title}</h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <div className="mt-6 space-y-4 text-bone/70 text-lg leading-relaxed">
                      {s.body.map((p) => <p key={p}>{p}</p>)}
                    </div>
                    <Link
                      to={`/contact?type=quote&service=${s.id}`}
                      className="mt-8 inline-flex items-center gap-3 font-display uppercase tracking-widest font-semibold text-amber hover:gap-5 transition-all"
                    >
                      Enquire about this <Arrow />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="theme-dark bg-amber text-ink py-24 text-center">
        <div className="container-x">
          <Reveal>
            <h2 className="h-display text-5xl md:text-8xl">Have a project in mind?</h2>
            <Link to="/contact?type=quote" className="btn bg-ink text-white hover:bg-white hover:text-ink mt-10">
              Get a quote <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicePage;
