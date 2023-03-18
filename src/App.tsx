import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@/Pages/Home/Home';

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
};

export const WrappedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
