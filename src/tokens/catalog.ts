/**
 * Design token catalog for Storybook Foundations docs.
 * Values mirror `tokens.css` — keep both in sync.
 */

export type ColorToken = {
  name: string
  cssVar: string
  value: string
  description?: string
}

export type ScaleToken = {
  name: string
  cssVar: string
  value: string
  description?: string
}

export type TypeToken = {
  name: string
  sizeVar: string
  size: string
  lineHeightVar: string
  lineHeight: string
  weightVar: string
  weight: string
}

export const foundationsMeta = {
  title: 'Bonico Design System',
  version: '0.1.0',
  source: 'Figma · Button — Storybook',
  sourceUrl:
    'https://www.figma.com/design/pKo1uwKpBNRvPgmvrYj7BE/Button---Storybook',
  description:
    'Foundational design tokens that power Bonico UI components. Use CSS custom properties — never hard-code values in components.',
}

export const colorGroups: { title: string; description: string; tokens: ColorToken[] }[] = [
  {
    title: 'Primary',
    description: 'Brand action color. Use for primary buttons, chips, and key CTAs.',
    tokens: [
      { name: 'Primary / BG', cssVar: '--btn-primary-bg', value: '#2563eb', description: 'Default fill' },
      { name: 'Primary / BG Hover', cssVar: '--btn-primary-bg-hover', value: '#1d4ed8', description: 'Hover fill' },
      { name: 'Primary / BG Disabled', cssVar: '--btn-primary-bg-disabled', value: '#93c5fd', description: 'Disabled fill' },
      { name: 'Primary / Text', cssVar: '--btn-primary-text', value: '#ffffff', description: 'On-primary text' },
      { name: 'Primary / Text Disabled', cssVar: '--btn-primary-text-disabled', value: '#ffffff', description: 'On-primary disabled text' },
    ],
  },
  {
    title: 'Secondary',
    description: 'Neutral surfaces for secondary actions and soft containers.',
    tokens: [
      { name: 'Secondary / BG', cssVar: '--btn-secondary-bg', value: '#ffffff', description: 'Default fill' },
      { name: 'Secondary / BG Hover', cssVar: '--btn-secondary-bg-hover', value: '#f1f5f9', description: 'Hover fill' },
      { name: 'Secondary / BG Disabled', cssVar: '--btn-secondary-bg-disabled', value: '#f8fafc', description: 'Disabled fill' },
      { name: 'Secondary / Border', cssVar: '--btn-secondary-border', value: '#cbd5e1', description: 'Stroke' },
      { name: 'Secondary / Text', cssVar: '--btn-secondary-text', value: '#1e293b', description: 'Label color' },
      { name: 'Secondary / Text Disabled', cssVar: '--btn-secondary-text-disabled', value: '#94a3b8', description: 'Disabled label' },
    ],
  },
  {
    title: 'Ghost',
    description: 'Outlined emphasis using the brand blue without a solid fill.',
    tokens: [
      { name: 'Ghost / BG', cssVar: '--btn-ghost-bg', value: '#ffffff', description: 'Default fill' },
      { name: 'Ghost / BG Hover', cssVar: '--btn-ghost-bg-hover', value: '#f1f5f9', description: 'Hover fill' },
      { name: 'Ghost / BG Disabled', cssVar: '--btn-ghost-bg-disabled', value: '#ffffff', description: 'Disabled fill' },
      { name: 'Ghost / Border', cssVar: '--btn-ghost-border', value: '#2563eb', description: 'Stroke' },
      { name: 'Ghost / Text', cssVar: '--btn-ghost-text', value: '#2563eb', description: 'Label color' },
      { name: 'Ghost / Text Disabled', cssVar: '--btn-ghost-text-disabled', value: '#94a3b8', description: 'Disabled label' },
    ],
  },
  {
    title: 'Focus',
    description: 'Accessibility focus ring — always pair gap + ring.',
    tokens: [
      { name: 'Focus / Ring', cssVar: '--btn-focus-ring', value: '#f5bf00', description: 'Outer focus color' },
      { name: 'Focus / Ring Gap', cssVar: '--btn-focus-ring-gap', value: '#ffffff', description: 'Inner contrast gap' },
    ],
  },
]

export const spacingTokens: ScaleToken[] = [
  { name: 'Gap', cssVar: '--btn-gap', value: '8px', description: 'Inline gap between icon and label' },
  { name: 'Padding X / SM', cssVar: '--btn-padding-x-sm', value: '12px' },
  { name: 'Padding Y / SM', cssVar: '--btn-padding-y-sm', value: '6px' },
  { name: 'Padding X / MD', cssVar: '--btn-padding-x-md', value: '16px' },
  { name: 'Padding Y / MD', cssVar: '--btn-padding-y-md', value: '10px' },
  { name: 'Padding X / LG', cssVar: '--btn-padding-x-lg', value: '24px' },
  { name: 'Padding Y / LG', cssVar: '--btn-padding-y-lg', value: '14px' },
]

export const radiusTokens: ScaleToken[] = [
  { name: 'Radius / SM', cssVar: '--btn-radius-sm', value: '6px' },
  { name: 'Radius / MD', cssVar: '--btn-radius-md', value: '8px' },
  { name: 'Radius / LG', cssVar: '--btn-radius-lg', value: '10px' },
  { name: 'Border width', cssVar: '--btn-border-width', value: '1.5px' },
]

export const typographyTokens: TypeToken[] = [
  {
    name: 'SM',
    sizeVar: '--btn-font-size-sm',
    size: '13px',
    lineHeightVar: '--btn-line-height-sm',
    lineHeight: '18px',
    weightVar: '--btn-font-weight-sm',
    weight: '500',
  },
  {
    name: 'MD',
    sizeVar: '--btn-font-size-md',
    size: '14px',
    lineHeightVar: '--btn-line-height-md',
    lineHeight: '20px',
    weightVar: '--btn-font-weight-md',
    weight: '500',
  },
  {
    name: 'LG',
    sizeVar: '--btn-font-size-lg',
    size: '16px',
    lineHeightVar: '--btn-line-height-lg',
    lineHeight: '24px',
    weightVar: '--btn-font-weight-lg',
    weight: '600',
  },
]

export const effectTokens: ScaleToken[] = [
  { name: 'Disabled opacity', cssVar: '--btn-disabled-opacity', value: '0.65' },
  { name: 'Spinner / SM', cssVar: '--btn-spinner-sm', value: '14px' },
  { name: 'Spinner / MD', cssVar: '--btn-spinner-md', value: '16px' },
  { name: 'Spinner / LG', cssVar: '--btn-spinner-lg', value: '20px' },
]

export const fontFamilyToken = {
  name: 'Font family',
  cssVar: '--btn-font-family',
  value: "'Inter', system-ui, sans-serif",
}
