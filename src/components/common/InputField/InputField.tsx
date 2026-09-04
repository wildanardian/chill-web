import { Pencil } from "lucide-react"

interface InputFieldProps {
  label: string
  value: string
  type?: "text" | "email" | "password"
  editable?: boolean
  isEditing?: boolean
  onEdit?: () => void
  onChange?: (value: string) => void
  className?: string
}

export default function InputField({
  label,
  value,
  type = "text",
  editable = false,
  isEditing = false,
  onEdit,
  onChange,
  className = "",
}: InputFieldProps) {
  const displayValue = type === "password" ? "*".repeat(value.length) : value

  return (
    <div
      className={`flex min-h-[56px] w-full items-center justify-between gap-4 rounded-lg border border-outline-border bg-background-paper px-5 py-3 text-white lg:min-h-[64px] lg:px-6 ${className}`}
    >
      <div className="min-w-0">
        <p className="mb-2 text-base font-700 text-light-secondary lg:text-2xl">{label}</p>
        {isEditing ? (
          <input
            type={type}
            value={value}
            onChange={(event) => onChange?.(event.target.value)}
            className="w-full bg-transparent text-xl font-400 text-white outline-none placeholder:text-light-secondary lg:text-2xl"
            aria-label={label}
            autoFocus
          />
        ) : (
          <p className="truncate text-xl font-400 text-white lg:text-2xl">{displayValue}</p>
        )}
      </div>

      {editable ? (
        <button
          type="button"
          onClick={onEdit}
          aria-label={`Edit ${label}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/10"
        >
          <Pencil className="h-6 w-6 fill-current" />
        </button>
      ) : null}
    </div>
  )
}
