import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Pesan berhasil dikirim!");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-lg w-full bg-white shadow-2xl rounded-2xl p-8"
            >
                <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">
                    Kontak Kami - Harist Fadlilah
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">Nama</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">Pesan</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition"
                    >
                        Kirim Pesan
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactForm;
