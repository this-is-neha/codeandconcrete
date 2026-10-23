import { motion } from "framer-motion";
import web from "../assets/ecommerce-website-design-examples-1024x768.jpg";
import social from "../assets/social-media.jpg";

// Hero composite: the construction photo plus floating "screens" — a website, a marketing
// performance chart and a social post — so one image says build + web + marketing + social.

const Float = ({
  children,
  delay,
  drift = 8,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  drift?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [0, -drift, 0] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const Tag = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <span className="inline-flex items-center gap-2 bg-amber text-[#0c0e11] px-3 py-1 font-display uppercase tracking-[0.2em] text-[11px] font-bold">
    {icon}
    {text}
  </span>
);

const HeroOverlay = () => (
  <div className="absolute inset-0 pointer-events-none" aria-hidden>
    {/* scanning line */}
    <motion.div
      className="absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-amber/25 to-transparent"
      initial={{ left: "-10%" }}
      animate={{ left: "110%" }}
      transition={{ duration: 5, delay: 1.2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
    >
      <span className="absolute right-1/2 inset-y-0 w-px bg-amber/70" />
    </motion.div>

    {/* floating screens */}
    <div className="hero-float absolute right-16 bottom-20 w-[620px] h-[400px]">
      {/* website */}
      <Float delay={1.7} className="top-8 left-0">
        <div className="w-[380px] bg-ink/90 backdrop-blur border border-bone/25 shadow-2xl">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-bone/15">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber" />
            <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
            <span className="ml-2 flex-1 bg-bone/10 px-3 py-0.5 text-[11px] text-bone/60">yourbusiness.com.np</span>
          </div>
          <img src={web} alt="" className="w-full h-[190px] object-cover object-left-top" />
        </div>
        <div className="absolute -top-7 left-0">
          <Tag
            text="Websites & apps"
            icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="square" /></svg>}
          />
        </div>
      </Float>

      {/* marketing chart */}
      <Float delay={2.1} drift={10} className="top-[268px] left-16">
        <div className="w-[260px] bg-ink/90 backdrop-blur border border-bone/25 shadow-2xl p-4">
          <p className="font-display uppercase tracking-[0.2em] text-[10px] text-bone/60">Campaign performance</p>
          <svg viewBox="0 0 200 80" className="mt-3 w-full">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <motion.rect
                key={i}
                x={i * 29 + 4}
                width="18"
                rx="1"
                fill="rgb(245 166 35 / 0.35)"
                initial={{ height: 0, y: 80 }}
                animate={{ height: 14 + i * 8, y: 80 - (14 + i * 8) }}
                transition={{ delay: 2.6 + i * 0.1, duration: 0.6 }}
              />
            ))}
            <motion.polyline
              points="12,64 41,56 70,58 99,40 128,34 157,20 186,8"
              fill="none"
              stroke="#f5a623"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2.8, duration: 1.4 }}
            />
          </svg>
        </div>
        <div className="absolute -top-7 left-0">
          <Tag
            text="Digital marketing"
            icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M3 17l6-6 4 4 8-8M15 7h6v6" strokeLinecap="square" /></svg>}
          />
        </div>
      </Float>

      {/* social post */}
      <Float delay={2.5} drift={12} className="top-12 right-0">
        <div className="w-[210px] bg-ink/90 backdrop-blur border border-bone/25 shadow-2xl">
          <div className="flex items-center gap-2 p-3">
            <span className="grid place-items-center w-7 h-7 rounded-full bg-amber text-[#0c0e11] font-display font-bold text-xs">C</span>
            <span className="text-xs font-semibold">codeandconcrete</span>
          </div>
          <img src={social} alt="" className="w-full h-[130px] object-cover" />
          <div className="flex items-center gap-4 p-3 text-bone/80">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#f5a623" stroke="#f5a623" strokeWidth="2"><path d="M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z" /></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z" /></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>
          </div>
        </div>
        <div className="absolute -top-7 right-0">
          <Tag
            text="Social media"
            icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z" /></svg>}
          />
        </div>
      </Float>
    </div>
  </div>
);

export default HeroOverlay;
