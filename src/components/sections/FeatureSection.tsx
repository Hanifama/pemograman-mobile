import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const categories = [
  'Makanan & Minuman',
  'Peralatan Rumah Tangga',
  'Kesehatan & Kecantikan',
  'Elektronik',
  'Fashion',
  'Bayi & Anak',
];

const KategoriSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
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
    <section ref={sectionRef} className="bg-gray-100 py-10 px-5">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={`${category}-${inView}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all hover:scale-105 duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <h3 className="text-lg font-semibold text-teal-700">{category}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KategoriSection;
