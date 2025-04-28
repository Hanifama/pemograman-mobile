// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './components/routes/route';
import NotFound from './components/_shared/Notfound';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
