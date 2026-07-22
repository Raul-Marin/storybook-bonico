import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from './Chip'

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      codePanel: true,
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    dismissible: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Chip',
    variant: 'primary',
    size: 'md',
    dismissible: false,
    disabled: false,
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary' },
  parameters: {
    docs: {
      source: {
        code: `<Chip variant="primary">Chip</Chip>`,
      },
    },
  },
}

export const Secondary: Story = {
  args: { variant: 'secondary' },
  parameters: {
    docs: {
      source: {
        code: `<Chip variant="secondary">Chip</Chip>`,
      },
    },
  },
}

export const Ghost: Story = {
  args: { variant: 'ghost' },
  parameters: {
    docs: {
      source: {
        code: `<Chip variant="ghost">Chip</Chip>`,
      },
    },
  },
}

export const Dismissible: Story = {
  args: { dismissible: true },
  parameters: {
    docs: {
      source: {
        code: `<Chip variant="primary" dismissible onDismiss={() => {}}>Chip</Chip>`,
      },
    },
  },
}

export const Focus: Story = {
  render: (args) => <Chip {...args} data-state="focus" />,
  parameters: {
    docs: {
      source: {
        code: `<Chip variant="primary" data-state="focus">Chip</Chip>`,
      },
    },
  },
}
