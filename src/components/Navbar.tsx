import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Navbar = () => {
  
  const {signOutUser}=useAuth()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/dashboard/home">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/dashboard/counter">
            Counter
          </Button>
          <Button color="inherit" component={Link} to="/dashboard/form">
            Form
          </Button>
          <Button color="inherit" component={Link} to="/dashboard/editor">
            Editor
          </Button>
          <Button color="error" variant="outlined" onClick={signOutUser}>
            Sign Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};