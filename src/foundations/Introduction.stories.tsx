import type { Meta, StoryObj } from '@storybook/react-vite'
import { FoundationsHome } from './_pages/FoundationsHome'

const meta = {
  title: 'Foundations/Introduction',
  component: FoundationsHome,
  parameters: {
    layout: 'padded',
    options: { showPanel: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof FoundationsHome>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  name: 'Overview',
}
