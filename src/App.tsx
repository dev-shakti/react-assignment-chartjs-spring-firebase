import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import CounterPage from "./pages/Counter";
import UserFormPage from "./pages/UserForm";
import TextEditorPage from "./pages/TextEditorPage";
import { DashboardPage } from "./pages/Dashboard";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/form" element={<UserFormPage />} />
        <Route path="/editor" element={<TextEditorPage />} />
      </Routes>
    </Box>
  );
}

export default App;
