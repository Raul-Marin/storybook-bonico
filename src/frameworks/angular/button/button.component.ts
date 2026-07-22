import { Component, Input } from '@angular/core'
import { NgIf } from '@angular/common'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

/**
 * Bonico Button — Angular (standalone)
 * Visual parity with the React Button. Uses the same CSS tokens from `src/tokens/tokens.css`.
 */
@Component({
  selector: 'bonico-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary'
  @Input() size: ButtonSize = 'md'
  @Input() loading = false
  @Input() disabled = false
  @Input() type: 'button' | 'submit' | 'reset' = 'button'
  @Input() label = 'Button'

  get isDisabled(): boolean {
    return this.disabled || this.loading
  }

  get hostClass(): string {
    return ['btn', `btn--${this.variant}`, `btn--${this.size}`].join(' ')
  }

  get spinnerSrc(): string {
    return this.variant === 'primary'
      ? 'assets/spinner-light.svg'
      : 'assets/spinner-dark.svg'
  }

  get spinnerSize(): number {
    if (this.size === 'sm') return 14
    if (this.size === 'lg') return 20
    return 16
  }
}
