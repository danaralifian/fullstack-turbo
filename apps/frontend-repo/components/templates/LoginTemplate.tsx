import type React from "react"
import { Container, Paper, Typography, Box } from "@mui/material"
import { LoginForm } from "../organisms/LoginForm"

export const LoginTemplate: React.FC = () => {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Paper elevation={3}>
                    <Box p={3}>
                        <Typography variant="h4" component="h1" gutterBottom align="center">
                            Sign in to your account
                        </Typography>
                        <LoginForm />
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}

