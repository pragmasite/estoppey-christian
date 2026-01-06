import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-3">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Phone */}
            <motion.a
              href="tel:+41266681650"
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-background shadow-soft hover:shadow-medium hover:border-accent transition-all mb-4"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-colors">
                  <Phone className="h-6 w-6 text-accent group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-1">
                    {t.contact.phone}
                  </h3>
                  <p className="text-foreground/70">+41 26 668 1650</p>
                  <p className="text-foreground/70">+41 79 414 3592</p>
                </div>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:ch.estoppey@bluewin.ch"
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-background shadow-soft hover:shadow-medium hover:border-accent transition-all mb-4"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-colors">
                  <Mail className="h-6 w-6 text-accent group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-1">
                    {t.contact.email}
                  </h3>
                  <p className="text-foreground/70">ch.estoppey@bluewin.ch</p>
                </div>
              </div>
            </motion.a>

            {/* Address */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-background shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-1">
                    {t.contact.address}
                  </h3>
                  <p className="text-foreground/70">
                    Route de Payerne 12<br />
                    1552 Trey<br />
                    Switzerland
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <Button
                asChild
                size="lg"
                className="w-full gap-2"
              >
                <a href="tel:+41266681650">
                  <Phone className="h-5 w-5" />
                  {t.contact.cta}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-soft"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.9843289889456!2d6.925602!3d46.76948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e3fb8c3c3c3c3%3A0x1234567890abcdef!2sRoute%20de%20Payerne%2012%2C%201552%20Trey%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
