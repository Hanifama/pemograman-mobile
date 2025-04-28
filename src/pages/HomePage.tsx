import React, { useState, useEffect } from "react";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeatureSection";
import Navbar from "../components/sections/NavbarSection";
import ProductSection from "../components/sections/ProductSection";
import Footer from "../components/sections/FooterSection";
import Loader from "../components/_shared/Loader";

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="transition-opacity duration-500 ease-in-out opacity-100">
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <ProductSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;
