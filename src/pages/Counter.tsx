import { Button, Typography, Box } from "@mui/material";
import { useState } from "react";


// Define types for the operation argument in handleCountValue
type Operation = "increment" | "decrement" | "reset";

export default function CounterPage() {
  const [count, setCount] = useState<number>(0);

  function handleCountValue(oper:Operation) {
    switch (oper) {
      case "increment":
        return setCount(count + 1);

      case "decrement":
        if(count===0) return
        return setCount(count - 1);

      case "reset":
        return setCount(0);

      default:
        return;
    }
  }
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Typography variant="h4">Counter: {count}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          marginTop: "20px",
        }}
      >
        <Button
          variant="outlined"
          color="primary" // Blue for increment
          onClick={() => handleCountValue("increment")}
        >
          Increment
        </Button>
        <Button
          variant="outlined"
          color="warning" // Green for decrement
          onClick={() => handleCountValue("decrement")}
        >
          Decrement
        </Button>
        <Button
          variant="contained"
          color="error" // Red for reset
          onClick={() => handleCountValue("reset")}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
}
