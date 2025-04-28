import React from 'react';
import { motion } from 'framer-motion';
import imgRegister from '../assets/img/register.png';

const Register: React.FC = () => {
    return (
        <section className="min-h-screen flex">
            <motion.div
                className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center"
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="bg-white p-10 rounded-lg shadow-lg w-full h-screen">
                    <div className="text-left">
                        <motion.h2
                            className="text-3xl font-bold mb-2 text-teal-600"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            Register
                        </motion.h2>
                        <motion.p
                            className="text-sm text-gray-600 mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            Halo! Buat akun Anda dan jadilah bagian dari komunitas kami.
                        </motion.p>
                    </div>
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                            <motion.div
                                className="mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                            >
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Nama
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Masukkan nama"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                />
                            </motion.div>

                            <motion.div
                                className="mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                            >
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    placeholder="Masukkan username"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                />
                            </motion.div>

                            <motion.div
                                className="mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                            >
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                    Alamat
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    placeholder="Masukkan alamat"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                />
                            </motion.div>

                            <motion.div
                                className="mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                            >
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    No. Telepon
                                </label>
                                <input
                                    id="phone"
                                    type="text"
                                    placeholder="Masukkan no. telepon"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                />
                            </motion.div>

                            <motion.div
                                className="mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                            >
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Masukkan email"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                />
                            </motion.div>

                            <motion.div
                                className="mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.9 }}
                            >
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Kata Sandi
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Masukkan kata sandi"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                />
                            </motion.div>
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 1 }}
                        >
                            Daftar
                        </motion.button>
                    </form>
                    <motion.p
                        className="text-sm text-gray-600 mt-2 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.1 }}
                    >
                        Sudah punya akun?{' '}
                        <a href="/login" className="text-teal-600 hover:underline">
                            Login
                        </a>
                    </motion.p>
                </div>
            </motion.div>

            <motion.div
                className="w-1/2 bg-teal-600 h-screen flex items-center justify-center"
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <img
                    src={imgRegister}
                    alt="Register Illustration"
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </section>
    );
};

export default Register;
