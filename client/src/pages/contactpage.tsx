import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../common/header";
import Footer from "./footer";
import { Reveal } from "../components/ui";
import { SERVICES, SITE } from "../data/site";
import bg from "../assets/hero.jpg";

// Default: same machine that served the page, port 9004, so it also works from other devices on the network.
const API = import.meta.env.VITE_API_URL ?? `${window.location.protocol}//${window.location.hostname}:9004`;

type Status = { type: "idle" | "sending" | "ok" | "error"; msg?: string };
type Mode = "message" | "quote";

const field =
  "w-full bg-transparent border-b border-bone/25 py-4 text-lg placeholder:text-bone/35 focus:outline-none focus:border-amber transition-colors";
// native dropdown options need their own background or they turn white-on-white in dark mode
const option = "bg-steel text-bone";

const BUDGETS = ["Not sure yet", "Under NPR 1 lakh", "NPR 1 to 10 lakh", "NPR 10 to 50 lakh", "Above NPR 50 lakh"];
const TIMELINES = ["As soon as possible", "Within 1 month", "1 to 3 months", "3 to 6 months", "Just exploring"];

const empty = { name: "", email: "", phone: "", service: "", location: "", budget: "", timeline: "", message: "" };

const Contact = () => {
  const [params, setParams] = useSearchParams();
  const mode: Mode = params.get("type") === "quote" ? "quote" : "message";
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  // /contact?type=quote&service=interior pre-selects the service
  const serviceFromUrl = SERVICES.find((s) => s.id === params.get("service"))?.title;
  useEffect(() => {
    if (serviceFromUrl) setForm((f) => ({ ...f, service: serviceFromUrl }));
  }, [serviceFromUrl]);

  const setMode = (m: Mode) => {
    setStatus({ type: "idle" });
    setParams(m === "quote" ? { type: "quote" } : {}, { replace: true });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // mirrors server-side validation
    const fail = (msg: string) => setStatus({ type: "error", msg });
    if (form.name.trim().length < 3) return fail("Please enter your name (at least 3 characters).");
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return fail("Please enter a valid email address.");
    if (mode === "quote" && !form.service) return fail("Please choose the service you need.");
    if (mode === "quote" && !form.location.trim()) return fail("Please tell us where the project is.");
    if (form.message.trim().length < 10) return fail("Please tell us a little more (at least 10 characters).");

    setStatus({ type: "sending" });
    try {
      await axios.post(`${API}/api/message`, { ...form, type: mode });
      setStatus({
        type: "ok",
        msg:
          mode === "quote"
            ? "Thank you, we have received your quote request and will reply shortly. A confirmation is on its way to your inbox."
            : "Thank you, we have received your message and will be in touch shortly.",
      });
      setForm(empty);
    } catch (error) {
      const invalid = axios.isAxiosError(error) && error.response?.status === 422;
      fail(
        invalid
          ? "Please check your details and try again."
          : "Something went wrong. Please try again, or call or WhatsApp us directly.",
      );
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
                {mode === "quote" ? (
                  <>Get a <span className="text-amber">quote</span></>
                ) : (
                  <>Get in <span className="text-amber">touch</span></>
                )}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-bone/70 leading-relaxed max-w-md">
                {mode === "quote"
                  ? "Tell us what you need and where. The more detail you give, the faster we can come back with a price."
                  : "Have a question or want to say hello? Send us a message and we will get back to you."}
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

              {/* Quick message / Request a quote */}
              <div role="tablist" aria-label="Form type" className="grid grid-cols-2 border border-bone/20 mb-10">
                {([
                  ["message", "Quick message"],
                  ["quote", "Request a quote"],
                ] as const).map(([m, label]) => (
                  <button
                    key={m}
                    type="button"
                    role="tab"
                    aria-selected={mode === m}
                    onClick={() => setMode(m)}
                    className={`py-3 font-display uppercase tracking-[0.2em] text-sm font-semibold transition-colors ${
                      mode === m ? "bg-amber text-[#0c0e11]" : "text-bone/70 hover:text-amber"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <h2 className="font-display uppercase text-4xl font-bold mb-8">
                {mode === "quote" ? "Tell us about your project" : "Send us a message"}
              </h2>

              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <label className="block">
                    <span className="sr-only">Your name</span>
                    <input name="name" value={form.name} onChange={onChange} placeholder="Your name *" autoComplete="name" className={field} />
                  </label>
                  <label className="block">
                    <span className="sr-only">Your email</span>
                    <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Your email *" autoComplete="email" className={field} />
                  </label>
                </div>

                {mode === "quote" && (
                  <>
                    <label className="block">
                      <span className="sr-only">Phone or WhatsApp</span>
                      <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone or WhatsApp number" autoComplete="tel" className={field} />
                    </label>

                    <div className="grid sm:grid-cols-2 gap-8">
                      <label className="block">
                        <span className="sr-only">Service needed</span>
                        <select name="service" value={form.service} onChange={onChange} className={`${field} ${form.service ? "" : "text-bone/35"}`}>
                          <option value="" className={option}>Service needed *</option>
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title} className={option}>{s.title}</option>
                          ))}
                        </select>
                      </label>
                      <label className="block">
                        <span className="sr-only">Project location</span>
                        <input name="location" value={form.location} onChange={onChange} placeholder="Project location *" className={field} />
                      </label>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                      <label className="block">
                        <span className="sr-only">Budget</span>
                        <select name="budget" value={form.budget} onChange={onChange} className={`${field} ${form.budget ? "" : "text-bone/35"}`}>
                          <option value="" className={option}>Budget (optional)</option>
                          {BUDGETS.map((b) => <option key={b} value={b} className={option}>{b}</option>)}
                        </select>
                      </label>
                      <label className="block">
                        <span className="sr-only">Timeline</span>
                        <select name="timeline" value={form.timeline} onChange={onChange} className={`${field} ${form.timeline ? "" : "text-bone/35"}`}>
                          <option value="" className={option}>Timeline (optional)</option>
                          {TIMELINES.map((t) => <option key={t} value={t} className={option}>{t}</option>)}
                        </select>
                      </label>
                    </div>
                  </>
                )}

                <label className="block">
                  <span className="sr-only">{mode === "quote" ? "Project details" : "Your message"}</span>
                  <textarea
                    name="message"
                    rows={mode === "quote" ? 4 : 5}
                    value={form.message}
                    onChange={onChange}
                    placeholder={mode === "quote" ? "Describe your project: size, style, what you have in mind *" : "Your message *"}
                    className={`${field} resize-none`}
                  />
                </label>
              </div>

              <button type="submit" disabled={status.type === "sending"} className="btn btn-amber mt-10 w-full sm:w-auto disabled:opacity-60">
                {status.type === "sending" ? "Sending..." : mode === "quote" ? "Request quote" : "Send message"}
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
