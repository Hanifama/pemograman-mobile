import React, { useEffect, useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import Product from '../../assets/img/produk.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const products = [
    { id: 1, name: 'Produk A', price: 'Rp 150.000', imageUrl: Product, category: 'Elektronik' },
    { id: 2, name: 'Produk B', price: 'Rp 200.000', imageUrl: Product, category: 'Pakaian' },
    { id: 3, name: 'Produk C', price: 'Rp 120.000', imageUrl: Product, category: 'Peralatan Rumah Tangga' },
    { id: 4, name: 'Produk D', price: 'Rp 250.000', imageUrl: Product, category: 'Elektronik' },
    { id: 5, name: 'Produk E', price: 'Rp 180.000', imageUrl: Product, category: 'Kesehatan' },
    { id: 6, name: 'Produk F', price: 'Rp 300.000', imageUrl: Product, category: 'Pakaian' },
    { id: 7, name: 'Produk G', price: 'Rp 100.000', imageUrl: Product, category: 'Peralatan Rumah Tangga' },
    { id: 8, name: 'Produk H', price: 'Rp 220.000', imageUrl: Product, category: 'Kesehatan' },
    { id: 9, name: 'Produk I', price: 'Rp 350.000', imageUrl: Product, category: 'Elektronik' },
    { id: 10, name: 'Produk J', price: 'Rp 400.000', imageUrl: Product, category: 'Pakaian' },
];

const ProductSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

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

        const elements = document.querySelectorAll('.product-card');
        elements.forEach(el => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleProductClick = (productId: number) => {
        navigate(`/product-detail/${productId}`);
    };

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl font-semibold text-left text-teal-600 mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Rekomendasi
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 product-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: Math.random() * 0.5, duration: 0.8 }}
                            onClick={() => handleProductClick(product.id)}
                        >
                            <motion.img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-64 object-cover rounded-t-lg"
                                initial={{ y: -50 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            />
                            <div className="p-4">
                                <motion.h3
                                    className="text-lg font-semibold text-gray-800"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    {product.name}
                                </motion.h3>
                                <motion.p
                                    className="text-xs font-medium text-gray-500 mb-2"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                >
                                    {product.category}
                                </motion.p>
                                <motion.p
                                    className="text-teal-500 text-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    {product.price}
                                </motion.p>
                            </div>

                            <div className="absolute bottom-4 right-4">
                                <motion.button
                                    className="bg-teal-600 text-white p-2 rounded-full shadow-md hover:bg-teal-700 transition-colors duration-200"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.4 }}
                                >
                                    <ShoppingCart className="w-6 h-6" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
