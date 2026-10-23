import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Logo } from "../common/header";
import { NAV, SERVICES, SITE } from "../data/site";

const Footer = () => (
  <footer className="relative bg-steel border-t border-bone/10 overflow-hidden">
    <div className="absolute inset-0 blueprint opacity-40 pointer-events-none" />
    <div className="container-x relative pt-20 pb-10">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-bone/60 leading-relaxed">
            Building strong foundations with modern technology. Construction, design and technology
            from Lalitpur, Nepal.
          </p>
          <div className="mt-8 flex gap-3">
            {[
              { href: SITE.whatsapp, icon: <FaWhatsapp size={20} />, label: "WhatsApp" },
              { href: SITE.instagram, icon: <FaInstagram size={20} />, label: "Instagram" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid place-items-center w-11 h-11 border border-bone/20 hover:bg-amber hover:border-amber hover:text-ink transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="eyebrow mb-6">Menu</h3>
          <ul className="space-y-3 text-bone/70">
            {NAV.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-amber transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="eyebrow mb-6">Services</h3>
          <ul className="space-y-3 text-bone/70">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className="hover:text-amber transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="eyebrow mb-6">Visit & Call</h3>
          <address className="not-italic space-y-1 text-bone/70">
            {SITE.address.map((a) => <p key={a}>{a}</p>)}
          </address>
          <p className="mt-4">
            <a href={`tel:${SITE.phone}`} className="font-display text-3xl font-semibold hover:text-amber transition-colors">
              {SITE.phone}
            </a>
          </p>
          <p className="mt-1 text-bone/70">
            <a href={`mailto:${SITE.email}`} className="hover:text-amber transition-colors">{SITE.email}</a>
          </p>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-bone/10 flex flex-col sm:flex-row justify-between gap-3 text-sm text-bone/40">
        <p>© {new Date().getFullYear()} {SITE.full}. All rights reserved.</p>
        <p className="font-display uppercase tracking-[0.25em]">Designed · Engineered · Built</p>
      </div>
    </div>
  </footer>
);

export default Footer;
