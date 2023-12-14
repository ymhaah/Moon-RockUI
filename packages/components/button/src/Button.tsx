/* eslint-disable no-mixed-spaces-and-tabs */
import { useLayoutEffect, useRef, useContext, useState } from "react";

import "wicg-inert";

import { moonRockContext } from "../../moonRockUi/src/MoonRockUi.tsx";

import useCssVariable from "../../../hooks/useCssVariable.tsx";
import useClampFontSize from "../../../hooks/useClampFontSize.tsx";

import buttonPropsT from "../../../types/buttonPropsT.ts";

import "./Button.css";

function Button(props: buttonPropsT) {
	const context = useContext(moonRockContext);

	const [mainValue, setMainValue] = useState(
		context?.button !== undefined ? { ...context?.button, ...props } : props,
	);

	useLayoutEffect(() => {
		setMainValue(context?.button !== undefined ? { ...context?.button, ...props } : props);
	}, [context?.button, props]);

	const {
		children,
		fontSize,
		fontSizeSetting,
		isMultiline,
		isDisabled,
		isIconOnly,
		removeBiasStyles,
		cssVar,
		colors,
		...nativeButtonAttributes
	} = mainValue;

	type ELEMENT_TYPE = HTMLButtonElement;

	const ButtonRef = useRef<ELEMENT_TYPE>(null);

	const fontSizeValue = useClampFontSize(
		fontSizeSetting
			? (fontSizeSetting.minFontSize,
			  fontSizeSetting.maxFontSize,
			  fontSizeSetting.minWidth,
			  fontSizeSetting.maxWidth)
			: fontSize
			? fontSize
			: 12,
	);

	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-font-size",
		fontSizeValue ? fontSizeValue : undefined,
		ButtonRef,
	);

	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-text-color",
		cssVar && colors ? colors.textColor : undefined,
		ButtonRef,
	);
	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-background-color",
		cssVar && colors ? colors.backgroundColor : undefined,
		ButtonRef,
	);
	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-primary-color",
		cssVar && colors ? colors.primaryColor : undefined,
		ButtonRef,
	);
	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-secondary-color",
		cssVar && colors ? colors.secondaryColor : undefined,
		ButtonRef,
	);
	useCssVariable<ELEMENT_TYPE>(
		"--Moon-Rock_button-accent-color",
		cssVar && colors ? colors.accentColor : undefined,
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

export default Button;

// ################# TODO LATER #################
// TODO: doc ( try to use rem & em in every thing )
// TODO: doc i don't take a value with do anything with it
