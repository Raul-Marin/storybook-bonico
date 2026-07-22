import {
  Callout,
  DocHero,
  DocPage,
  DocSection,
  TokenTable,
  UsageCard,
} from '../_components/DocPrimitives'
import { effectTokens } from '../../tokens/catalog'
import '../_components/DocPrimitives.css'

export function EffectsPage() {
  return (
    <DocPage>
      <DocHero
        eyebrow="Foundations · Effects"
        title="Interaction effects"
        description="Focus treatment, disabled opacity, and loading spinner sizes."
      />

      <Callout title="Focus ring recipe">
        <p>
          Apply both gap and ring:{" "}
          <code>
            box-shadow: 0 0 0 2px var(--btn-focus-ring-gap), 0 0 0 4px
            var(--btn-focus-ring);
          </code>
        </p>
      </Callout>

      <DocSection title="Live examples">
        <UsageCard title="Focus">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 96,
              height: 40,
              padding: '0 16px',
              borderRadius: 'var(--btn-radius-md)',
              background: 'var(--btn-primary-bg)',
              color: 'var(--btn-primary-text)',
              fontFamily: 'var(--btn-font-family)',
              fontSize: 'var(--btn-font-size-md)',
              fontWeight: 500,
              boxShadow:
                '0 0 0 2px var(--btn-focus-ring-gap), 0 0 0 4px var(--btn-focus-ring)',
            }}
          >
            Focus
          </div>
        </UsageCard>
        <UsageCard title="Disabled opacity">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 96,
              height: 40,
              padding: '0 16px',
              borderRadius: 'var(--btn-radius-md)',
              background: 'var(--btn-primary-bg-disabled)',
              color: 'var(--btn-primary-text-disabled)',
              fontFamily: 'var(--btn-font-family)',
              fontSize: 'var(--btn-font-size-md)',
              fontWeight: 500,
              opacity: 'var(--btn-disabled-opacity)',
            }}
          >
            Disabled
          </div>
        </UsageCard>
      </DocSection>

      <DocSection title="Reference table">
        <TokenTable rows={effectTokens} />
      </DocSection>
    </DocPage>
  )
}
