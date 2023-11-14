// import {UseButtonProps, useButton} from "./use-button";
import { ComponentProps, useCallback, useLayoutEffect, useRef } from "react";

import "wicg-inert";

import useElementProperties from "../../../hooks/useElementProperties";
import useCssVariable from "../../../hooks/useCssVariable.tsx";
import useFontSize from "../../../hooks/useFontSize";

import "./Button.scss";

// const Button = forwardRef<"button", ButtonProps>((props, ref) => {
//   const {
//     Component,
//     domRef,
//     children,
//     styles,
//     startContent,
//     endContent,
//     isLoading,
//     disableRipple,
//     getButtonProps,
//     getRippleProps,
//   } = useButton({...props, ref});

//   return (
//     <Component ref={domRef} className={styles} {...getButtonProps()}>
//       {startContent}
//       {children}
//       {endContent}
//     </Component>
//   );
// });

type nativeButtonPropsT = ComponentProps<"button">;

type customButtonPropsT = {
	children: React.ReactNode;
	fontSize?: number;
	isMultiline?: boolean;
	isDisabled?: boolean;
};

type buttonPropsT = customButtonPropsT & nativeButtonPropsT;

function Button({
	children,
	fontSize = 16,
	isMultiline = false,
	isDisabled = false,
	...nativeButtonAttributes
}: buttonPropsT) {
	type ELEMENT_TYPE = HTMLButtonElement;

	const ButtonRef = useRef<ELEMENT_TYPE>(null);

	const buttonSize = useElementProperties<ELEMENT_TYPE>(ButtonRef);

	useCssVariable("--Moon-Rock_button-size", useFontSize(fontSize));

	const isElementPropertiesGood = useCallback(() => {
		// ? size
		if (buttonSize?.width < 30 || buttonSize?.height < 12) {
			// eslint-disable-next-line no-console
			console.warn(
				"we recommend that the button size be at least larger than 30 px for better accessibility",
			);
		}
		if (fontSize < 13) {
			// eslint-disable-next-line no-console
			console.warn(
				"we recommend that the button font size be at least 14 px for better accessibility",
			);
		}
		// TODO : color properties
	}, [buttonSize, fontSize]);

	useLayoutEffect(() => {
		isElementPropertiesGood();
	}, [isElementPropertiesGood]);
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
			className={`Moon-Rock_Button ${isMultiline ? "Moon-Rock_Button--multiline" : ""} ${
				isDisabled ? "Moon-Rock_Button--disabled" : ""
			}`}
			ref={ButtonRef}
			disabled={isDisabled}
			aria-hidden={isDisabled}
			{...nativeButtonAttributes}
		>
			{children}
		</button>
	);
}

export default Button;

// function App() {
// 	return <Button >test</Button>;
// }

/*
	? button roll:
	- min size 30px (touch-based interactions)
	- touch targets should be at least 48 x 48
	- min margin 8px
	-  36px high, min width 88px
*/

// TODO: font size setting
// TODO : color properties
// TODO: Focus & hover  state
// // TODO: make a fun that send a warring if the size is less than 37px
// // TODO: make a hook that use this js cool size thing to get any element size
// // TODO: make the multi line support
