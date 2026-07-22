import {
  Callout,
  DocHero,
  DocPage,
  DocSection,
  UsageCard,
} from '../../../foundations/_components/DocPrimitives'
import { Button } from '../../../components/Button'
import {
  angularPrimaryComponent,
  angularPrimaryTemplate,
  angularPrimaryUsage,
} from './docs'
import '../../../foundations/_components/DocPrimitives.css'
import './AngularPrimaryDocs.css'

export function AngularPrimaryDocs() {
  return (
    <DocPage>
      <DocHero
        eyebrow="Components · Button · Angular"
        title="Primary (Angular)"
        description="Documentación del Button primary en Angular standalone. Comparte tokens CSS con la implementación React; el preview visual usa el componente React del design system."
        meta={
          <>
            <span>Framework · Angular</span>
            <span>API · standalone</span>
            <span>Token · --btn-primary-*</span>
          </>
        }
      />

      <Callout title="Nota de runtime">
        <p>
          Este Storybook está montado con React. Aquí documentamos la API Angular
          equivalente (<code>bonico-button</code>). El canvas muestra el mismo
          diseño Primary para paridad visual.
        </p>
      </Callout>

      <DocSection
        title="Preview"
        description="Estado default · variant=primary · size=md"
      >
        <div className="angular-docs__preview">
          <Button variant="primary" size="md">
            Button
          </Button>
        </div>
      </DocSection>

      <DocSection title="Uso">
        <UsageCard title="Template">
          <pre>{angularPrimaryUsage}</pre>
        </UsageCard>
      </DocSection>

      <DocSection title="Componente">
        <UsageCard title="button.component.ts">
          <pre>{angularPrimaryComponent}</pre>
        </UsageCard>
        <UsageCard title="button.component.html">
          <pre>{angularPrimaryTemplate}</pre>
        </UsageCard>
      </DocSection>

      <DocSection title="Tokens">
        <UsageCard title="CSS variables (shared)">
          <ul>
            <li>
              <code>--btn-primary-bg</code> → #ca8a04
            </li>
            <li>
              <code>--btn-primary-bg-hover</code> → #a16207
            </li>
            <li>
              <code>--btn-primary-text</code> → #ffffff
            </li>
            <li>
              <code>--btn-radius-md</code> · <code>--btn-padding-*-md</code>
            </li>
          </ul>
          <p>
            Estilos en{' '}
            <code>src/frameworks/angular/button/button.component.css</code> —
            mismos selectores que React (<code>.btn--primary</code>).
          </p>
        </UsageCard>
      </DocSection>
    </DocPage>
  )
}
