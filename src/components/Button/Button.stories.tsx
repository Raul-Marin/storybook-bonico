import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { AngularPrimaryDocs } from '../../frameworks/angular/button/AngularPrimaryDocs'
import { angularPrimaryCodePanel } from '../../frameworks/angular/button/docs'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      codePanel: true,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/pKo1uwKpBNRvPgmvrYj7BE/Button---Storybook?node-id=2-136',
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
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary' },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary">Button</Button>`,
      },
    },
  },
}

export const PrimaryAngular: Story = {
  name: 'Primary · Angular',
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Documentación Angular standalone (`bonico-button`) del Button primary, con los mismos design tokens.',
      },
      source: {
        language: 'typescript',
        code: angularPrimaryCodePanel,
      },
    },
  },
  render: () => <AngularPrimaryDocs />,
}

export const Secondary: Story = {
  args: { variant: 'secondary' },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="secondary">Button</Button>`,
      },
    },
  },
}

export const Ghost: Story = {
  args: { variant: 'ghost' },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="ghost">Button</Button>`,
      },
    },
  },
}

export const Loading: Story = {
  args: { loading: true },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" loading>Button</Button>`,
      },
    },
  },
}

export const Focus: Story = {
  render: (args) => <Button {...args} data-state="focus" />,
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" data-state="focus">Button</Button>`,
      },
    },
  },
}
