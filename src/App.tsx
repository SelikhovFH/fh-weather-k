import { Routes, Route } from 'react-router-dom';

import Weather from './pages/Weather';

const App = () => {
  return (
    <Routes>
      <Route index element={<Weather />} />
    </Routes>
  );
};

export default App;
