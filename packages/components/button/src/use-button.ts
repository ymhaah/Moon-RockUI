// import {useFocusRing} from "@react-aria/focus";
// import {chain, mergeProps} from "@react-aria/utils";
// import {useHover} from "@react-aria/interactions";

// import type {ReactNode} from "react";
// import {MouseEventHandler, useCallback} from "react";
// import {isValidElement, cloneElement, useMemo} from "react";

// interface Props extends HTMLNextUIProps<"button"> {
//   /**
//    * Ref to the DOM node.
//    */
//   ref?: ReactRef<HTMLButtonElement | null>;
//   /**
//   /**
//    * The button start content.
//    */
//   startContent?: ReactNode;
//   /**
//    * The button end content.
//    */
//   endContent?: ReactNode;
//   /**
//   onClick?: MouseEventHandler<HTMLButtonElement>;
// }

// export type UseButtonProps = Props &
//   Omit<AriaButtonProps, keyof ButtonVariantProps> &
//   Omit<ButtonVariantProps, "isInGroup">;

// export function useButton(props: UseButtonProps) {
//   const {
//     ref,
//     as,
//     children,
//     startContent: startContentProp,
//     endContent: endContentProp,
//     autoFocus,
//     color = groupContext?.color ?? "default",
//     onPress,
//     onClick,
//     ...otherProps
//   } = props;

//   const Component = as || "button";
//   const shouldFilterDOMProps = typeof Component === "string";

//   const domRef = useDOMRef(ref);

//   const {isFocusVisible, isFocused, focusProps} = useFocusRing({
//     autoFocus,
//   });

//   const isDisabled = isDisabledProp || isLoading;

//   const styles = useMemo(
//     () =>
//       button({
//         size,
//         color,
//         disableAnimation,
//         isIconOnly,
//         className,
//       }),
//     [
//       size,
//       color,
//       isIconOnly,
//       disableAnimation,
//       className,
//     ],
//   );

//   const handleClick = useCallback(
//     (e: React.MouseEvent<HTMLButtonElement>) => {
//       if (disableRipple || isDisabled || disableAnimation) return;
//       domRef.current && onRippleClickHandler(e);
//     },
//     [disableRipple, isDisabled, disableAnimation, domRef, onRippleClickHandler],
//   );

//   const {buttonProps: ariaButtonProps, isPressed} = useAriaButton(
//     {
//       elementType: as,
//       isDisabled,
//       onPress,
//       onClick: chain(onClick, handleClick),
//       ...otherProps,
//     } as AriaButtonProps,
//     domRef,
//   );

//   const {isHovered, hoverProps} = useHover({isDisabled});

//   const getButtonProps: PropGetter = useCallback(
//     (props = {}) => ({
//       "data-disabled": dataAttr(isDisabled),
//       "data-focus": dataAttr(isFocused),
//       "data-pressed": dataAttr(isPressed),
//       "data-focus-visible": dataAttr(isFocusVisible),
//       "data-hover": dataAttr(isHovered),
//       "data-loading": dataAttr(isLoading),
//       ...mergeProps(
//         ariaButtonProps,
//         focusProps,
//         hoverProps,
//         filterDOMProps(otherProps, {
//           enabled: shouldFilterDOMProps,
//         }),
//         filterDOMProps(props),
//       ),
//     }),
//     [
//       isLoading,
//       isDisabled,
//       isFocused,
//       isPressed,
//       shouldFilterDOMProps,
//       isFocusVisible,
//       isHovered,
//       ariaButtonProps,
//       focusProps,
//       hoverProps,
//       otherProps,
//     ],
//   );

//   const getIconClone = (icon: ReactNode) =>
//     isValidElement(icon)
//       ? cloneElement(icon, {
//           // @ts-ignore
//           "aria-hidden": true,
//           focusable: false,
//           tabIndex: -1,
//         })
//       : null;

//   const startContent = getIconClone(startContentProp);
//   const endContent = getIconClone(endContentProp);

//   }, [size]);

//   const getRippleProps = useCallback<() => RippleProps>(
//     () => ({ripples, onClear: onClearRipple}),
//     [ripples, onClearRipple],
//   );

//   return {
//     Component,
//     children,
//     domRef,
//     spinner,
//     styles,
//     startContent,
//     endContent,
//     isLoading,
//     spinnerPlacement,
//     spinnerSize,
//     disableRipple,
//     getButtonProps,
//     getRippleProps,
//   };
// }

// export type UseButtonReturn = ReturnType<typeof useButton>;
