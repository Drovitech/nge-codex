import type { ReactNode } from 'react'

interface PageChromeProps {
  children: ReactNode
}

export function PageChrome({ children }: PageChromeProps) {
  return (
    <div className="app-wrapper">
      <div className="scanlines" aria-hidden />
      <div className="hex-grid-bg" aria-hidden />
      {children}
    </div>
  )
}
