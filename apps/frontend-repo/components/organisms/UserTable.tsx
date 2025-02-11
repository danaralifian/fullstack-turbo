"use client"

import type React from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "../atoms/Button"
import { useEffect } from "react"
import { fetchUser } from "../../store/action"
import { AppDispatch, RootState } from "../../store/store";

interface User {
    id: number
    name: string
    email: string
}

interface UserTableProps {
    users: User[]
    onEdit: (user: User) => void
}


export const UserTable: React.FC<UserTableProps> = ({ users, onEdit }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, data, error, list } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        dispatch(fetchUser()); // Call the action on component mount
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list?.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.age}</TableCell>
                            <TableCell>
                                <Button onClick={() => onEdit(user)}>Edit</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

