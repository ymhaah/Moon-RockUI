// import {UseButtonProps, useButton} from "./use-button";
import { ComponentProps, useCallback, useEffect, useRef } from "react";

// import {useFocusRing,useHover} from "@react-aria";
// import {chain, mergeProps} from "@react-aria/utils";

import useElementProperties from "../../../hooks/useElementProperties";
import useCssVariable from "../../../hooks/useCssVariable.tsx";
import useFontSize from "../../../hooks/useFontSize";

import "./Button.scss";

// export interface ButtonProps extends UseButtonProps {}

// const Button = forwardRef<"button", ButtonProps>((props, ref) => {
//   const {
//     Component,
//     domRef,
//     children,
//     styles,
//     spinnerSize,
//     spinner = <Spinner color="current" size={spinnerSize} />,
//     spinnerPlacement,
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
//       {isLoading && spinnerPlacement === "start" && spinner}
//       {children}
//       {isLoading && spinnerPlacement === "end" && spinner}
//       {endContent}
//       {!disableRipple && <Ripple {...getRippleProps()} />}
//     </Component>
//   );
// });

type nativeButtonPropsT = ComponentProps<"button">;

type customButtonPropsT = {
	children: React.ReactNode;
	fontSize?: number;
	interactive?: boolean;
	multiline?: boolean;
};

type buttonPropsT = customButtonPropsT & nativeButtonPropsT;

function Button({
	children,
	fontSize = 16,
	interactive = false,
	multiline = false,
	...nativeButtonAttributes
}: buttonPropsT) {
	type ELEMENT_TYPE = HTMLButtonElement;

	const ButtonRef = useRef<ELEMENT_TYPE>(null);

	const buttonSize = useElementProperties<ELEMENT_TYPE>(ButtonRef);

	useCssVariable("--Moon-Rock_button-size", useFontSize(fontSize));
	// useCssVariable("--Moon-Rock_button-padding-x-ratio", "1.25");
	// useCssVariable("--Moon-Rock_button-padding-y-ratio", "0.5");

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
	isElementPropertiesGood();

	useEffect(() => {
		// isElementPropertiesGood();
	}, []);

	return (
		<button
			className={`Moon-Rock_Button ${interactive ? "Moon-Rock_Button--interactive" : ""} ${
				multiline ? "Moon-Rock_Button--multiline" : ""
			}`}
			ref={ButtonRef}
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

// TODO: Focus & hover  state
// TODO: the defrence button type
// // TODO: make a fun that send a warring if the size is less than 37px
// // TODO: make a hook that use this js cool size thing to get any element size
// TODO: when taking the button size make accept px, rem, em and if he does not paht a value make the defalt px and after all of that make the vinal value with rem
// TODO: make the multi line subort
