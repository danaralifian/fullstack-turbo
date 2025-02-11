import type React from "react"
import { TextField, type TextFieldProps } from "@mui/material"

export const Input: React.FC<TextFieldProps> = (props) => {
    return <TextField fullWidth variant="outlined" {...props} size="small" />
}

