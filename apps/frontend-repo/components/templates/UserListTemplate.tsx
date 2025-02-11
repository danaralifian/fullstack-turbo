"use client"

import type React from "react"
import { useState } from "react"
import { Container, Typography, Box } from "@mui/material"
import { UserTable } from "../organisms/UserTable"
import { EditUserModal } from "../organisms/EditUserModal"

interface User {
    id: number
    name: string
    email: string
}

export const UserListTemplate: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ])
    const [editingUser, setEditingUser] = useState<User | null>(null)

    const handleEdit = (user: User) => {
        setEditingUser(user)
    }

    const handleSave = (updatedUser: User) => {
        setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)))
        setEditingUser(null)
    }

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    User List
                </Typography>
                <UserTable users={users} onEdit={handleEdit} />
                <EditUserModal user={editingUser} onClose={() => setEditingUser(null)} onSave={handleSave} />
            </Box>
        </Container>
    )
}

