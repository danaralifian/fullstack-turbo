"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Container, Typography, Box } from "@mui/material"
import { UserTable } from "../organisms/UserTable"
import { EditUserModal } from "../organisms/EditUserModal"
import IUser from "@repo/interfaces/models/user"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { fetchUser, updateUser } from "../../store/action"

export const UserListTemplate: React.FC = () => {
    const [editingUser, setEditingUser] = useState<IUser | null>(null)
    const dispatch = useDispatch<AppDispatch>();
    const userState = useSelector((state: RootState) => state.user);

    useEffect(() => {
        dispatch(fetchUser()); // Call the action on component mount
    }, [])

    const handleEdit = (user: IUser) => {
        setEditingUser(user)
    }

    const handleSave = (updatedUser: IUser) => {
        dispatch(updateUser(updatedUser))
        setEditingUser(null)
    }

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    User List
                </Typography>
                <UserTable user={userState} onEdit={handleEdit} />
                <EditUserModal user={editingUser} onClose={() => setEditingUser(null)} onSave={handleSave} />
            </Box>
        </Container>
    )
}

