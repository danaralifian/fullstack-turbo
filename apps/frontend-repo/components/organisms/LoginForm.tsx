"use client"

import React from "react"
import { Button } from "../atoms/Button"
import { Box } from "@mui/material"
import { FormField } from "../moleculs/FormField"
import { loginWithEmailPassword } from "../../libs/auth"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

interface ILogin {
    email: string
    password: string
}

export const LoginForm: React.FC = () => {
    const [value, setValue] = React.useState<ILogin>({} as ILogin)
    const [error, setError] = React.useState<any>()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login logic here
        try {
            const user = await loginWithEmailPassword(value.email, value.password);
            const token = await user.getIdToken()
            Cookies.set(process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME || "", token)
            router.push('/')
        } catch (err: any) {
            setError(err.message);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>
                <FormField label="Email" name="email" id="email" type="email" onChange={handleChange} />
                <FormField label="Password" name="password" id="password" type="password" onChange={handleChange} />
                <Button type="submit">Sign In</Button>
            </Box>
        </form>
    )
}

