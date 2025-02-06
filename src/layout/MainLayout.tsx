import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";

export default function MainLayout() {
  const {user}=useAuth()
  
  // Redirect unauthenticated users
  if(!user) {
    return <Navigate to="/auth/signin"/>
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
