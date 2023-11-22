import { ComponentProps } from "react";

type nativeButtonPropsT = ComponentProps<"button">;

type customButtonPropsT = {
	children: React.ReactNode;
	fontSize?: number;
	// fontSizeSetting?: {
	// 	minFontSize: number;
	// 	maxFontSize: number;
	// 	minWidth: number;
	// 	maxWidth: number;
	// };
	isMultiline?: boolean;
	isDisabled?: boolean;
};

type buttonPropsT = customButtonPropsT & nativeButtonPropsT;

export type { buttonPropsT };
