import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Dashboard from "./components/dashboard";
import './index.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
