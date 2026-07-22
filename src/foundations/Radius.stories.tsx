import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadiusPage } from './_pages/RadiusPage'

const meta = {
  title: 'Foundations/Radius',
  component: RadiusPage,
  parameters: {
    layout: 'padded',
    options: { showPanel: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof RadiusPage>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  name: 'Scale',
}
