import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, MenuItem } from "@mui/material";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@mui/icons-material/Delete';

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [newUser, setNewUser] = useState({ username: "", email: "", password: "", role: "" });
    const roles = ["admin", "user"];

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            axios.get("http://localhost:5000/api/users", {
                headers: { "x-access-token": token },
            })
                .then((res) => setUsers(res.data))
                .catch((err) => console.error(err.response.data));
        } else {
            console.error("No token found. User is not authenticated.");
        }
    }, []);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const handleCreateUser = () => {
        const token = localStorage.getItem("authToken");
        if (token) {
            axios.post("http://localhost:5000/api/users", newUser, {
                headers: { "x-access-token": token },
            })
                .then((res) => {
                    const createdUser = { ...res.data.createdUser, id: res.data.createdUser.id };
                    setUsers([...users, createdUser]);
                    setOpen(false);
                    setNewUser({ username: "", email: "", password: "", role: "" });
                    toast.success("User created successfully!");
                })
                .catch((err) => {
                    toast.error(err.response.data);
                    console.error(err.response.data);
                });
        }
    };


    const handleDelete = (id) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            axios.delete(`http://localhost:5000/api/users/${id}`, {headers: { "x-access-token": token }}).then((res) => {
                setUsers(users.filter(user => user.id !== id));
                toast.success("User deleted successfully!");
            })
                .catch((err) => {
                    toast.error(err.response.data);
                    console.error(err.response.data);
                });
        }
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "username", headerName: "Name", width: 150 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "role", headerName: "Role", width: 150 },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => (
                <Button
                    onClick={() => handleDelete(params.row.id)}
                    color="error"
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <Box style={{ height: 400, width: "80%", margin: "auto" }}>
            <Box display="flex" justifyContent="flex-end" marginBottom="20px">
                {localStorage.getItem("role") === "admin" && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClickOpen}
                        style={{ width: "auto" }}
                    >
                        Create User
                    </Button>
                )}
            </Box>

            <DataGrid
                rows={users.map((user) => ({ ...user, id: user.id }))}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create User</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="username"
                        label="Username"
                        type="text"
                        fullWidth
                        value={newUser.username}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={newUser.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={newUser.password}
                        onChange={handleChange}
                    />
                    <TextField
                        select
                        margin="dense"
                        name="role"
                        label="Role"
                        fullWidth
                        value={newUser.role}
                        onChange={handleChange}
                    >
                        {roles.map((role) => (
                            <MenuItem key={role} value={role}>
                                {role}
                            </MenuItem>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreateUser} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>

            <ToastContainer />
        </Box>
    );
};

export default UsersTable;
