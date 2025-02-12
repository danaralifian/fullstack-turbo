"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Modal, Box, Typography } from "@mui/material"
import { Input } from "../atoms/Input"
import { Button } from "../atoms/Button"
import IUser from "@repo/interfaces/models/user"

interface EditUserModalProps {
    user: IUser | null
    onClose: () => void
    onSave: (user: IUser) => void
}

export const EditUserModal: React.FC<EditUserModalProps> = ({ user, onClose, onSave }) => {
    const [userData, setUserData] = useState<IUser | null>(user)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (userData) onSave(userData)
        onClose()
    }

    useEffect(() => {
        setUserData(user)
    }, [user])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...user,
            [e.target.name]: e.target.value
        } as IUser)
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
                        <Input label="Name" name="name" defaultValue={user?.name} onChange={handleChange} fullWidth />
                    </Box>
                    <Box mb={2}>
                        <Input label="Total Avg Weight Ratings" name="totalAverageWeightRatings" type="number" defaultValue={user?.totalAverageWeightRatings} onChange={handleChange} fullWidth />
                    </Box>
                    <Box mb={2}>
                        <Input label="Number Of Rent" name="numberOfRents" type="number" defaultValue={user?.numberOfRents} onChange={handleChange} fullWidth />
                    </Box>
                    <Box mb={2}>
                        <Input label="Recently Active" name="recentlyActive" type="number" defaultValue={user?.recentlyActive} onChange={handleChange} fullWidth />
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

