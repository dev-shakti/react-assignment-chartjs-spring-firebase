import { Box, Typography, Card, CardContent } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const DashboardPage = () => {
  const [count, setCount] = useState<number>(0);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Load user data & counter from local storage
    const storedUserData = localStorage.getItem("userId");
    const storedCounter = localStorage.getItem("counter");

    if (storedUserData) setUserData(JSON.parse(storedUserData));
    if (storedCounter) setCount(Number(storedCounter));
  }, []);

  // Mock trend data for the user profile
  const userTrendData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Profile Activity",
        data: [10, 25, 40, 30, 60, 80], 
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        tension: 0.3, // Bezier curve
      },
    ],
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Dashboard
      </Typography>

      {/* Counter Display */}
      <Card sx={{ marginBottom: 3, padding: 2 }}>
        <CardContent>
          <Typography variant="h5">Counter Value</Typography>
          <Typography variant="h6">{count}</Typography>
        </CardContent>
      </Card>

      {/* User Profile Trends */}
      {userData && ( 
      <Card sx={{ padding: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            User Profile Trends
          </Typography>
          <Line data={userTrendData} />
        </CardContent>
      </Card>)}
    </Box>
  );
};
