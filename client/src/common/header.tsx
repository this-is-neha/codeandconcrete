import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV } from "../data/site";

export const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group" aria-label="Code & Concrete home">
    <span className="grid place-items-center w-10 h-10 border-2 border-amber text-amber font-display font-bold text-lg group-hover:bg-amber group-hover:text-ink transition-colors">
      {"</>"}
    </span>
    <span className="font-display uppercase font-bold text-2xl tracking-wide leading-none">
      Code <span className="text-amber">&</span> Concrete
    </span>
  </Link>
);

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? "dark");

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* storage unavailable */ }
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="grid place-items-center w-10 h-10 border border-bone/30 hover:border-amber hover:text-amber transition-colors"
    >
      {theme === "dark" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
};

// darkHero: the page starts with a dark photo hero, so the transparent header stays light-on-dark until scrolled.
const Header = ({ darkHero = true }: { darkHero?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overHero = darkHero && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${overHero ? "theme-dark text-bone" : ""} fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-bone/10 py-3" : "py-6"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-display uppercase tracking-[0.2em] text-sm font-semibold transition-colors hover:text-amber ${
                  isActive ? "text-amber" : "text-bone"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <Link to="/contact?type=quote" className="btn btn-amber !py-2.5 !px-6 !text-sm">
            Get a Quote
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden container-x pt-6 pb-4 flex flex-col">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display uppercase text-4xl font-bold py-3 border-b border-bone/10 hover:text-amber"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
