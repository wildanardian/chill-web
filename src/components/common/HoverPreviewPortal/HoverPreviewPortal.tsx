import { createPortal } from "react-dom"
import type { ReactNode } from "react"

interface HoverPreviewPortalProps {
  position: { top: number; left: number; width: number; enlargedWidth: number } | null
  children: ReactNode
}

export function HoverPreviewPortal({ position, children }: HoverPreviewPortalProps) {
  if (!position || typeof document === "undefined") return null

  const width = position.enlargedWidth
  const left = Math.min(
    Math.max(position.left, 8),
    window.innerWidth - width - 8
  )

  return createPortal(
    <div
      className="fixed z-[9999] transition-opacity duration-150"
      style={{
        top: position.top,
        left,
        width,
      }}
    >
      {children}
    </div>,
    document.body
  )
}
