import { useState, useLayoutEffect } from "react";

type propertiesT = {
	width: number;
	height: number;
	top: number;
	right: number;
	bottom: number;
	left: number;
	x: number;
	y: number;
};

export default function useElementProperties<elementT>(
	elementRef: React.RefObject<elementT>,
): propertiesT {
	const [properties, setProperties] = useState<propertiesT>();

	useLayoutEffect(() => {
		if (!elementRef.current) {
			Error("please only pass a react element ref");
		}
		setProperties((elementRef.current as HTMLElement).getBoundingClientRect());

		// window.getComputedStyle(element)
	}, [elementRef]);

	return properties as propertiesT;
}

// ! pass react ref with the element ref type => returns all the Element Properties
