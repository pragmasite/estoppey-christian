import { motion } from "framer-motion";
import { Wrench, Hammer, Droplet, Flame } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  const icons = [Wrench, Hammer, Droplet, Flame];

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
    <section id="services" className="py-24">
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
            {t.services.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-3">
            {t.services.title}
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {t.services.items.map((service, index) => {
            const Icon = icons[index] || Wrench;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium hover:border-accent transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-colors mb-4">
                  <Icon className="h-7 w-7 text-accent group-hover:text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/70">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-foreground/70 text-lg">
            Des questions sur nos services ?
          </p>
          <a
            href="tel:+41266681650"
            className="inline-block mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
