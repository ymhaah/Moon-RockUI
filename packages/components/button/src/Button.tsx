import { useLayoutEffect, useRef } from "react";

import "wicg-inert";

import useCssVariable from "../../../hooks/useCssVariable.tsx";
import useClampFontSize from "../../../hooks/useClampFontSize.tsx";

import buttonPropsT from "../../../types/buttonPropsT.ts";

import "./Button.scss";

function Button({
	children,
	fontSize,
	fontSizeSetting = {
		minFontSize: 12,
		maxFontSize: 12 * 1.2,
		minWidth: 480,
		maxWidth: 1280,
	},
	isMultiline = false,
	isDisabled = false,
	isIconOnly,
	removeBiasStyles = false,
	cssVar = false,
	colors = {
		textColor: "",
		backgroundColor: "",
		primaryColor: "",
		secondaryColor: "",
		accentColor: "",
	},
	...nativeButtonAttributes
}: buttonPropsT) {
	type ELEMENT_TYPE = HTMLButtonElement;

	const ButtonRef = useRef<ELEMENT_TYPE>(null);

	const fontSizeValue = useClampFontSize(
		fontSize || fontSizeSetting.minFontSize,
		fontSizeSetting.maxFontSize,
		fontSizeSetting.minWidth,
		fontSizeSetting.maxWidth,
	);

	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-font-size",
		fontSize ? fontSizeValue : undefined,
		ButtonRef,
	);

	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-text-color",
		cssVar ? colors?.textColor : undefined,
		ButtonRef,
	);
	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-background-color",
		cssVar ? colors?.backgroundColor : undefined,
		ButtonRef,
	);
	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-primary-color",
		cssVar ? colors?.primaryColor : undefined,
		ButtonRef,
	);
	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-secondary-color",
		cssVar ? colors?.secondaryColor : undefined,
		ButtonRef,
	);
	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-accent-color",
		cssVar ? colors?.accentColor : undefined,
		ButtonRef,
	);

	useLayoutEffect(() => {
		if (ButtonRef.current) {
			if (isDisabled) {
				ButtonRef.current.inert = true;
			} else {
				ButtonRef.current.inert = false;
			}
		}
	}, [isDisabled]);

	return (
		<button
			aria-label={isIconOnly}
			className={`Moon-Rock_Button ${isMultiline ? "Moon-Rock_Button--multiline" : ""} ${
				isDisabled ? "Moon-Rock_Button--disabled" : ""
			} ${removeBiasStyles ? "" : "Moon-Rock_Button--BiasStyles"} ${
				cssVar ? "Moon-Rock_Button--cssVar" : ""
			}`}
			ref={ButtonRef}
			disabled={isDisabled}
			aria-disabled={isDisabled}
			{...nativeButtonAttributes}
		>
			{children}
		</button>
	);
}

export { Button };
export type { buttonPropsT };

// TODO: disable Animation
// TODO: link with the context
// TODO: context varinat thing
// // TODO: color from the prop or take the background color get it with a fun
// // TODO: Focus
// // TODO: isIconOnly
// // TODO: fix the fact that you can't use more than one button with the css overwrite
// // TODO: Remove suggested formats removeBiasStyles
// // TODO: font Size Setting
// // TODO: color properties
// ################# TODO LATER #################
// TODO: doc ( try to use rem & em in every thing )
// TODO: doc i don't take a value with do anything with it
