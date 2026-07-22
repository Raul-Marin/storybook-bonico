import {
  DocHero,
  DocPage,
  DocSection,
  SpacingPreview,
  TokenTable,
} from '../_components/DocPrimitives'
import { spacingTokens } from '../../tokens/catalog'
import '../_components/DocPrimitives.css'

export function SpacingPage() {
  return (
    <DocPage>
      <DocHero
        eyebrow="Foundations · Spacing"
        title="Spacing tokens"
        description="Padding and gap values that keep control density consistent across sizes."
      />

      <DocSection
        title="Scale"
        description="Bars are proportional previews (4× token value) to make relative size easier to scan."
      >
        <SpacingPreview tokens={spacingTokens} />
      </DocSection>

      <DocSection title="Reference table">
        <TokenTable rows={spacingTokens} />
      </DocSection>
    </DocPage>
  )
}
