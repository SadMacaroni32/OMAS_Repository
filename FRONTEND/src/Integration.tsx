import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import LandingPage from "./components/login/Index"
import Dashboard from "./pages/DashboardPage";
import SeatingPlanPage from "./pages/SeatingPlanPage";
import TimeTablePage from "./pages/TimeTablePage";
import Navbar from "../src/components/navbar/Navbar";
import ViewReservation from "../src/components/timeTable/ViewReservation";
import TestPage from "../src/components/dashboard/dashboardComponents/Testfile";

export default function App() {
  const location = useLocation();

  {/* Navbar Visibility Access */}
  const navbarVisiblePaths = [
    "/dashboard", 
    "/seatplan", 
    "/timetable",
    "/viewreservation"
  ];
  const showNavbar = navbarVisiblePaths.some(path => location.pathname.startsWith(path));

  return (
    <>
      {showNavbar && <Navbar />} {/* Render Navbar only if showNavbar is true */}
      <Routes>
        <Route path="/" element={<Navigate to={"/landingpage"} />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/viewreservation/*" element={<ViewReservation />} />
        <Route path="/seatplan" element={<SeatingPlanPage />} />
        <Route path="/timetable/*" element={<TimeTablePage seat_id={undefined} setShowTimeTablePage={undefined}/>}/>
        <Route path="*" element={<Navigate to={"/landingpage"} />} />
        <Route path="/testpage" element={<TestPage />} />
      </Routes>
    </>
  );
}
