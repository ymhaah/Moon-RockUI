import { useLayoutEffect } from "react";

export default function useCssVariable<elementT>(
	variableName: string,
	variableValue: string,
	ROOT?: React.RefObject<elementT>,
) {
	useLayoutEffect(() => {
		if (!ROOT) {
			const root = document.querySelector(":root") as HTMLElement | null;
			root?.style.setProperty(variableName, variableValue);
		} else {
			const root = ROOT?.current;
			root?.style.setProperty(variableName, variableValue);
		}
	}, [ROOT, variableName, variableValue]);
}

// ! pass the var name and the var value to change or create a css var
// ! if the var in not on the ":root" selector pass the new selector (other than ":root") to modify. Defaults from ":root".
