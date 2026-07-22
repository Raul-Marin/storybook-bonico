import {
  ColorGroup,
  ColorSwatch,
  DocHero,
  DocPage,
  DocSection,
  TokenTable,
} from '../_components/DocPrimitives'
import { colorGroups } from '../../tokens/catalog'
import '../_components/DocPrimitives.css'

export function ColorsPage() {
  return (
    <DocPage>
      <DocHero
        eyebrow="Foundations · Color"
        title="Color tokens"
        description="Semantic color roles for interactive components. Swatches resolve live from CSS variables so docs always match production."
      />

      <DocSection
        title="Palette"
        description="Grouped by intent. Click a swatch to copy the hex, or the token chip to copy the CSS variable."
      >
        {colorGroups.map((group) => (
          <ColorGroup
            key={group.title}
            title={group.title}
            description={group.description}
            ramp={group.tokens.map(({ cssVar, value, name }) => ({
              cssVar,
              value,
              name,
            }))}
          >
            {group.tokens.map((token) => (
              <ColorSwatch key={token.cssVar} {...token} />
            ))}
          </ColorGroup>
        ))}
      </DocSection>

      <DocSection title="Reference table">
        <TokenTable rows={colorGroups.flatMap((group) => group.tokens)} />
      </DocSection>
    </DocPage>
  )
}
