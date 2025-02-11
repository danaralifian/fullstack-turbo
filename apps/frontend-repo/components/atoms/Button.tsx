import type React from "react"
import { Button as MuiButton, type ButtonProps } from "@mui/material"

export const Button: React.FC<ButtonProps> = (props) => {
    return <MuiButton variant="contained" {...props} />
}

