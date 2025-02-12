"use client"

import type React from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from "@mui/material"
import { Button } from "../atoms/Button"
import IUser from "@repo/interfaces/models/user";
import IUserState from "@repo/interfaces/states/user";

interface UserTableProps {
    onEdit: (user: IUser) => void
    user: IUserState
}


export const UserTable: React.FC<UserTableProps> = ({ user, onEdit }) => {

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
                    {user.loading ?
                        <TableRow>
                            <TableCell colSpan={4} align="center">
                                <CircularProgress />
                            </TableCell>
                        </TableRow> :
                        user?.list?.map((user) => (
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

