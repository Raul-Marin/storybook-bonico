import type { CSSProperties, ReactNode } from 'react'
import './DocPrimitives.css'

export function DocPage({ children }: { children: ReactNode }) {
  return <div className="ds-page">{children}</div>
}

export function DocHero({
  eyebrow,
  title,
  description,
  meta,
}: {
  eyebrow?: string
  title: string
  description?: string
  meta?: ReactNode
}) {
  return (
    <header className="ds-hero">
      {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
      <h1 className="ds-title">{title}</h1>
      {description ? <p className="ds-lead">{description}</p> : null}
      {meta ? <div className="ds-meta">{meta}</div> : null}
    </header>
  )
}

export function DocSection({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section className="ds-section">
      <div className="ds-section__head">
        <h2 className="ds-section__title">{title}</h2>
        {description ? <p className="ds-section__desc">{description}</p> : null}
      </div>
      {children}
    </section>
  )
}

export function ColorSwatch({
  name,
  cssVar,
  value,
  description,
}: {
  name: string
  cssVar: string
  value: string
  description?: string
}) {
  const isLight = isLightColor(value)

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Clipboard may be unavailable in some Storybook embeds.
    }
  }

  return (
    <article className="ds-swatch">
      <button
        type="button"
        className={`ds-swatch__chip ${isLight ? 'ds-swatch__chip--light' : ''}`}
        title={`Copy ${value}`}
        onClick={() => copy(value)}
      >
        <span
          className="ds-swatch__fill"
          style={{ backgroundColor: `var(${cssVar})` }}
        />
        <span className="ds-swatch__chip-overlay">
          <span className="ds-swatch__hex">{value.toUpperCase()}</span>
        </span>
      </button>
      <div className="ds-swatch__body">
        <div className="ds-swatch__heading">
          <h3 className="ds-swatch__name">{name}</h3>
          {description ? <p className="ds-swatch__desc">{description}</p> : null}
        </div>
        <div className="ds-swatch__actions">
          <button
            type="button"
            className="ds-swatch__copy"
            onClick={() => copy(cssVar)}
            title="Copy CSS variable"
          >
            <code>{cssVar}</code>
          </button>
        </div>
      </div>
    </article>
  )
}

function isLightColor(hex: string) {
  const raw = hex.replace('#', '').trim()
  if (raw.length !== 3 && raw.length !== 6) return false
  const full =
    raw.length === 3
      ? raw
          .split('')
          .map((c) => c + c)
          .join('')
      : raw
  const r = Number.parseInt(full.slice(0, 2), 16)
  const g = Number.parseInt(full.slice(2, 4), 16)
  const b = Number.parseInt(full.slice(4, 6), 16)
  // Relative luminance threshold for readable overlay text.
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
  return luminance > 0.72
}

export function ColorGroup({
  title,
  description,
  children,
  ramp,
}: {
  title: string
  description?: string
  children: ReactNode
  ramp?: { cssVar: string; value: string; name: string }[]
}) {
  return (
    <div className="ds-color-group">
      <div className="ds-color-group__head">
        <div>
          <p className="ds-color-group__kicker">Color family</p>
          <h3 className="ds-color-group__title">{title}</h3>
          {description ? <p className="ds-color-group__desc">{description}</p> : null}
        </div>
        {ramp && ramp.length > 0 ? (
          <div className="ds-color-ramp" aria-hidden="true">
            {ramp.map((stop) => (
              <div
                key={stop.cssVar}
                className="ds-color-ramp__stop"
                style={{ backgroundColor: `var(${stop.cssVar})` }}
                title={`${stop.name} · ${stop.value}`}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="ds-swatch-grid">{children}</div>
    </div>
  )
}

export function TokenTable({
  rows,
}: {
  rows: { name: string; cssVar: string; value: string; description?: string }[]
}) {
  return (
    <div className="ds-table-wrap">
      <table className="ds-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>CSS variable</th>
            <th>Value</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.cssVar}>
              <td>{row.name}</td>
              <td>
                <code>{row.cssVar}</code>
              </td>
              <td>
                <code>{row.value}</code>
              </td>
              <td className="ds-table__muted">{row.description ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function SpacingPreview({
  tokens,
}: {
  tokens: { name: string; cssVar: string; value: string; description?: string }[]
}) {
  return (
    <div className="ds-spacing-list">
      {tokens.map((token) => {
        const px = Number.parseFloat(token.value)
        return (
          <div key={token.cssVar} className="ds-spacing-row">
            <div className="ds-spacing-row__meta">
              <strong>{token.name}</strong>
              <code>{token.cssVar}</code>
              <span>{token.value}</span>
            </div>
            <div className="ds-spacing-row__track">
              <div
                className="ds-spacing-row__bar"
                style={{ width: `${Math.max(px * 4, 4)}px` } as CSSProperties}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function TypeSpecimen({
  name,
  sizeVar,
  size,
  lineHeightVar,
  lineHeight,
  weightVar,
  weight,
}: {
  name: string
  sizeVar: string
  size: string
  lineHeightVar: string
  lineHeight: string
  weightVar: string
  weight: string
}) {
  return (
    <article className="ds-type">
      <p
        className="ds-type__sample"
        style={{
          fontSize: `var(${sizeVar})`,
          lineHeight: `var(${lineHeightVar})`,
          fontWeight: `var(${weightVar})` as CSSProperties['fontWeight'],
        }}
      >
        The quick brown fox jumps over the lazy dog
      </p>
      <div className="ds-type__meta">
        <strong>{name}</strong>
        <code>
          {size} / {lineHeight} · {weight}
        </code>
        <span>
          {sizeVar} · {lineHeightVar} · {weightVar}
        </span>
      </div>
    </article>
  )
}

export function RadiusPreview({
  tokens,
}: {
  tokens: { name: string; cssVar: string; value: string }[]
}) {
  return (
    <div className="ds-radius-grid">
      {tokens
        .filter((t) => t.cssVar.includes('radius'))
        .map((token) => (
          <article key={token.cssVar} className="ds-radius-card">
            <div
              className="ds-radius-card__shape"
              style={{ borderRadius: `var(${token.cssVar})` }}
            />
            <strong>{token.name}</strong>
            <code>{token.cssVar}</code>
            <span>{token.value}</span>
          </article>
        ))}
    </div>
  )
}

export function Callout({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <aside className="ds-callout">
      <strong className="ds-callout__title">{title}</strong>
      <div className="ds-callout__body">{children}</div>
    </aside>
  )
}

export function UsageCard({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <article className="ds-usage">
      <h3 className="ds-usage__title">{title}</h3>
      <div className="ds-usage__body">{children}</div>
    </article>
  )
}
