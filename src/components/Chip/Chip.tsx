import type { HTMLAttributes, MouseEvent, ReactNode } from 'react'
import './Chip.css'

export type ChipVariant = 'primary' | 'secondary' | 'ghost'
export type ChipSize = 'sm' | 'md' | 'lg'

export type ChipProps = {
  children?: ReactNode
  variant?: ChipVariant
  size?: ChipSize
  dismissible?: boolean
  disabled?: boolean
  onDismiss?: () => void
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>

function DismissIcon() {
  return (
    <svg
      className="chip__dismiss-icon"
      viewBox="0 0 12 12"
      width="12"
      height="12"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2.5 2.5l7 7M9.5 2.5l-7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Chip({
  children = 'Chip',
  variant = 'primary',
  size = 'md',
  dismissible = false,
  disabled = false,
  onDismiss,
  className = '',
  onClick,
  ...rest
}: ChipProps) {
  const isInteractive = Boolean(onClick) && !disabled

  return (
    <span
      className={['chip', `chip--${variant}`, `chip--${size}`, className]
        .filter(Boolean)
        .join(' ')}
      aria-disabled={disabled || undefined}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={disabled ? undefined : onClick}
      onKeyDown={
        isInteractive
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onClick?.(event as unknown as MouseEvent<HTMLSpanElement>)
              }
            }
          : undefined
      }
      {...rest}
    >
      <span className="chip__label">{children}</span>
      {dismissible ? (
        <button
          type="button"
          className="chip__dismiss"
          disabled={disabled}
          aria-label="Dismiss"
          onClick={(event) => {
            event.stopPropagation()
            onDismiss?.()
          }}
        >
          <DismissIcon />
        </button>
      ) : null}
    </span>
  )
}
