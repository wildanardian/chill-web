import type { ReactNode } from "react"

type ButtonSize = "sm" | "md" | "lg"
type ButtonVariant = "primary" | "secondary" | "error" | "outline"

interface ButtonProps {
  children: ReactNode
  size?: ButtonSize
  variant?: ButtonVariant
}

export default function Button({ children, size = "md", variant = "primary" }: ButtonProps) {
  const variantClass: Record<ButtonVariant, string> = {
    primary: "bg-primary-main text-white",
    secondary: "bg-background-paper text-white",
    error: "bg-error-main text-white",
    outline: "border border-primary-main text-primary-main",
  }

  const sizeClass: Record<ButtonSize, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button className={`rounded-full px-4 py-2 text-base font-500 ${variantClass[variant]} ${sizeClass[size]}`}>
      {children}
    </button>
  )
}
