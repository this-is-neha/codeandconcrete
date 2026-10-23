import { Link } from "react-router-dom";
import Header from "../common/header";
import Footer from "./footer";
import { Arrow, PageHero, Reveal } from "../components/ui";
import hero from "../assets/AdobeStock_1380842662_Preview.jpeg";
import ceo from "../assets/Prabin.jpg";
import neha from "../assets/Neha.png";

const team = [
  { name: "Prabin Shah", role: "Founder & CEO", img: ceo },
  { name: "Neha", role: "Manager", img: neha },
];

const values = [
  "Innovation and creativity",
  "Quality and sustainability",
  "Integrity and transparency",
  "Client-centred approach",
];

const About = () => (
  <>
    <Header />
    <PageHero
      eyebrow="About us"
      title="Who we"
      accent="are"
      text="We are builders and designers blending architecture, construction and interior design to create spaces that last."
      image={hero}
    />

    {/* Story */}
    <section className="py-28 md:py-36">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <h2 className="h-display text-5xl md:text-6xl">
            Creativity with <span className="text-amber">function</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-7 space-y-6 text-lg text-bone/70 leading-relaxed">
          <p>
            Our approach combines creativity with functionality, ensuring every project reflects our
            commitment to excellence and sustainability.
          </p>
          <p>
            Collaboration is at the heart of what we do. We bring visions to life through purposeful
            design and innovation — whether that is a family home, a commercial space, or an interior.
          </p>
        </Reveal>
      </div>
    </section>

    {/* CEO */}
    <section className="bg-steel border-y border-bone/10 py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 blueprint opacity-40" />
      <div className="container-x relative grid lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -top-5 -left-5 w-full h-full border border-amber/60" />
            <img src={ceo} alt="Prabin Shah, Founder & CEO" className="relative w-full aspect-[4/5] object-cover object-top" />
          </div>
        </Reveal>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <Reveal><p className="eyebrow mb-6">A word from our CEO</p></Reveal>
          <Reveal delay={0.1}>
            <blockquote className="font-display text-3xl md:text-5xl font-semibold leading-tight">
              <span className="text-amber">“</span>At our core, we believe in creating designs that inspire and solutions that
              transform. Every project is an opportunity to innovate, build trust and leave a lasting impact.
              <span className="text-amber">”</span>
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-bone/65 leading-relaxed text-lg">
              Our journey is fueled by passion, guided by values and strengthened by the people we serve.
              Together, we're not just building structures — we're shaping experiences, empowering
              communities and redefining possibilities for the future.
            </p>
            <div className="mt-8 pt-6 border-t border-bone/15 inline-block pr-16">
              <p className="font-display uppercase text-3xl font-bold">Prabin Shah</p>
              <p className="text-amber font-display uppercase tracking-[0.25em] text-sm mt-1">Founder & CEO</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-28 md:py-36">
      <div className="container-x">
        <Reveal><p className="eyebrow mb-6">The people</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="h-display text-5xl md:text-7xl">
            Meet the <span className="text-amber">team</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 gap-8 max-w-3xl">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.12}>
              <div className="group">
                <div className="relative overflow-hidden bg-steel">
                  <img
                    src={m.img}
                    alt={`${m.name}, ${m.role}`}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </div>
                <p className="mt-5 font-display uppercase text-3xl font-bold">{m.name}</p>
                <p className="text-amber font-display uppercase tracking-[0.25em] text-sm mt-1">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Vision / Mission / Values */}
    <section className="py-28 md:py-36">
      <div className="container-x grid md:grid-cols-3 gap-6">
        {[
          { t: "Our Vision", s: "Shaping the future", d: "A future where design and technology converge seamlessly." },
          { t: "Our Mission", s: "Driven by purpose", d: "Sustainable, functional and innovative solutions that exceed expectations." },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 0.12} className="h-full">
            <div className="h-full border border-bone/15 p-10 hover:border-amber hover:-translate-y-2 transition-all duration-500">
              <p className="eyebrow !tracking-[0.2em]">{c.s}</p>
              <h3 className="mt-6 font-display uppercase text-5xl font-bold">{c.t}</h3>
              <p className="mt-5 text-bone/65 text-lg leading-relaxed">{c.d}</p>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.24} className="h-full">
          <div className="h-full border border-bone/15 p-10 hover:border-amber hover:-translate-y-2 transition-all duration-500">
            <p className="eyebrow !tracking-[0.2em]">What we stand for</p>
            <h3 className="mt-6 font-display uppercase text-5xl font-bold">Our Values</h3>
            <ul className="mt-5 space-y-3 text-bone/65 text-lg">
              {values.map((v) => (
                <li key={v} className="flex gap-3"><span className="text-amber">—</span>{v}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="theme-dark bg-amber text-ink py-24 text-center">
      <div className="container-x">
        <Reveal>
          <h2 className="h-display text-5xl md:text-8xl">Let's build something extraordinary</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-ink/75">
            Architecture, construction or interiors — we're here to turn your ideas into reality.
          </p>
          <Link to="/contact" className="btn bg-ink text-white hover:bg-white hover:text-ink mt-10">
            Contact us <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
    <Footer />
  </>
);

export default About;
