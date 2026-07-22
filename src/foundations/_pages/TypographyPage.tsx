import {
  DocHero,
  DocPage,
  DocSection,
  TokenTable,
  TypeSpecimen,
  UsageCard,
} from '../_components/DocPrimitives'
import { fontFamilyToken, typographyTokens } from '../../tokens/catalog'
import '../_components/DocPrimitives.css'

export function TypographyPage() {
  return (
    <DocPage>
      <DocHero
        eyebrow="Foundations · Typography"
        title="Typography tokens"
        description="A compact Inter scale for Button/Chip components. Documentation UI uses Gooper (display) and GT Walsheim (body) from Shift+R."
      />

      <DocSection title="Font family">
        <UsageCard title={fontFamilyToken.name}>
          <p>
            <code>{fontFamilyToken.cssVar}</code> →{' '}
            <code>{fontFamilyToken.value}</code>
          </p>
        </UsageCard>
      </DocSection>

      <DocSection
        title="Type scale"
        description="Specimens render with the live CSS variables."
      >
        {typographyTokens.map((token) => (
          <TypeSpecimen key={token.name} {...token} />
        ))}
      </DocSection>

      <DocSection title="Reference table">
        <TokenTable
          rows={typographyTokens.flatMap((token) => [
            {
              name: `${token.name} / Size`,
              cssVar: token.sizeVar,
              value: token.size,
            },
            {
              name: `${token.name} / Line height`,
              cssVar: token.lineHeightVar,
              value: token.lineHeight,
            },
            {
              name: `${token.name} / Weight`,
              cssVar: token.weightVar,
              value: token.weight,
            },
          ])}
        />
      </DocSection>
    </DocPage>
  )
}
