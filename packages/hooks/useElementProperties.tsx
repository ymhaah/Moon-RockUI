import { useState, useLayoutEffect, useMemo } from "react";

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
};

type propertiesT = sizePropsT | colorPropsT;

export default function useElementProperties<elementT>(
	elementRef: React.RefObject<elementT>,
): propertiesT {
	const [properties, setProperties] = useState<propertiesT>();

	const sizeProps: sizePropsT = useMemo(() => {
		return (elementRef.current as HTMLElement).getBoundingClientRect();
	}, [elementRef]);

	const colorProps: colorPropsT = useMemo(() => {
		return {
			color: window.getComputedStyle(elementRef.current as HTMLElement).color,
			backgroundColor: window.getComputedStyle(elementRef.current as HTMLElement)
				.backgroundColor,
		};
	}, [elementRef]);

	useLayoutEffect(() => {
		if (!elementRef.current) {
			Error("please only pass a react element ref");
		}
		setProperties({ ...sizeProps, ...colorProps });
	}, [colorProps, elementRef, sizeProps]);

	return properties as propertiesT;
}

// ! pass react ref with the element ref type => returns all the Element Properties
