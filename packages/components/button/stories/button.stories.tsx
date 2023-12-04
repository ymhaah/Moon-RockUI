import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { MoonRockUi } from "../../moonRockUi/src/MoonRockUi";
import { Button } from "../src/Button.tsx";
// import { Story } from "@storybook/react";

const meta: Meta<typeof Button> = {
	title: "button",
	component: Button,
	args: {
		children: "button",
		type: "button",
		fontSize: 14,
		isDisabled: false,
		isMultiline: false,
		removeBiasStyles: false,
	},
	decorators: [
		(Button) => {
			return (
				<MoonRockUi defaultValues={{ button: { fontSize: 30 } }}>
					<div
						style={{
							display: "flex",
							width: "100%",
							height: "100vh",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Button />
					</div>
				</MoonRockUi>
			);
		},
	],
};

type Story = StoryObj<typeof Button>;

export const Normal_Button: Story = {
	args: {
		children: "normal",
	},
};

export const Icon_only_Button: Story = {
	args: {
		children: (
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
				<path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
			</svg>
		),
		isIconOnly: "moon",
	},
};

export const Grouped_Buttons: Story = {
	args: {
		children: "normal",
	},
	decorators: [
		(Grouped_Buttons) => {
			return (
				<div style={{ display: "flex", gap: "1rem" }}>
					<Grouped_Buttons />
					<Grouped_Buttons />
					<Grouped_Buttons />
				</div>
			);
		},
	],
};

export const Disabled_Button: Story = {
	args: {
		children: "Disabled",
		isDisabled: true,
	},
};

export const Multiline_Button: Story = {
	args: {
		children: "this button needs more than on line",
		isMultiline: true,
	},
	decorators: [
		(Multiline_ButtonS) => {
			return (
				<div style={{ width: "8rem" }}>
					<Multiline_ButtonS />
				</div>
			);
		},
	],
};

export const Non_bias_Button: Story = {
	args: {
		children: "Non Bias",
		removeBiasStyles: true,
	},
};

export default meta;

// TODO: fontSizeSetting story setting
