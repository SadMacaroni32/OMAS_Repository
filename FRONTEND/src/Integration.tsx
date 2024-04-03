
import Dashboard from "../src/pages/DashboardPage";
import { Navigate, Route, Routes } from "react-router-dom"
import LandingPage from "./components/login/Index"
import SampleDashboard from "./components/login/SampleDashboard";


export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/landingpage"} />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/dashboard" element={<SampleDashboard />} />
      </Routes>
    </>
  );

}
