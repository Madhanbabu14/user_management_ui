import React from "react";
import Navbar from "../components/Navbar"; // Navbar Component
import { Box, Typography } from "@mui/material";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Box
                sx={{
                    height: "calc(100vh - 64px)", // Full height minus Navbar
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    backgroundColor: "#f5f5f5", // Light gray background
                    padding: 3,
                }}
            >
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to User Management
                </Typography>
            </Box>
        </>
    );
};

export default Dashboard;
