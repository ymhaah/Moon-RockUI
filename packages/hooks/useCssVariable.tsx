import { useLayoutEffect } from "react";

export default function useCssVariable(
	variableName: string,
	variableValue: string,
	notRoot: string | null = null,
) {
	useLayoutEffect(() => {
		if (notRoot === null) {
			const root = document.querySelector(":root") as HTMLElement | null;
			root?.style.setProperty(variableName, variableValue);
		} else {
			const root = document.querySelector(notRoot) as HTMLElement | null;
			root?.style.setProperty(variableName, variableValue);
		}
	}, [notRoot, variableName, variableValue]);
}

// ! pass the var name and the var value to change or create a css var
// ! if the var in not on the ":root" selector pass the new selector (other than ":root") to modify. Defaults from ":root".
