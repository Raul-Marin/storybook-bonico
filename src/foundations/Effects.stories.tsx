import type { Meta, StoryObj } from '@storybook/react-vite'
import { EffectsPage } from './_pages/EffectsPage'

const meta = {
  title: 'Foundations/Effects',
  component: EffectsPage,
  parameters: {
    layout: 'padded',
    options: { showPanel: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof EffectsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  name: 'Interactions',
}
