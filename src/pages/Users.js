import React from "react";
import UsersTable from "../components/UsersTable";
import Navbar from '../components/Navbar'; // Navbar Component

const Users = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1 style={{ textAlign: "center", margin: "20px" }}>Users</h1>
                <UsersTable />
            </div>
        </>
    );
};

export default Users;
