import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
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
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="form" element={<UserFormPage />} />
          <Route path="editor" element={<TextEditorPage />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
