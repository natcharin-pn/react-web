import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper ,Avatar } from '@mui/material';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      console.error('API URL is not defined');
      setError('API URL is not defined');
      setLoading(false);
      return;
    }

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

return (
    <div className='center'>
    <TableContainer component={Paper} className="userTableContainer">
      <Table className="userTable" aria-label="simple table">
        <TableHead>
          <TableRow className="userTableHeader">
            <TableCell className="userTableCellh">ID</TableCell>
            <TableCell className="userTableCellh">avatar</TableCell>
            <TableCell className="userTableCellh">First Name</TableCell>
            <TableCell className="userTableCellh">Last Name</TableCell>
            <TableCell className="userTableCellh">Username</TableCell>
            <TableCell className="userTableCellh">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="userTableRow">
            <TableCell component="th" scope="row" className="userTableCell">{user.id}</TableCell>
            <TableCell className="userTableCell"><Avatar alt={user.fname} src={user.avatar} /></TableCell>
            <TableCell className="userTableCell">{user.fname}</TableCell>
            <TableCell className="userTableCell">{user.lname}</TableCell>
            <TableCell className="userTableCell">{user.username}</TableCell>
            <TableCell className="userTableCell">
              <button className="edit" onClick={() => handleEdit(user.id)}>Edit</button> 
              <button className="delete" onClick={() => handledelete(user.id)}>Delete</button> 
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default UserList;
