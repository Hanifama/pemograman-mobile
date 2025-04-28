import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, YouTube, Twitter } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('.footer-content');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="bg-teal-700 text-white px-5 py-10">
      <motion.div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 footer-content"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h3 className="text-2xl font-bold mb-4">DeliGo</h3>
          <p className="text-sm text-gray-200">
            Teman belanja Anda yang terpercaya, menyediakan berbagai kebutuhan sehari-hari dengan mudah dan cepat.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-3">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:underline">Tentang Kami</Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">Layanan</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Kontak</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">FAQ</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-3">Ikuti Kami</h4>
          <div className="flex space-x-4">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Facebook fontSize="large" />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Instagram fontSize="large" />
            </Link>
            <Link
              to="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <YouTube fontSize="large" />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Twitter fontSize="large" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-3">Hubungi Kami</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: support@deligo.com</li>
            <li>Telepon: +62 812 3456 7890</li>
            <li>Alamat: Bandung, Indonesia</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="border-t border-gray-500 mt-10 pt-6 text-center text-sm text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; {new Date().getFullYear()} DeliGo. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/terms" className="hover:underline">Syarat & Ketentuan</Link>
          <span>|</span>
          <Link to="/privacy" className="hover:underline">Kebijakan Privasi</Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
