import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CounterPage from "./pages/Counter"
import UserFormPage from "./pages/UserForm"
import TextEditorPage from "./pages/TextEditorPage"


function App() {
 

  return (
    <Box p={5}>
     <Routes>
     <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/form" element={<UserFormPage />} />
        <Route path="/editor" element={<TextEditorPage />} />
     </Routes>
    </Box>
  )
}

export default App
