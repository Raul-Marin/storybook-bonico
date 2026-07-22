import './DesignSystemHome.css'

type NavCard = {
  title: string
  description: string
  href: string
  meta: string
  visual: 'colors' | 'type' | 'spacing' | 'radius' | 'effects' | 'intro' | 'button' | 'chip'
}

const foundationCards: NavCard[] = [
  {
    title: 'Introduction',
    description: 'How the system works, token rules, and usage principles.',
    href: '?path=/story/foundations-introduction--page',
    meta: 'Overview',
    visual: 'intro',
  },
  {
    title: 'Colors',
    description: 'Primary, secondary, ghost and focus palettes with live swatches.',
    href: '?path=/story/foundations-colors--page',
    meta: 'Foundations',
    visual: 'colors',
  },
  {
    title: 'Typography',
    description: 'Inter scale for SM, MD and LG control sizes.',
    href: '?path=/story/foundations-typography--page',
    meta: 'Foundations',
    visual: 'type',
  },
  {
    title: 'Spacing',
    description: 'Padding and gap tokens that keep density consistent.',
    href: '?path=/story/foundations-spacing--page',
    meta: 'Foundations',
    visual: 'spacing',
  },
  {
    title: 'Radius',
    description: 'Corner radii and border width for interactive surfaces.',
    href: '?path=/story/foundations-radius--page',
    meta: 'Foundations',
    visual: 'radius',
  },
  {
    title: 'Effects',
    description: 'Focus rings, disabled opacity and loading spinners.',
    href: '?path=/story/foundations-effects--page',
    meta: 'Foundations',
    visual: 'effects',
  },
]

const componentCards: NavCard[] = [
  {
    title: 'Button',
    description: 'Primary, secondary and ghost actions with loading and focus states.',
    href: '?path=/story/components-button--primary',
    meta: 'Components',
    visual: 'button',
  },
  {
    title: 'Chip',
    description: 'Compact tags and filters built on the same token system.',
    href: '?path=/story/components-chip--primary',
    meta: 'Components',
    visual: 'chip',
  },
]

function CardVisual({ type }: { type: NavCard['visual'] }) {
  if (type === 'colors') {
    return (
      <div className="home-visual home-visual--colors" aria-hidden="true">
        <span style={{ background: 'var(--btn-primary-bg)' }} />
        <span style={{ background: 'var(--btn-primary-bg-hover)' }} />
        <span style={{ background: 'var(--btn-secondary-bg-hover)' }} />
        <span style={{ background: 'var(--btn-ghost-border)' }} />
        <span style={{ background: 'var(--btn-focus-ring)' }} />
      </div>
    )
  }

  if (type === 'type') {
    return (
      <div className="home-visual home-visual--type" aria-hidden="true">
        <span className="home-visual__Aa">Aa</span>
        <span className="home-visual__type-meta">Inter · 13 / 14 / 16</span>
      </div>
    )
  }

  if (type === 'spacing') {
    return (
      <div className="home-visual home-visual--spacing" aria-hidden="true">
        <i style={{ width: 12 }} />
        <i style={{ width: 20 }} />
        <i style={{ width: 32 }} />
        <i style={{ width: 48 }} />
      </div>
    )
  }

  if (type === 'radius') {
    return (
      <div className="home-visual home-visual--radius" aria-hidden="true">
        <span style={{ borderRadius: 'var(--btn-radius-sm)' }} />
        <span style={{ borderRadius: 'var(--btn-radius-md)' }} />
        <span style={{ borderRadius: 'var(--btn-radius-lg)' }} />
      </div>
    )
  }

  if (type === 'effects') {
    return (
      <div className="home-visual home-visual--effects" aria-hidden="true">
        <span className="home-visual__focus-demo">Focus</span>
      </div>
    )
  }

  if (type === 'button') {
    return (
      <div className="home-visual home-visual--button" aria-hidden="true">
        <span className="home-visual__btn home-visual__btn--primary">Button</span>
        <span className="home-visual__btn home-visual__btn--ghost">Button</span>
      </div>
    )
  }

  if (type === 'chip') {
    return (
      <div className="home-visual home-visual--chip" aria-hidden="true">
        <span className="home-visual__chip home-visual__chip--primary">Chip</span>
        <span className="home-visual__chip home-visual__chip--secondary">Filter</span>
      </div>
    )
  }

  return (
    <div className="home-visual home-visual--intro" aria-hidden="true">
      <span className="home-visual__mark">B</span>
      <span className="home-visual__system">Design System</span>
    </div>
  )
}

function SectionCard({ card }: { card: NavCard }) {
  return (
    <a className="home-card" href={card.href}>
      <div className="home-card__shell">
        <div className="home-card__visual">
          <CardVisual type={card.visual} />
        </div>
        <div className="home-card__body">
          <div className="home-card__meta">{card.meta}</div>
          <h3 className="home-card__title">{card.title}</h3>
          <p className="home-card__desc">{card.description}</p>
          <span className="home-card__cta">
            Open
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path
                d="M3.5 8h9M8.5 4l4 4-4 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </a>
  )
}

export function DesignSystemHome() {
  return (
    <div className="home">
      <header className="home-hero">
        <div className="home-hero__copy">
          <p className="home-hero__eyebrow">Bonico Design System</p>
          <h1 className="home-hero__title">Build consistent product UI</h1>
          <p className="home-hero__lead">
            Tokens, foundations and components in one place. Explore the system
            like a design platform — start with foundations, then jump into
            components.
          </p>
          <div className="home-hero__stats">
            <div>
              <strong>6</strong>
              <span>Foundations</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Components</span>
            </div>
            <div>
              <strong>v0.1</strong>
              <span>System</span>
            </div>
          </div>
        </div>
        <div className="home-hero__panel" aria-hidden="true">
          <div className="home-hero__panel-inner">
            <div className="home-hero__row">
              <span className="home-visual__btn home-visual__btn--primary">Primary</span>
              <span className="home-visual__btn home-visual__btn--ghost">Ghost</span>
            </div>
            <div className="home-hero__row">
              <span className="home-visual__chip home-visual__chip--primary">Label</span>
              <span className="home-visual__chip home-visual__chip--secondary">Filter</span>
              <span className="home-visual__chip home-visual__chip--ghost">Tag</span>
            </div>
            <div className="home-hero__ramp">
              <i style={{ background: 'var(--btn-primary-bg)' }} />
              <i style={{ background: 'var(--btn-primary-bg-hover)' }} />
              <i style={{ background: 'var(--btn-primary-bg-disabled)' }} />
              <i style={{ background: 'var(--btn-secondary-border)' }} />
              <i style={{ background: 'var(--btn-focus-ring)' }} />
            </div>
          </div>
        </div>
      </header>

      <section className="home-section">
        <div className="home-section__head">
          <h2>Foundations</h2>
          <p>The raw material of the system — color, type, space and motion cues.</p>
        </div>
        <div className="home-grid">
          {foundationCards.map((card) => (
            <SectionCard key={card.href} card={card} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__head">
          <h2>Components</h2>
          <p>Ready-to-use UI built on shared tokens. Open a story to inspect variants and code.</p>
        </div>
        <div className="home-grid home-grid--components">
          {componentCards.map((card) => (
            <SectionCard key={card.href} card={card} />
          ))}
        </div>
      </section>
    </div>
  )
}
