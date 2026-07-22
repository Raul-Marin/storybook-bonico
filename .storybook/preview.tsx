import type { Preview } from '@storybook/react-vite'
import '../src/styles/shiftr-fonts.css'
import '../src/tokens/tokens.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      codePanel: true,
    },
    options: {
      storySort: {
        order: [
          'Home',
          'Foundations',
          ['Introduction', 'Colors', 'Typography', 'Spacing', 'Radius', 'Effects'],
          'Components',
          ['Button', 'Chip'],
        ],
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
