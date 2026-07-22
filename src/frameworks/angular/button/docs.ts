/**
 * Angular Primary usage snippets for Storybook Code panel / docs.
 * Source of truth: src/frameworks/angular/button/
 */

export const angularPrimaryUsage = `<!-- template -->
<bonico-button
  variant="primary"
  size="md"
  label="Button"
/>`

export const angularPrimaryComponent = `import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'bonico-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() loading = false;
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() label = 'Button';

  get isDisabled(): boolean {
    return this.disabled || this.loading;
  }

  get hostClass(): string {
    return ['btn', \`btn--\${this.variant}\`, \`btn--\${this.size}\`].join(' ');
  }
}`

export const angularPrimaryTemplate = `<button
  [attr.type]="type"
  [class]="hostClass"
  [disabled]="isDisabled"
  [attr.aria-busy]="loading || null"
>
  <img *ngIf="loading" class="btn__spinner" [src]="spinnerSrc" alt="" />
  <span class="btn__label">{{ label }}</span>
</button>`

export const angularPrimaryCodePanel = `// button.component.ts (Angular standalone)
${angularPrimaryComponent}

// usage
${angularPrimaryUsage}`
