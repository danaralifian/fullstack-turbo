"use client"

import type React from "react"
import { useState } from "react"
import { Modal, Box, Typography } from "@mui/material"
import { Input } from "../atoms/Input"
import { Button } from "../atoms/Button"

interface User {
    id: number
    name: string
    email: string
}

interface EditUserModalProps {
    user: User | null
    onClose: () => void
    onSave: (user: User) => void
}

export const EditUserModal: React.FC<EditUserModalProps> = ({ user, onClose, onSave }) => {
    const [name, setName] = useState(user?.name || "")
    const [email, setEmail] = useState(user?.email || "")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (user) {
            onSave({ ...user, name, email })
        }
        onClose()
    }

    if (!user) return null

    return (
        <Modal open={!!user} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h6" component="h2" gutterBottom>
                    Edit User
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box mb={2}>
                        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                    </Box>
                    <Box mb={2}>
                        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
                    </Box>
                    <Box display="flex" justifyContent="flex-end" gap={1}>
                        <Button onClick={onClose} color="secondary">
                            Cancel
                        </Button>
                        <Button type="submit">Save</Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    )
}

