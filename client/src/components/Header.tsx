import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, Shield } from "lucide-react";
import { PRACTICE, NAV_ITEMS } from "@/lib/constants";
import { img } from "@/lib/img";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-navy text-white text-sm py-2 relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href={PRACTICE.phoneLink} className="flex items-center gap-1.5 hover:text-gold transition-colors" data-testid="link-phone-top">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">{PRACTICE.phone}</span>
            </a>
            <span className="hidden sm:inline text-white/60">|</span>
            <span className="hidden sm:inline text-white/80">{PRACTICE.tagline}</span>
          </div>
          <Link href="/insurance"
            className="bg-magenta hover:bg-magenta-light text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5"
            data-testid="link-free-insurance-check">
            <Shield className="w-3.5 h-3.5" />
            FREE INSURANCE CHECK
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" data-testid="link-logo">
            <img src={img("/images/site/logo-color.png")} alt="New You Surgical Weight Loss" className="h-9 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}>
                <Link href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${location === item.href ? "text-magenta bg-pink-50" : "text-foreground hover:text-magenta hover:bg-gray-50"}`}>
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0.5 bg-white rounded-xl shadow-xl border py-2 min-w-[200px] animate-in fade-in slide-in-from-top-1 duration-200">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-magenta hover:bg-pink-50 transition-colors">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a href={PRACTICE.phoneLink} className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-navy" data-testid="link-phone-nav">
              <Phone className="w-4 h-4" />
              {PRACTICE.phone}
            </a>
            <Link href="/request-consultation"
              className="hidden sm:inline-flex bg-magenta hover:bg-magenta-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
              data-testid="link-request-consultation">
              Request Consultation
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2" data-testid="button-mobile-menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link href={item.href}
                    className="block px-3 py-2.5 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-0.5">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-magenta transition-colors">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t mt-3 space-y-2">
                <a href={PRACTICE.phoneLink} className="flex items-center gap-2 px-3 py-2 font-semibold text-navy">
                  <Phone className="w-4 h-4" /> {PRACTICE.phone}
                </a>
                <Link href="/request-consultation"
                  className="block text-center bg-magenta text-white font-semibold px-5 py-3 rounded-full">
                  Request Consultation
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}


