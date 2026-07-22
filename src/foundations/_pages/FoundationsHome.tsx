import {
  Callout,
  DocHero,
  DocPage,
  DocSection,
  UsageCard,
} from '../_components/DocPrimitives'
import { foundationsMeta } from '../../tokens/catalog'
import '../_components/DocPrimitives.css'

export function FoundationsHome() {
  return (
    <DocPage>
      <DocHero
        eyebrow="Design system"
        title={foundationsMeta.title}
        description={foundationsMeta.description}
        meta={
          <>
            <span>v{foundationsMeta.version}</span>
            <a href={foundationsMeta.sourceUrl} target="_blank" rel="noreferrer">
              {foundationsMeta.source}
            </a>
          </>
        }
      />

      <Callout title="How to use tokens">
        <p>
          Consume values through CSS custom properties from{' '}
          <code>src/tokens/tokens.css</code>. Components should never hard-code
          hex values or spacing that already exist as tokens.
        </p>
      </Callout>

      <DocSection
        title="Foundations map"
        description="Browse tokens the same way you would in Zeroheight: start with color and type, then spacing, radius, and interaction effects."
      >
        <UsageCard title="1. Colors">
          Primary, secondary, ghost and focus palettes used by Button and Chip.
        </UsageCard>
        <UsageCard title="2. Typography">
          Inter scale for SM / MD / LG control sizes, including weight and line-height.
        </UsageCard>
        <UsageCard title="3. Spacing">
          Padding and gap tokens that keep interactive components optically balanced.
        </UsageCard>
        <UsageCard title="4. Radius & border">
          Corner radii and stroke width for compact controls.
        </UsageCard>
        <UsageCard title="5. Effects">
          Focus rings, disabled opacity, and spinner sizes.
        </UsageCard>
      </DocSection>

      <DocSection title="Usage in CSS">
        <UsageCard title="Reference a token">
          <pre>{`.btn--primary {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
}`}</pre>
        </UsageCard>
        <UsageCard title="Do / Don't">
          <ul>
            <li>
              <strong>Do</strong> — <code>var(--btn-radius-md)</code>
            </li>
            <li>
              <strong>Don't</strong> — hard-code <code>8px</code> when a radius token exists
            </li>
            <li>
              <strong>Do</strong> — alias component tokens (e.g. Chip) to shared Button tokens
            </li>
          </ul>
        </UsageCard>
      </DocSection>
    </DocPage>
  )
}
