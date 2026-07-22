import type { Meta, StoryObj } from '@storybook/react-vite'
import { DesignSystemHome } from './DesignSystemHome'

const meta = {
  title: 'Home',
  component: DesignSystemHome,
  parameters: {
    layout: 'padded',
    options: { showPanel: false },
    controls: { disable: true },
    docs: { codePanel: false },
  },
} satisfies Meta<typeof DesignSystemHome>

export default meta
type Story = StoryObj<typeof meta>

export const DesignSystem: Story = {
  name: 'Design System',
}
