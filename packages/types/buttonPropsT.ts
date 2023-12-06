import { ComponentProps } from "react";

import { cssColorsT } from "./colors.ts";

type nativeButtonPropsT = ComponentProps<"button">;

type customButtonPropsT = {
	children?: React.ReactNode;
	fontSize?: number;
	fontSizeSetting?: {
		minFontSize: number;
		maxFontSize: number;
		minWidth: number;
		maxWidth: number;
	};
	isMultiline?: boolean;
	isDisabled?: boolean;
	isIconOnly?: string;
	removeBiasStyles?: boolean;
	cssVar?: boolean;
	colors?: {
		textColor?: cssColorsT | string;
		backgroundColor?: cssColorsT | string;
		primaryColor?: cssColorsT | string;
		secondaryColor?: cssColorsT | string;
		accentColor?: cssColorsT | string;
	};
};

type buttonPropsT = customButtonPropsT & nativeButtonPropsT;

export default buttonPropsT;
