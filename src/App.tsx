import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import Details from './pages/Details';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/details/:placeId" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default App;
