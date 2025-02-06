import { Box, Button, Typography } from "@mui/material"
import { useAuth } from "../hooks/useAuth"

const Signin = () => {
    const {signInWithGoogle}=useAuth()
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    }}
  >
    <Typography variant="h4" mb={2}>
      Sign In
    </Typography>
    <Button variant="contained" color="primary" onClick={signInWithGoogle}>
      Sign in with Google
    </Button>
  </Box>
  )
}

export default Signin
