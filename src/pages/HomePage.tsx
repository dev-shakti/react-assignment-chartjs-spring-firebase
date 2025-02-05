import { Button, Typography, Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Typography variant="h4">Welcome to the Home Page</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          marginTop:"20px"
        }}
      >
        <Button variant="contained" color="primary" href="/counter">
          Go to Counter
        </Button>
        <Button variant="contained" color="secondary" href="/form">
          Go to UserForm
        </Button>
        <Button variant="contained" color="primary" href="/editor">
          Go to TextEditor
        </Button>
      </Box>
    </Box>
  );
}
