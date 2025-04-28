import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import BannerSection from "./BannerSection";

const HeroSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="bg-gradient-to-r from-teal-400 to-teal-600 text-white py-40 px-5 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="max-w-lg space-y-6 md:space-y-8"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-5"
            initial={{ y: -20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: 0.4,
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            Temukan Produk Terbaik di Deligo
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 opacity-90"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: 0.6,
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            Solusi lengkap untuk kebutuhan logistik dan pengiriman produk Anda.
            Dapatkan berbagai pilihan produk unggulan untuk efisiensi bisnis Anda.
          </motion.p>
          <motion.button
            className="bg-gray-800 text-white py-3 px-6 rounded-full shadow-lg transform transition-all hover:bg-gray-700 hover:scale-105 duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Belanja Sekarang
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0 transform transition-all max-w-full md:max-w-2xl"
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            delay: 0.8,
            duration: 1.8,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <BannerSection />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
