import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../common/header";
import Footer from "./footer";
import Services from "./services";
import Digital from "./digital";
import HeroOverlay from "../components/HeroOverlay";
import Stats from "./testimonials";
import WhyChooseUs from "./us";
import ContactCTA from "./conatct";
import { Arrow, Reveal } from "../components/ui";
import { SERVICES } from "../data/site";
import hero from "../assets/hero.jpg";
import house from "../assets/image4.jpg";

const headline = ["We", "build", "what", "lasts."];

const pillars = [
  {
    n: "01",
    title: "Mission",
    text: "To merge the strength of timeless architecture with the innovation of modern technology — spaces that are safe, durable and genuinely good to live and work in.",
  },
  {
    n: "02",
    title: "Values",
    text: "Integrity, transparency and sustainability. Respect for our clients, the environment and the craft of design drives every decision we make.",
  },
  {
    n: "03",
    title: "Vision",
    text: "To become a trusted leader in modern architecture and construction — communities where technology and design coexist seamlessly.",
  },
];

const Home = () => (
  <>
    <Header />

    {/* HERO */}
    <section className="theme-dark relative min-h-screen flex items-center overflow-hidden">
      <motion.img
        src={hero}
        alt="Construction site with crane at sunrise"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      <div className="absolute inset-0 blueprint opacity-70" />

      <div className="container-x relative pt-32 pb-40 w-full">
        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="eyebrow mb-8">
          Construction · Design · Technology
        </motion.p>

        <h1 className="h-display text-[4.5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem]">
          {headline.map((w, i) => (
            <span key={w} className="inline-block overflow-hidden align-bottom mr-[0.18em]">
              <motion.span
                className={`inline-block ${i === 3 ? "text-amber" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-bone/80 leading-relaxed"
        >
          Code and Concrete Construction. Strong foundations, honest craftsmanship and modern
          technology. We build homes and spaces that last, and the websites and digital presence to match.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link to="/contact" className="btn btn-amber">Start a project <Arrow /></Link>
          <Link to="/services" className="btn btn-ghost">Explore services</Link>
        </motion.div>
      </div>

      <HeroOverlay />

      <div className="absolute bottom-0 inset-x-0 border-t border-bone/15 bg-ink/50 backdrop-blur-sm">
        <div className="container-x py-5 flex items-center justify-between text-xs font-display uppercase tracking-[0.3em] text-bone/60">
          <span>Lalitpur, Nepal</span>
          <span className="hidden sm:block">Scroll to explore ↓</span>
          <span>Code & Concrete</span>
        </div>
      </div>
    </section>

    {/* MARQUEE */}
    <div className="theme-dark bg-amber text-ink overflow-hidden py-4" aria-hidden>
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {SERVICES.map((s) => (
              <span key={s.id + k} className="font-display uppercase font-bold text-3xl tracking-wide px-8 whitespace-nowrap">
                {s.title} <span className="mx-6">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* INTRO */}
    <section className="relative py-28 md:py-40">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-6 relative">
          <div className="absolute -top-6 -left-6 w-full h-full border border-amber/60" />
          <img src={house} alt="Modern residence at dusk" className="relative w-full aspect-[4/5] object-cover" />
          <div className="theme-dark absolute -bottom-8 -right-4 md:-right-8 bg-amber text-ink p-6 md:p-8">
            <p className="font-display text-6xl font-bold leading-none">100%</p>
            <p className="font-display uppercase tracking-widest text-sm mt-1">Built around you</p>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pl-10">
          <Reveal><p className="eyebrow mb-6">Who we are</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-display text-5xl md:text-7xl">
              Where engineering <span className="text-amber">meets</span> imagination
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-bone/70 leading-relaxed">
              We are builders, designers and developers blending architecture, construction, interior
              design and technology to create spaces and experiences that last. Our approach combines creativity with structural integrity, so
              every project reflects a commitment to quality, safety and sustainability.
            </p>
            <p className="mt-5 text-lg text-bone/70 leading-relaxed">
              Collaboration is at the heart of what we do — we bring your vision to life from the first
              site visit to the day you get the keys.
            </p>
            <Link to="/about" className="mt-10 inline-flex items-center gap-3 font-display uppercase tracking-widest font-semibold text-amber hover:gap-5 transition-all">
              Get to know us <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>

    <Stats />
    <Services />
    <Digital />

    {/* MISSION / VALUES / VISION */}
    <section className="relative py-28 md:py-36 bg-steel border-y border-bone/10">
      <div className="container-x">
        <Reveal><p className="eyebrow mb-6">Our foundation</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="h-display text-5xl md:text-7xl max-w-3xl">
            What drives <span className="text-amber">every build</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-bone/10 border border-bone/10">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.12} y={30} className="bg-steel">
              <div className="group h-full p-10 md:p-12 hover:bg-slab transition-colors duration-500">
                <span className="font-display text-7xl font-bold text-transparent [-webkit-text-stroke:1px_#f5a623] group-hover:text-amber transition-colors">
                  {p.n}
                </span>
                <h3 className="mt-6 font-display uppercase text-4xl font-bold">{p.title}</h3>
                <p className="mt-4 text-bone/65 leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <WhyChooseUs />
    <ContactCTA />
    <Footer />
  </>
);

export default Home;
