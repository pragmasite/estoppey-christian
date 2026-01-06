import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">Estoppey Christian</h3>
            <p className="text-background/80 text-sm">
              {t.footer.tagline}
            </p>
            <p className="text-background/70 text-sm mt-3">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
            <nav className="flex flex-col gap-2">
              <a href="#a-propos" className="text-background/80 hover:text-background text-sm transition-colors">
                {t.nav.about}
              </a>
              <a href="#services" className="text-background/80 hover:text-background text-sm transition-colors">
                {t.nav.services}
              </a>
              <a href="#galerie" className="text-background/80 hover:text-background text-sm transition-colors">
                {t.nav.gallery}
              </a>
              <a href="#horaires" className="text-background/80 hover:text-background text-sm transition-colors">
                {t.nav.hours}
              </a>
              <a href="#contact" className="text-background/80 hover:text-background text-sm transition-colors">
                {t.nav.contact}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.contact.label}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+41266681650" className="text-background/80 hover:text-background transition-colors">
                +41 26 668 1650
              </a>
              <a href="tel:+41794143592" className="text-background/80 hover:text-background transition-colors">
                +41 79 414 3592
              </a>
              <a href="mailto:ch.estoppey@bluewin.ch" className="text-background/80 hover:text-background transition-colors">
                ch.estoppey@bluewin.ch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
          <p>
            &copy; 2024 Estoppey Christian. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
