import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextEditorPage() {
  const [content, setContent] = useState<string>("");

  // Load saved user data from localStorage
  useEffect(() => {
    const savedUserData = localStorage.getItem("userId");
    if (savedUserData) {
      const parsedData = JSON.parse(savedUserData);
      const formattedText = `Name: ${parsedData.name}\nEmail: ${parsedData.email}\nPhone: ${parsedData.phone}\nAddress: ${parsedData.address}`;
      setContent(formattedText); // Set initial text inside editor
    }
  }, []);

  // Handle content change
  function handleEditorChange(content: string) {
    setContent(content);
  }

  function handleSave() {
    localStorage.setItem("richTextContent", content);
    alert("Content saved successfully!");
  }
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        width: "80%",
        margin: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        {" "}
        Rich Text Editor
      </Typography>
      <ReactQuill
        value={content}
        onChange={handleEditorChange}
        modules={{
          toolbar: [
            ["bold", "italic", "underline"], // Formatting options
            [{ list: "ordered" }, { list: "bullet" }], // Lists
            ["clean"], // Clear formatting
          ],
        }}
        style={{ width: "100%", height: "200px", marginBottom: "20px" }}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Data
      </Button>
    </Box>
  );
}
