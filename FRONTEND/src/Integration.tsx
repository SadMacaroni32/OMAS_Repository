
import { Navigate, Route, Routes } from "react-router-dom"
import LandingPage from "./components/login/Index"
import Dashboard from "./pages/DashboardPage";
import SeatingPlanPage from "./pages/SeatingPlanPage";
import TimeTablePage from "./pages/TimeTablePage";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/landingpage"} />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/dashboard" element={<Navigate to={"/dashboard"} />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/seatplan" element={<SeatingPlanPage />} />
        <Route path="/timetable" element={<Navigate to={"/timetable"}/>}/>
        <Route path="/timetable/*" element={<TimeTablePage/>}/>
      </Routes>
    </>
  );

}
