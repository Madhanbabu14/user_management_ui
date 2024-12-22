import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from '../components/Navbar'; // Navbar Component

const Dashboard = () => {
    const [loginHistory, setLoginHistory] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            axios.get("http://localhost:5000/api/users/login-history", {
                headers: { "x-access-token": token },
            })
                .then((res) => setLoginHistory(res.data.loginHistory))
                .catch((err) => console.error("Error fetching login history:", err));
        }
    }, []);

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "loginTime", headerName: "Login Time", width: 200 },
    ];

    return (
        <>  
            <Navbar />
            <div style={{ height: 400, width: "80%", margin: "auto" }}>
                <h2>User Activity</h2>
                <DataGrid
                    rows={loginHistory.map((log) => ({ ...log, id: log.id }))}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>
    );
};

export default Dashboard;
