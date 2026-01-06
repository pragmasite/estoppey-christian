import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();

  const images = [
    { src: "/images/img-1.jpg", fr: "Tuiles terracotta", en: "Terracotta tiles" },
    { src: "/images/img-3.jpg", fr: "Tuiles en céramique", en: "Ceramic tiles" },
    { src: "/images/img-4.jpg", fr: "Travaux de plomberie", en: "Plumbing work" },
    { src: "/images/img-5.jpg", fr: "Système de chauffage", en: "Heating system" },
    { src: "/images/img-6.jpg", fr: "Tuyauterie et plans", en: "Piping and plans" },
    { src: "/images/img-7.jpg", fr: "Installation professionnelle", en: "Professional installation" },
    { src: "/images/img-8.jpg", fr: "Réparation de plomberie", en: "Plumbing repair" },
    { src: "/images/hero-bg.jpg", fr: "Couverture de toit", en: "Roof covering" },
  ];

  const getDescription = (index: number) => {
    const { lang } = useLanguage();
    return lang === "fr" ? images[index].fr : images[index].en;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="galerie" className="py-24 bg-muted">
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
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-3">
            {t.gallery.title}
          </h2>
          <p className="text-foreground/70 mt-4">{t.gallery.description}</p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-shadow"
            >
              <img
                src={image.src}
                alt={image.fr}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">
                  {useLanguage().lang === "fr" ? image.fr : image.en}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
