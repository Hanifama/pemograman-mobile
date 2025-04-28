import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../../assets/img/icon.png';
import { Search, ShoppingCart, Facebook, Instagram, YouTube } from '@mui/icons-material';

const Navbar: React.FC = () => {

    const navbarVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
        >
            <div className="bg-teal-600 text-white text-sm fixed top-0 w-full z-50 py-2">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-4 ml-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            Ikuti Kami
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <YouTube className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="flex space-x-4 px-2">
                        <Link to="/help" className="hover:underline">Bantuan</Link>
                        <Link to="/register" className="hover:underline">Daftar</Link>
                        <Link to="/login" className="hover:underline">Login</Link>
                    </div>
                </div>
            </div>

            <div className="bg-teal-600 text-white py-4 px-6 fixed top-0 w-full z-50 shadow-md mt-8">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Link to="/" className="flex items-center">
                            <img src={Logo} alt="Deligo Logo" className="w-10 h-10" />
                            <span className="font-bold text-xl">eliGO</span>
                        </Link>
                    </div>
                    <div className="lg:flex items-center bg-white rounded-sm px-4 py-2 w-full md:w-full lg:w-2/3 hidden">
                        <input
                            type="text"
                            placeholder="Cari produk..."
                            className="w-full bg-transparent text-black focus:outline-none"
                        />
                        <button className="ml-2 text-teal-600">
                            <Search className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/cart" className="text-white relative">
                            <ShoppingCart className="w-8 h-8" />
                            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                3
                            </span>
                        </Link>
                        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-white">
                            <img
                                src={Logo}
                                alt="User Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
