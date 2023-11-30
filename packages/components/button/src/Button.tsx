import { useLayoutEffect, useRef } from "react";

import "wicg-inert";

import useCssVariable from "../../../hooks/useCssVariable.tsx";
import useClampFontSize from "../../../hooks/useClampFontSize.tsx";

import buttonPropsT from "./buttonPropsT.ts";

import "./Button.scss";

function Button({
	children,
	fontSize = 12,
	fontSizeSetting = {
		minFontSize: fontSize,
		maxFontSize: fontSize * 1.2,
		minWidth: 480,
		maxWidth: 1280,
	},
	isMultiline = false,
	isDisabled = false,
	isIconOnly,
	removeBiasStyles = false,
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

	useCssVariable<ELEMENT_TYPE>("--Moon-Rock_button-font-size", fontSizeValue, ButtonRef);

	useCssVariable<ELEMENT_TYPE>("--Moon-Rock_button-text-color", colors?.textColor, ButtonRef);
	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-background-color",
		colors?.backgroundColor,
		ButtonRef,
	);
	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-primary-color",
		colors?.primaryColor,
		ButtonRef,
	);
	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-secondary-color",
		colors?.secondaryColor,
		ButtonRef,
	);
	useCssVariable<ELEMENT_TYPE>("--Moon-Rock_button-accent-color", colors?.accentColor, ButtonRef);

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
			} ${removeBiasStyles ? "" : "Moon-Rock_Button--BiasStyles"}`}
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
