import { Reveal } from "../components/ui";
import team from "../assets/AdobeStock_1380842662_Preview.jpeg";

const reasons = [
  { title: "Proven expertise", desc: "Years of construction experience delivering quality projects on time." },
  { title: "End-to-end service", desc: "Complete service from planning to final delivery for smooth execution." },
  { title: "Client-centred", desc: "Tailored solutions for your needs, with clear communication throughout." },
  { title: "Commitment to excellence", desc: "Quality, innovation and sustainable results in every project." },
];

// "Why choose us" section (file name kept for existing imports).
const WhyChooseUs = () => (
  <section className="py-28 md:py-40">
    <div className="container-x grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div>
        <Reveal><p className="eyebrow mb-6">Why choose us</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="h-display text-5xl md:text-7xl">
            The right partner means <span className="text-amber">peace of mind</span>
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-bone/10 border-y border-bone/10">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08} y={20}>
              <div className="group flex gap-6 py-7">
                <span className="font-display text-amber text-2xl font-semibold pt-1">0{i + 1}</span>
                <div>
                  <h3 className="font-display uppercase text-3xl font-bold group-hover:text-amber transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-bone/60 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="relative">
        <div className="absolute -bottom-6 -right-6 w-full h-full border border-amber/60" />
        <img src={team} alt="Engineers reviewing plans on site" className="relative w-full aspect-[4/5] object-cover" />
      </Reveal>
    </div>
  </section>
);

export default WhyChooseUs;
