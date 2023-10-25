// import {UseButtonProps, useButton} from "./use-button";
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

// Button.displayName = "NextUI.Button";

function Button() {
	return <button type="button">test</button>;
}

export default Button;
