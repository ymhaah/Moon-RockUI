// import {UseButtonProps, useButton} from "./use-button";
import { useRef } from "react";
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

type buttonPropsT = {
	children: React.ReactNode;
	interactive?: boolean;
	multiline?: boolean;
};

function Button({ children, interactive = false, multiline = false }: buttonPropsT) {
	const ButtonRef = useRef<HTMLButtonElement>(null);

	// ele.getBoundingClientRect()

	return (
		<button
			ref={ButtonRef}
			type="button"
			className={`Moon-Rock_Button ${interactive ? "Button--interactive" : ""} ${
				multiline ? "Button--multiline" : ""
			}`}
		>
			{children}
		</button>
	);
}

export default Button;

/*
	? button roll:
	- min size 30px (touch-based interactions)
	- touch targets should be at least 48 x 48
	- min margin 8px
	-  36px high, min width 88px
*/

// TODO: React Aria
// TODO: make a fun that send a warring if the size is less than 37px
// TODO: make a hook that use this js cool size thing to get any element size
// TODO: when taking the button size make accept px, rem, em and if he does not paht a value make the defalt px and after all of that make the vinal value with rem
// TODO: make the multi line subort
