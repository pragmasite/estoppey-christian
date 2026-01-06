import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
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
    <section id="a-propos" className="py-24 bg-muted">
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
            {t.about.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-3">
            {t.about.title1}
            <br />
            <span className="text-accent">{t.about.title2}</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-foreground/80 mb-6">
              {t.about.p1}
            </p>
            <p className="text-lg text-foreground/80">
              {t.about.p2}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="text-center p-6 bg-background rounded-2xl shadow-soft"
            >
              <div className="text-3xl font-serif text-primary font-bold mb-2">
                15+
              </div>
              <p className="text-sm text-foreground/70">{t.about.stat1}</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="text-center p-6 bg-background rounded-2xl shadow-soft"
            >
              <div className="text-3xl font-serif text-primary font-bold mb-2">
                500+
              </div>
              <p className="text-sm text-foreground/70">{t.about.stat2}</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="text-center p-6 bg-background rounded-2xl shadow-soft"
            >
              <div className="text-3xl font-serif text-primary font-bold mb-2">
                100%
              </div>
              <p className="text-sm text-foreground/70">{t.about.stat3}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-background rounded-2xl shadow-soft hover:shadow-medium transition-shadow"
            >
              <h3 className="font-serif text-lg font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
