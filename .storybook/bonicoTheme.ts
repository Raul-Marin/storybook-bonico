import { create } from 'storybook/theming'

export default create({
  base: 'light',

  // Brand
  brandTitle: 'Bonico Design System',
  brandUrl: './?path=/story/home--design-system',
  brandImage: './bonico-logo.svg',
  brandTarget: '_self',

  // Typography — Shift+R (GT Walsheim)
  fontBase:
    '"GT Walsheim Medium", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',

  // Brand colors (aligned with design tokens)
  colorPrimary: '#2563eb',
  colorSecondary: '#2563eb',

  // App chrome
  appBg: '#f8fafc',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e2e8f0',
  appBorderRadius: 10,

  // Text
  textColor: '#0f172a',
  textMutedColor: '#64748b',
  textInverseColor: '#ffffff',

  // Toolbar
  barTextColor: '#64748b',
  barSelectedColor: '#2563eb',
  barHoverColor: '#1d4ed8',
  barBg: '#ffffff',

  // Forms / search
  inputBg: '#ffffff',
  inputBorder: '#e2e8f0',
  inputTextColor: '#0f172a',
  inputBorderRadius: 8,

  // Buttons in manager UI
  buttonBg: '#ffffff',
  buttonBorder: '#e2e8f0',
  booleanBg: '#f1f5f9',
  booleanSelectedBg: '#2563eb',
})
