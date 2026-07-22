import type { ButtonHTMLAttributes, ReactNode } from 'react'
import spinnerLight from '../../assets/spinner-light.svg'
import spinnerDark from '../../assets/spinner-dark.svg'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = {
  children?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

export function Button({
  children = 'Button',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading
  const spinnerSrc = variant === 'primary' ? spinnerLight : spinnerDark

  return (
    <button
      type={type}
      className={['btn', `btn--${variant}`, `btn--${size}`, className]
        .filter(Boolean)
        .join(' ')}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      data-loading={loading || undefined}
      {...rest}
    >
      {loading ? (
        <img
          className="btn__spinner"
          src={spinnerSrc}
          alt=""
          aria-hidden="true"
          width={size === 'sm' ? 14 : size === 'md' ? 16 : 20}
          height={size === 'sm' ? 14 : size === 'md' ? 16 : 20}
        />
      ) : null}
      <span className="btn__label">{children}</span>
    </button>
  )
}
