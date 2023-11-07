import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../src/Button.tsx";
// import { Story } from "@storybook/react";

const meta: Meta<typeof Button> = {
	title: "button",
	component: Button,
	args: {
		children: "button",
		interactive: false,
		multiline: false,
	},
	// decorators:[] use the main context
};

type Story = StoryObj<typeof Button>;

export const Normal_Button: Story = {
	args: {
		children: "normal",
	},
};

export const Interactive_Button: Story = {
	args: {
		children: "interactive",
		interactive: true,
	},
};
export const Multiline_Button: Story = {
	args: {
		children: "this button have some much text that it needs more than on line to fit",
		multiline: true,
	},
	decorators: [
		(Multiline_ButtonS) => {
			return (
				<div style={{ width: "3rem" }}>
					<Multiline_ButtonS />
				</div>
			);
		},
	],
};

export default meta;
