// import {UseButtonProps, useButton} from "./use-button";
import { useCallback, useLayoutEffect, useRef, ComponentProps } from "react";

import "wicg-inert";

import useElementProperties from "../../../hooks/useElementProperties";
import useCssVariable from "../../../hooks/useCssVariable.tsx";
import useClampFontSize from "../../../hooks/useClampFontSize.tsx";

import "./Button.scss";

// const Button = forwardRef<"button", ButtonProps>((props, ref) => {
//   const {
//     domRef,
//     children,
//     startContent,
//     endContent,
//     getButtonProps,
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
	fontSizeSetting?: {
		minFontSize: number;
		maxFontSize: number;
		minWidth: number;
		maxWidth: number;
	};
	isMultiline?: boolean;
	isDisabled?: boolean;
	isIconOnly?: {
		iconSize: string;
		altText: string;
	};
	removeBiasStyles?: boolean;
};

type buttonPropsT = customButtonPropsT & nativeButtonPropsT;

function Button({
	children,
	fontSize = 16,
	fontSizeSetting = {
		minFontSize: fontSize,
		maxFontSize: fontSize * 1.25,
		minWidth: 480,
		maxWidth: 1280,
	},
	isMultiline = false,
	isDisabled = false,
	isIconOnly,
	removeBiasStyles = false,
	...nativeButtonAttributes
}: buttonPropsT) {
	type ELEMENT_TYPE = HTMLButtonElement;

	const ButtonRef = useRef<ELEMENT_TYPE>(null);

	const buttonSize = useElementProperties<ELEMENT_TYPE>(ButtonRef);

	const fontSizeValue = useClampFontSize(
		fontSize || fontSizeSetting.minFontSize,
		fontSizeSetting.maxFontSize,
		fontSizeSetting.minWidth,
		fontSizeSetting.maxWidth,
	);

	useCssVariable<ELEMENT_TYPE>("--Moon-Rock_button-font-size", fontSizeValue);
	useCssVariable("--Moon-Rock_button-icon-size", isIconOnly?.iconSize || "0px");
	useCssVariable("--Moon-Rock_button-background-color");

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
			aria-label={isIconOnly?.altText}
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

// function App() {
// 	return (
// 		<Button>
// 			<Button>test</Button>
// 		</Button>
// 	);
// }

/*
	? button roll:
	- min size 30px (touch-based interactions)
	- touch targets should be at least 48 x 48
	- min margin 8px
	-  36px high, min width 88px
*/

// TODO: disable Animation
// TODO: isIconOnly
// TODO: Icon with text
// TODO: color from the prop or take the background color get it with a fun
// TODO: link with the context
// TODO: fix the fact that you can't use more than one button with the css overwrite
// // TODO: Remove suggested formats removeBiasStyles
// // TODO: font Size Setting
// ################# TODO LATER #################
// TODO: color properties
// TODO: Focus
