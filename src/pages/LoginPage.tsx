import React from 'react';
import { motion } from 'framer-motion';
import imgLog from '../assets/img/login.png';

const Login: React.FC = () => {
    return (
        <section className="min-h-screen flex">
            {/* Bagian Kiri: Gambar */}
            <motion.div
                className="w-1/2 bg-teal-600 h-screen flex items-center justify-center"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={imgLog}
                    alt="Login Illustration"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Bagian Kanan: Form Login */}
            <motion.div
                className="w-1/2 bg-gray-100 flex items-center justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
                    <div className="text-left">
                        <motion.h2
                            className="text-3xl font-bold mb-2 text-teal-600"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Login
                        </motion.h2>
                        <motion.p
                            className="text-sm text-gray-600 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Selamat datang kembali! Masukkan detail akun Anda untuk melanjutkan.
                        </motion.p>
                    </div>
                    <form>
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Kata Sandi
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Masukkan kata sandi"
                                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            />
                        </motion.div>

                        {/* Lupa Kata Sandi */}
                        <motion.p
                            className="text-sm text-gray-600 mt-2 text-right"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            <a href="/forgot-password" className="text-teal-600 hover:underline">
                                Lupa kata sandi?
                            </a>
                        </motion.p>

                        {/* Tombol Masuk */}
                        <motion.button
                            type="submit"
                            className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-teal-700 transition duration-300 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            Masuk
                        </motion.button>
                    </form>

                    {/* Belum Punya Akun */}
                    <motion.p
                        className="text-sm text-gray-600 mt-2 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                    >
                        Belum punya akun?{' '}
                        <a href="/register" className="text-teal-600 hover:underline">
                            Daftar
                        </a>
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
};

export default Login;
