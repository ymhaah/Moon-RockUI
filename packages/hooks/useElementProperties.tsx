import { useState, useLayoutEffect } from "react";

type sizePropsT = {
	width: number;
	height: number;
	top: number;
	right: number;
	bottom: number;
	left: number;
	x: number;
	y: number;
};

type colorPropsT = {
	color: string;
	backgroundColor: string;
	fontSize: string;
};

type propertiesT = sizePropsT | colorPropsT;

export default function useElementProperties<elementT>(
	elementRef: React.RefObject<elementT>,
): propertiesT {
	const [properties, setProperties] = useState<propertiesT>();

	useLayoutEffect(() => {
		if (!elementRef.current) {
			Error("please only pass a react element ref");
		}

		const sizeProps: sizePropsT = {
			width: (elementRef.current as HTMLElement).getBoundingClientRect().width,
			height: (elementRef.current as HTMLElement).getBoundingClientRect().height,
			top: (elementRef.current as HTMLElement).getBoundingClientRect().top,
			right: (elementRef.current as HTMLElement).getBoundingClientRect().right,
			bottom: (elementRef.current as HTMLElement).getBoundingClientRect().bottom,
			left: (elementRef.current as HTMLElement).getBoundingClientRect().left,
			x: (elementRef.current as HTMLElement).getBoundingClientRect().x,
			y: (elementRef.current as HTMLElement).getBoundingClientRect().y,
		};

		const colorProps: colorPropsT = {
			color: window.getComputedStyle(elementRef.current as HTMLElement).color,
			backgroundColor: window.getComputedStyle(elementRef.current as HTMLElement)
				.backgroundColor,
			fontSize: window.getComputedStyle(elementRef.current as HTMLElement).fontSize,
		};

		const properties: propertiesT = { ...sizeProps, ...colorProps };

		setProperties(properties);
	}, [elementRef]);

	return properties as propertiesT;
}

// ! pass react ref with the element ref type => returns all the Element Properties
