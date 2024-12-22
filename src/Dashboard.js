// // Import necessary dependencies
// import React, { useState, useEffect } from 'react';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Container,
//     Table,
//     TableHead,
//     TableRow,
//     TableCell,
//     TableBody,
//     TablePagination,
//     TextField,
// } from '@mui/material';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import axios from 'axios';

// function Dashboard() {
//     // States for data and UI control
//     const [users, setUsers] = useState([]);
//     const [filteredUsers, setFilteredUsers] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [order, setOrder] = useState("asc");
//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(5);

//     useEffect(() => {
//         // Fetch user data from the mock API
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((response) => {
//                 setUsers(response.data);
//                 setFilteredUsers(response.data);
//             })
//             .catch((error) => console.error('Error fetching users:', error));
//     }, []);

//     // Handle search filtering
//     const handleSearch = (event) => {
//         const value = event.target.value.toLowerCase();
//         setSearchTerm(value);
//         setFilteredUsers(
//             users.filter((user) =>
//                 user.name.toLowerCase().includes(value) ||
//                 user.email.toLowerCase().includes(value)
//             )
//         );
//     };

//     // Handle sorting
//     const handleSort = (field) => {
//         const sortedData = [...filteredUsers].sort((a, b) => {
//             if (a[field] < b[field]) return order === "asc" ? -1 : 1;
//             if (a[field] > b[field]) return order === "asc" ? 1 : -1;
//             return 0;
//         });
//         setFilteredUsers(sortedData);
//         setOrder(order === "asc" ? "desc" : "asc");
//     };

//     // Handle pagination
//     const handlePageChange = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleRowsPerPageChange = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };

//     // Mock chart data
//     const chartData = [
//         { name: 'Day 1', activity: 100 },
//         { name: 'Day 2', activity: 200 },
//         { name: 'Day 3', activity: 150 },
//         { name: 'Day 4', activity: 300 },
//         { name: 'Day 5', activity: 250 },
//     ];

//     return (
//         <>
//             {/* Navigation Bar */}
//             <AppBar position="static">
//                 <Toolbar>
//                     <Typography variant="h6">Dashboard</Typography>
//                 </Toolbar>
//             </AppBar>

//             <Container>
//                 {/* Chart Section */}
//                 <Typography variant="h4" gutterBottom>Data Visualization</Typography>
//                 <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={chartData}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="name" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Line type="monotone" dataKey="activity" stroke="#8884d8" />
//                     </LineChart>
//                 </ResponsiveContainer>

//                 {/* User Table Section */}
//                 <Typography variant="h4" gutterBottom>User Table</Typography>
//                 <TextField
//                     label="Search by Name or Email"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={searchTerm}
//                     onChange={handleSearch}
//                 />

//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>Name</TableCell>
//                             <TableCell onClick={() => handleSort("email")} style={{ cursor: "pointer" }}>Email</TableCell>
//                             <TableCell>Phone</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {filteredUsers
//                             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                             .map((user) => (
//                                 <TableRow key={user.id}>
//                                     <TableCell>{user.name}</TableCell>
//                                     <TableCell>{user.email}</TableCell>
//                                     <TableCell>{user.phone}</TableCell>
//                                 </TableRow>
//                             ))}
//                     </TableBody>
//                 </Table>
//                 <TablePagination
//                     component="div"
//                     count={filteredUsers.length}
//                     page={page}
//                     onPageChange={handlePageChange}
//                     rowsPerPage={rowsPerPage}
//                     onRowsPerPageChange={handleRowsPerPageChange}
//                 />
//             </Container>
//         </>
//     );
// }

// export default Dashboard;
