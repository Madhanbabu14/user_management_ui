import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    };

    return (
        <AppBar
            position="static"
            sx={{
                background: "linear-gradient(to right, #4caf50, #81c784)",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        sx={{ display: { xs: "block", sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: "bold",
                            letterSpacing: "0.5px"
                        }}
                    >
                        Dashboard
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        fontSize: "1rem",
                    }}
                >
                    <Button
                        color="inherit"
                        component={Link}
                        to="/dashboard"
                        sx={{ textTransform: "capitalize" }}
                    >
                        Dashboard
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/users"
                        sx={{ textTransform: "capitalize" }}
                    >
                        Users
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/reports"
                        sx={{ textTransform: "capitalize" }}
                    >
                        Reports
                    </Button>
                    <Button
                        color="inherit"
                        onClick={handleLogout}
                        sx={{
                            textTransform: "capitalize",
                            background: "rgba(0,0,0,0.1)",
                            "&:hover": {
                                background: "rgba(0,0,0,0.2)"
                            }
                        }}
                    >
                        Logout
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
