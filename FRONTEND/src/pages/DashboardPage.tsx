import Container from "@mui/material/Container/Container";
import Dashboard from "../components/dashboard/Dashboard";
import Navbar from "../components/navbar/Navbar";

export default function dashboardPage() {
  return (
    <>
    <Navbar />
      <Container maxWidth="xl">
        <Dashboard />
      </Container>
    </>
  );
}
