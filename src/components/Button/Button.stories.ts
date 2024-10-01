import { fn } from '@storybook/test'
import { Button } from './Button'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    bgcolor: 'red',
    label: 'test',
  },
}
