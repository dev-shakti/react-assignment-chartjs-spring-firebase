import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/counter">
            Counter
          </Button>
          <Button color="inherit" component={Link} to="/form">
            Form
          </Button>
          <Button color="inherit" component={Link} to="/editor">
            Editor
          </Button>
          <Button color="error" variant="outlined">
            Sign Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};