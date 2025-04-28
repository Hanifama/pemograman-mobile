import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

import photoku from './assets/img/photo.jpg';
import experience1Img from './assets/img/experience.jpg';
import experience2Img from './assets/img/experience2.jpg';

type ThemeToggleProps = {
  toggleTheme: () => void;
  isDark: boolean;
};

const portfolioItems = [
  {
    id: '1',
    title: 'Bolu Kojo Khas Sumatera',
    description: 'Kue tradisional dari daerah Sumatera Selatan, bentuknya seperti bunga kamboja.',
    detail: 'Bolu Kojo adalah penganan khas daerah Sumatera Selatan dan sekitarnya seperti Jambi, Riau, Bengkulu, dan Palembang. "Kojo" berasal dari "kemojo" atau "kamboja" karena bentuk loyangnya menyerupai bunga kamboja. Biasanya disajikan dalam acara adat.',
    image: experience1Img,
  },
  {
    id: '2',
    title: 'Ayam Rica-Rica Manado',
    description: 'Makanan pedas khas Manado dengan aroma yang kuat dan menggugah selera.',
    detail: 'Ayam rica-rica adalah makanan khas Manado, Sulawesi Utara. Kata "rica" artinya pedas atau cabai. Dibuat dari cabai merah, bawang, jahe, serai, dan daun jeruk, hidangan ini kaya rasa dan memiliki aroma khas yang kuat.',
    image: experience2Img,
  }
];

const Navbar = () => (
  <nav className="bg-white dark:bg-gray-800 dark:shadow-gray-700/50 shadow-md p-4 flex justify-between transition-colors duration-500">
    <h1 className="font-bold text-lg text-black dark:text-white">Nuthafsari Ansarani</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-blue-600 text-black dark:text-white">Home</Link>
      <Link to="/portfolio" className="hover:text-blue-600 text-black dark:text-white">Portfolio</Link>
    </div>
  </nav>
);

const Home = () => (
  <div className="flex flex-col items-center text-center mt-10 px-4 bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-xl mx-auto transition-colors duration-500">
    <img src={photoku} alt="profile" className="w-40 h-40 rounded-full shadow mb-4 object-cover" />
    <h2 className="text-3xl font-bold text-black dark:text-white">Nuthafsari Ansarani</h2>
    <p className="text-gray-600 dark:text-gray-300">Chef | Culinary Creator | Indonesian Food Specialist</p>
    <p className="max-w-md mt-4 text-black dark:text-white">
      Saya seorang tukang masak yang mencintai seni kuliner Indonesia. Dengan pengalaman membuat berbagai hidangan nusantara,
      saya berfokus pada inovasi resep dan presentasi makanan yang menggugah selera.
    </p>
  </div>
);

const Portfolio = () => (
  <div className="p-6 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">PORTFOLIOKU</h2>
    <div className="space-y-6 relative border-l-2 border-blue-500 ml-4">
      {portfolioItems.map((item, index) => (
        <motion.div
          key={item.id}
          className="pl-4 relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow transition-colors duration-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3 }}
        >
          <div className="absolute left-[-12px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
          <h3 className="text-lg font-semibold text-black dark:text-white">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          <Link to={`/portfolio/${item.id}`} className="text-blue-600 hover:underline">Lihat detail</Link>
        </motion.div>
      ))}
    </div>
  </div>
);

const PortfolioDetail = () => {
  const { id } = useParams();
  const item = portfolioItems.find((p) => p.id === id);
  if (!item) return <div className="p-6 text-red-600">Portfolio tidak ditemukan</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow transition-colors duration-500">
      <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">{item.title}</h2>
      {item.image && (
        <img src={item.image} alt={item.title} className="rounded-lg shadow mb-4 max-h-80 object-cover w-full" />
      )}
      <p className="text-gray-700 dark:text-gray-300">{item.detail}</p>
      <Link to="/portfolio" className="text-blue-500 hover:underline mt-4 inline-block">← Kembali ke Portfolio</Link>
    </div>
  );
};

const NotFound = () => (
  <div className="p-6 text-center bg-white dark:bg-gray-800 rounded-lg shadow max-w-md mx-auto mt-10 transition-colors duration-500">
    <h2 className="text-xl font-bold text-red-600">404 - Halaman Tidak Ditemukan</h2>
    <Link to="/" className="text-blue-500 hover:underline">Kembali ke Home</Link>
  </div>
);

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, isDark }) => (
  <button
    onClick={toggleTheme}
    className="fixed bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
  >
    {isDark ? '☀️ Light' : '🌙 Dark'}
  </button>
);

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`${isDark ? 'dark bg-gray-900' : 'bg-white'} min-h-screen transition-colors duration-500`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
      </Router>
    </div>
  );
};

export default App;
