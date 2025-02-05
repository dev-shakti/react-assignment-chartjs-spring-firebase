import { Button, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

// Define types for the operation argument in handleCountValue
type Operation = "increment" | "decrement" | "reset";

export default function CounterPage() {
  const [count, setCount] = useState<number>(() => {
    return Number(localStorage.getItem("counter")) || 0; // Load from localStorage
  });

  function handleCountValue(oper: Operation) {
    switch (oper) {
      case "increment":
        return setCount((prev) => prev + 1);

      case "decrement":
        return setCount((prev) => (prev > 0 ? prev - 1 : 0));

      case "reset":
        return setCount(0);

      default:
        return;
    }
  }

  // Function to calculate background color based on count
  const getBackgroundColor = () => {
    const intensity = Math.min(count * 10, 255); // Scale color based on count
    return `rgb(${intensity}, ${255 - intensity}, 200)`;
  };

  // Create a spring animation for the background color
  const backgroundAnimation = useSpring({
    background: getBackgroundColor(),
    config: { tension: 120, friction: 14 },
  });

  // Save count to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  return (
    <animated.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
        height: "100vh",
        ...backgroundAnimation, // Apply animated background
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
        }}
      >
        Counter: {count}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="primary" // Blue for increment
          onClick={() => handleCountValue("increment")}
        >
          Increment
        </Button>
        <Button
          variant="contained"
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
    </animated.div>
  );
}
