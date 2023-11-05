import React from "react";

import Button from "../src/Button.tsx";

export default {
	title: "button",
	component: Button,
};

export const Normal_Button = () => <Button>Button</Button>;

export const Interactive_Button = () => <Button interactive>Button</Button>;

export const Multiline_Button = () => {
	return (
		<div style={{ width: "3rem" }}>
			<Button multiline>
				this button have some much text that it needs more than on line to fit
			</Button>
		</div>
	);
};
