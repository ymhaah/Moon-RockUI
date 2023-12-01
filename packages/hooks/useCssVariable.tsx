import { useLayoutEffect } from "react";

type ElementWithStyle = HTMLElement & {
	style: CSSStyleDeclaration;
};

export default function useCssVariable<elementT extends ElementWithStyle>(
	variableName: string,
	variableValue: string | undefined,
	ROOT?: React.RefObject<elementT> | undefined,
) {
	useLayoutEffect(() => {
		const root = ROOT?.current;
		if (typeof variableValue === "string") {
			if (ROOT) {
				root?.style.setProperty(variableName, variableValue);
			} else {
				const root = document.querySelector(":root") as HTMLElement | null;
				root?.style.setProperty(variableName, variableValue);
			}
		}
	}, [ROOT, variableName, variableValue]);
}

// ! pass the var name and the var value to change or create a css var
// ! if the var in not on the ":root" selector pass the new selector as a ref (other than ":root") to modify. Defaults from ":root".
