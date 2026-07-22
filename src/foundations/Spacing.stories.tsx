import type { Meta, StoryObj } from '@storybook/react-vite'
import { SpacingPage } from './_pages/SpacingPage'

const meta = {
  title: 'Foundations/Spacing',
  component: SpacingPage,
  parameters: {
    layout: 'padded',
    options: { showPanel: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof SpacingPage>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  name: 'Scale',
}
