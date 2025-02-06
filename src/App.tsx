import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import CounterPage from "./pages/Counter";
import UserFormPage from "./pages/UserForm";
import TextEditorPage from "./pages/TextEditorPage";
import { DashboardPage } from "./pages/Dashboard";
import AuthLayout from "./layout/AuthLayout";
import Signin from "./pages/Signin";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Box>
      <Routes>
         {/* Auth Layout - Public Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<Signin />} />
        </Route>

         {/* Main Layout - Protected Routes */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route path="home" element={<DashboardPage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="form" element={<UserFormPage />} />
          <Route path="editor" element={<TextEditorPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/auth/signin" />} />
      </Routes>
    </Box>
  );
}

export default App;
