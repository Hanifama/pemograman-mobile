import React, { useState, useEffect } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { motion } from 'framer-motion';

const Activate: React.FC = () => {
    const [timer, setTimer] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(true);

    useEffect(() => {
        let countdown: ReturnType<typeof setInterval>;
        if (isResendDisabled) {
            countdown = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(countdown);
                        setIsResendDisabled(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(countdown);
    }, [isResendDisabled]);

    const handleResend = () => {
        console.log("Kode OTP dikirim ulang!");
        setTimer(60);
        setIsResendDisabled(true);
    };

    return (
        <section className="min-h-screen bg-gray-100 flex items-center justify-center">
            <motion.div
                className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex justify-center items-center mb-6">
                    <motion.div
                        className="bg-teal-100 text-teal-600 p-4 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <MailOutlineIcon style={{ fontSize: '2.5rem' }} />
                    </motion.div>
                </div>

                <motion.h2
                    className="text-2xl font-extrabold mb-4 text-teal-600"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Verifikasi Kode OTP
                </motion.h2>

                <motion.p
                    className="text-sm text-gray-600 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Kami telah mengirimkan kode OTP ke email Anda. Masukkan kode tersebut untuk mengaktifkan akun Anda.
                </motion.p>

                <form>
                    <motion.div
                        className="flex justify-center gap-2 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        {Array(6).fill('').map((_, idx) => (
                            <input
                                key={idx}
                                type="text"
                                maxLength={1}
                                className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            />
                        ))}
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="bg-teal-600 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 font-medium w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        Verifikasi Kode
                    </motion.button>
                </form>

                <motion.p
                    className="text-sm text-gray-600 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    {isResendDisabled ? (
                        <span className="text-teal-700">
                            Kirim ulang dalam {timer} detik
                        </span>
                    ) : (
                        <motion.button
                            className="text-teal-600 hover:underline font-medium"
                            onClick={handleResend}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.6 }}
                        >
                            Kirim Ulang Kode OTP
                        </motion.button>
                    )}
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Activate;
