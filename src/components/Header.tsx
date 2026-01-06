import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 50);
  });

  const navItems = [
    { href: `#a-propos`, label: t.nav.about },
    { href: `#services`, label: t.nav.services },
    { href: `#galerie`, label: t.nav.gallery },
    { href: `#horaires`, label: t.nav.hours },
    { href: `#contact`, label: t.nav.contact },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft border-b" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <span className={`font-serif text-xl font-bold transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
            Estoppey
          </span>
          <span className={`text-xs tracking-widest font-semibold transition-colors ${isScrolled ? "text-primary" : "text-white/70"}`}>
            {t.nav.profession.split(" •")[0]}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white hover:text-accent"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side - Language switcher and Call button */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          {/* Call button */}
          <Button
            asChild
            size="sm"
            className="gap-2"
            onClick={() => (window.location.href = "tel:+41266681650")}
          >
            <a href="tel:+41266681650">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
        >
          {isMobileMenuOpen ? (
            <X
              className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t shadow-medium">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t pt-3 flex items-center justify-between">
              <Link
                to={otherLangPath}
                className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Globe className="h-4 w-4" />
                {otherLang.toUpperCase()}
              </Link>
              <Button
                asChild
                size="sm"
                className="gap-2"
                onClick={() => (window.location.href = "tel:+41266681650")}
              >
                <a href="tel:+41266681650">
                  <Phone className="h-4 w-4" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
