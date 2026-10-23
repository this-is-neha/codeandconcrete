import { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../common/header";
import Footer from "./footer";
import { Reveal } from "../components/ui";
import { SITE } from "../data/site";
import bg from "../assets/hero.jpg";

const API = import.meta.env.VITE_API_URL ?? "http://localhost:9004";

type Status = { type: "idle" | "sending" | "ok" | "error"; msg?: string };

const field =
  "w-full bg-transparent border-b border-bone/25 py-4 text-lg placeholder:text-bone/35 focus:outline-none focus:border-amber transition-colors";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // mirrors server-side validation (name >= 3, message >= 10)
    if (form.name.trim().length < 3) return setStatus({ type: "error", msg: "Please enter your name (at least 3 characters)." });
    if (form.message.trim().length < 10) return setStatus({ type: "error", msg: "Please tell us a little more (at least 10 characters)." });

    setStatus({ type: "sending" });
    try {
      await axios.post(`${API}/api/message`, form);
      setStatus({ type: "ok", msg: "Thank you — we've received your message and will be in touch shortly." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({ type: "error", msg: "Something went wrong. Please try again or call us directly." });
    }
  };

  return (
    <>
      <Header darkHero={false} />
      <section className="relative min-h-screen overflow-hidden pt-36 pb-24">
        <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/90" />
        <div className="absolute inset-0 blueprint opacity-60" />

        <div className="container-x relative grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal><p className="eyebrow mb-6">Contact</p></Reveal>
            <Reveal delay={0.1}>
              <h1 className="h-display text-6xl md:text-8xl">
                Get in <span className="text-amber">touch</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-bone/70 leading-relaxed max-w-md">
                Tell us about your project — a new home, an interior, a website. We'll get back to you
                with the next steps.
              </p>
              <ul className="mt-12 space-y-7">
                {[
                  { icon: <Phone size={22} />, label: "Call", text: SITE.phone, href: `tel:${SITE.phone}` },
                  { icon: <FaWhatsapp size={22} />, label: "WhatsApp", text: SITE.whatsappNumber, href: SITE.whatsapp, external: true },
                  { icon: <Mail size={22} />, label: "Email", text: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: <MapPin size={22} />, label: "Visit", text: SITE.address.join(", ") },
                ].map((r) => (
                  <li key={r.label} className="flex gap-5 items-start">
                    <span className="grid place-items-center w-12 h-12 border border-amber text-amber shrink-0">{r.icon}</span>
                    <div>
                      <p className="font-display uppercase tracking-[0.25em] text-xs text-bone/50">{r.label}</p>
                      {r.href ? (
                        <a href={r.href} {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-lg hover:text-amber transition-colors">{r.text}</a>
                      ) : (
                        <p className="text-lg">{r.text}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 bg-[#25D366] text-[#0c0e11] px-7 py-4 font-display uppercase tracking-widest font-semibold hover:bg-white transition-colors"
              >
                <FaWhatsapp size={24} /> Chat on WhatsApp
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-7">
            <form onSubmit={onSubmit} className="bg-steel/90 backdrop-blur border border-bone/10 p-8 md:p-14 relative" noValidate>
              <div className="absolute top-0 left-0 w-24 h-1 bg-amber" />
              <h2 className="font-display uppercase text-4xl font-bold mb-10">Send us a message</h2>

              <div className="space-y-8">
                <label className="block">
                  <span className="sr-only">Your name</span>
                  <input name="name" value={form.name} onChange={onChange} placeholder="Your name" autoComplete="name" className={field} />
                </label>
                <label className="block">
                  <span className="sr-only">Your email</span>
                  <input type="email" name="email" required value={form.email} onChange={onChange} placeholder="Your email" autoComplete="email" className={field} />
                </label>
                <label className="block">
                  <span className="sr-only">Your message</span>
                  <textarea name="message" rows={5} value={form.message} onChange={onChange} placeholder="Tell us about your project" className={`${field} resize-none`} />
                </label>
              </div>

              <button type="submit" disabled={status.type === "sending"} className="btn btn-amber mt-10 w-full sm:w-auto disabled:opacity-60">
                {status.type === "sending" ? "Sending…" : "Send message"}
              </button>

              {status.msg && (
                <p
                  role="status"
                  className={`mt-6 border-l-2 pl-4 ${status.type === "ok" ? "border-amber text-bone" : "border-red-500 text-red-300"}`}
                >
                  {status.msg}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
