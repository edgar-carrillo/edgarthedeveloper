import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
