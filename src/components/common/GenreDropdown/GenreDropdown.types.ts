export interface GenreOption {
  id: string
  label: string
}

export interface GenreDropdownProps {
  label?: string
  options: GenreOption[]
  selected?: GenreOption | null
  onSelect: (option: GenreOption) => void
  columns?: number
  className?: string
  variant?: "inline" | "sheet" | "responsive"
  triggerClassName?: string
}
