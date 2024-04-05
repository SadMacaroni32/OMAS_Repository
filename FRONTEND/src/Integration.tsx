import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import LandingPage from "./components/login/Index"
import Dashboard from "./pages/DashboardPage";
import SeatingPlanPage from "./pages/SeatingPlanPage";
import TimeTablePage from "./pages/TimeTablePage";
import Navbar from "../src/components/navbar/Navbar";

export default function App() {
  const location = useLocation();

  {/* Navbar Visibility Access */}
  const navbarVisiblePaths = [
    "/dashboard", 
    "/seatplan", 
    "/timetable"
  ];
  const showNavbar = navbarVisiblePaths.some(path => location.pathname.startsWith(path));

  return (
    <>
      {showNavbar && <Navbar />} {/* Render Navbar only if showNavbar is true */}
      <Routes>
        <Route path="/" element={<Navigate to={"/landingpage"} />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/dashboard/:userId" element={<Dashboard />} />
        <Route path="/seatplan" element={<SeatingPlanPage />} />
        <Route path="/timetable/*" element={<TimeTablePage/>}/>
        <Route path="*" element={<Navigate to={"/landingpage"} />} />
      </Routes>
    </>
  );
}
