import React from 'react';
import { motion } from 'framer-motion';

const ForgotPassword: React.FC = () => {
    return (
        <section className="min-h-screen bg-gray-100 flex items-center justify-center">
            <motion.div
                className="bg-white p-10 rounded-3xl w-full max-w-md"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Heading */}
                <motion.h2
                    className="text-3xl font-semibold mb-2 text-teal-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Lupa Kata Sandi
                </motion.h2>
                <motion.p
                    className="text-sm text-gray-500 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Masukkan email Anda untuk menerima link reset kata sandi.
                </motion.p>

                <form>
                    {/* Email Input */}
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email Anda"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        Kirim Link Reset
                    </motion.button>
                </form>

                {/* Additional Link */}
                <motion.div
                    className="mt-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <p className="text-sm text-gray-600">
                        <a href="/login" className="text-teal-600 hover:underline">
                            Kembali ke halaman masuk
                        </a>
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ForgotPassword;
