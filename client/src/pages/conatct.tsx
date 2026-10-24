import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Arrow, Reveal } from "../components/ui";
import { SITE } from "../data/site";
import bg from "../assets/AdobeStock_1167201201_Preview.jpeg";

// Call-to-action band on the home page (file name kept for existing imports).
const ContactCTA = () => (
  <section className="theme-dark relative overflow-hidden py-28 md:py-40">
    <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-ink/85" />
    <div className="absolute inset-0 blueprint opacity-60" />
    <div className="container-x relative grid lg:grid-cols-12 gap-14 items-end">
      <div className="lg:col-span-7">
        <Reveal><p className="eyebrow mb-6">Let's talk</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="h-display text-6xl md:text-8xl">
            Let's build <span className="text-amber">together</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <Link to="/contact?type=quote" className="btn btn-amber mt-10">Partner with us today <Arrow /></Link>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="lg:col-span-5">
        <div className="bg-ink/80 backdrop-blur border border-bone/15 divide-y divide-bone/10">
          {[
            { icon: <Phone size={20} />, text: SITE.phone, href: `tel:${SITE.phone}` },
            { icon: <Mail size={20} />, text: SITE.email, href: `mailto:${SITE.email}` },
            { icon: <MapPin size={20} />, text: SITE.address.join(", "), href: undefined },
          ].map((row) => {
            const inner = (
              <>
                <span className="text-amber">{row.icon}</span>
                <span className="text-lg">{row.text}</span>
              </>
            );
            return row.href ? (
              <a key={row.text} href={row.href} className="flex items-center gap-5 p-6 hover:bg-bone/5 transition-colors">{inner}</a>
            ) : (
              <div key={row.text} className="flex items-center gap-5 p-6">{inner}</div>
            );
          })}
        </div>
      </Reveal>
    </div>
  </section>
);

export default ContactCTA;
