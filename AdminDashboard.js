import React, { useState, useEffect } from 'react';
import userService from '../services/userService';
import documentService from '../services/documentService';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await userService.getUsers();
                setUsers(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchDocuments = async () => {
            try {
                const res = await documentService.getDocuments();
                setDocuments(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
        fetchDocuments();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h3>Users</h3>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.username} - {user.email}
                    </li>
                ))}
            </ul>
            <h3>Documents</h3>
            <ul>
                {documents.map(doc => (
                    <li key={doc._id}>
                        {doc.file_id} - Analyzed: {doc.analyzed.toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;