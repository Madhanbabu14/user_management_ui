import React from "react";
import Chart from "../components/Chart";
import Navbar from '../components/Navbar'; // Navbar Component

const Reports = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1 style={{ textAlign: "center", margin: "20px" }}>Reports</h1>
                <Chart />
            </div>
        </>
    );
};

export default Reports;
