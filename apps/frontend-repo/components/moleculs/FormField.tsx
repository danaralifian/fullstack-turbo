import type React from "react"
import { Input } from "../atoms/Input"
import { Box, InputLabel } from "@mui/material"

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  type: string
  name: string
}

export const FormField: React.FC<FormFieldProps> = ({ label, id, type, name, onChange }) => {
  return (
    <Box mb={2}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} type={type} name={name} onChange={onChange} />
    </Box>
  )
}

