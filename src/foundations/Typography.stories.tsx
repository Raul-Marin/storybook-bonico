import type { Meta, StoryObj } from '@storybook/react-vite'
import { TypographyPage } from './_pages/TypographyPage'

const meta = {
  title: 'Foundations/Typography',
  component: TypographyPage,
  parameters: {
    layout: 'padded',
    options: { showPanel: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof TypographyPage>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  name: 'Scale',
}
