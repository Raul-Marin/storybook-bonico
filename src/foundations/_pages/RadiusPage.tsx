import {
  DocHero,
  DocPage,
  DocSection,
  RadiusPreview,
  TokenTable,
} from '../_components/DocPrimitives'
import { radiusTokens } from '../../tokens/catalog'
import '../_components/DocPrimitives.css'

export function RadiusPage() {
  return (
    <DocPage>
      <DocHero
        eyebrow="Foundations · Radius"
        title="Radius & border"
        description="Corner radii and stroke width for compact interactive surfaces."
      />

      <DocSection title="Radius scale">
        <RadiusPreview tokens={radiusTokens} />
      </DocSection>

      <DocSection title="Reference table">
        <TokenTable rows={radiusTokens} />
      </DocSection>
    </DocPage>
  )
}
