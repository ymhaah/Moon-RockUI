import { useLayoutEffect, useState } from "react";

export default function useClampFontSize(
	minSize: number,
	maxSize = minSize * 1.25,
	minWidth = 480,
	maxWidth = 1280,
): string {
	const [fontSize, setFontSize] = useState("");

	useLayoutEffect(() => {
		if (typeof minSize === "number") {
			if (CSS.supports("font-size", "clamp(16px, 2vw, 2rem)")) {
				const minSizeRem = minSize / 16;
				const maxSizeRem = maxSize / 16;
				const minWidthRem = minWidth / 16;
				const maxWidthRem = maxWidth / 16;

				const slope = (maxSizeRem - minSizeRem) / (maxWidthRem - minWidthRem);
				const yAxisIntersection = -minWidthRem * slope + minSizeRem;
				const preferredValue = `${yAxisIntersection}rem + ${slope * 100}vw`;

				const minSizeOutput = `${minSizeRem}rem`;
				const maxSizeOutput = `${maxSizeRem}rem`;

				const calculatedFont = `clamp(${minSizeOutput}, ${preferredValue}, ${maxSizeOutput})`;

				setFontSize(calculatedFont);
			} else {
				// eslint-disable-next-line no-console
				console.warn(
					"Your current browser may not support all features of our library (css clamp),Please update to the latest version",
				);
				setFontSize(`${minSize}px`);
			}
		}
	}, [minSize, maxSize, minWidth, maxWidth]);

	return fontSize;
}

// ! pass the min font size and get a css clamp
// ! change the other value for more control
