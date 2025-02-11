"use client"

import type React from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Grid } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "../atoms/Button"
import { useEffect } from "react"
import { fetchUser } from "../../store/action"
import { AppDispatch, RootState } from "../../store/store";
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

