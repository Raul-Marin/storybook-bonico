import type { Meta, StoryObj } from '@storybook/react-vite'
import { ColorsPage } from './_pages/ColorsPage'

const meta = {
  title: 'Foundations/Colors',
  component: ColorsPage,
  parameters: {
    layout: 'padded',
    options: { showPanel: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof ColorsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  name: 'Palette',
}
