import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// Define types for the form data
interface userFormType {
  name: string;
  email: string;
  address: string;
  phone: string;
}

export default function UserFormPage() {
  const [formData, setFormData] = useState<userFormType>({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);

  // Handle form input changes
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {name,value}=event.target
    setFormData((prevData) => {
        const updatedData = { ...prevData, [name]: value };
        setUnsavedChanges(true); // Mark changes as unsaved
        return updatedData;
      });
  }

  // Generate a unique user ID
  function generateUserId() {
    return "user-" + new Date().getTime(); // Simple ID based on timestamp
  }

  // Handle form submission
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Generate a unique user ID
    const userId = generateUserId();

    // Prepare data to store in localStorage
    const userData = {
      userId,
      ...formData,
    };
    
    // Save the form data in localStorage
    localStorage.setItem("userId", JSON.stringify(userData));

    //reset the form to initial state
    setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
      })
    setUnsavedChanges(false); 
  }

   // Handle browser close alert
   useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        const message = "You have unsaved changes. Are you sure you want to leave?";
        e.returnValue = message; 
        return message; 
      }
    };

    // Add event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]); 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        User Form
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
