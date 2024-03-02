import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button } from './button';

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
	args: {},
};

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Button/gi)).toBeTruthy();
	},
};
