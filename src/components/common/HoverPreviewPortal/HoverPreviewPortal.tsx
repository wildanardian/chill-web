import { createPortal } from "react-dom"
import type { ReactNode } from "react"

interface HoverPreviewPortalProps {
  position: { top: number; left: number; width: number; enlargedWidth: number } | null
  children: ReactNode
}

export function HoverPreviewPortal({ position, children }: HoverPreviewPortalProps) {
  if (!position || typeof document === "undefined") return null

  return createPortal(
    <div
      className="absolute z-900"
      style={{
        top: position.top,
        left: position.left,
        width: position.enlargedWidth,
      }}
    >
      {children}
    </div>,
    document.body
  )
}
