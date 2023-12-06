import { createContext, useReducer } from "react";

import buttonPropsT from "../../../types/buttonPropsT.ts";

type contextT = {
	button?: buttonPropsT;
};

const moonRockContext = createContext<contextT | undefined>(undefined);

type MoonRockUiProviderPropsT = {
	children?: React.ReactNode;
	defaultValues?: contextT;
};

function defaultValuesReducer(state: contextT | undefined) {
	return state;
}

function MoonRockUi({
	children,
	defaultValues = {
		button: {
			isIconOnly: undefined,
			fontSize: 12,
			fontSizeSetting: {
				minFontSize: 12,
				maxFontSize: 12 * 1.2,
				minWidth: 480,
				maxWidth: 1280,
			},
			isMultiline: false,
			isDisabled: false,
			removeBiasStyles: false,
			cssVar: false,
		},
	},
}: MoonRockUiProviderPropsT) {
	const [CONTEXT] = useReducer(defaultValuesReducer, defaultValues);

	return (
		<moonRockContext.Provider value={CONTEXT}>
			<div>{children}</div>
		</moonRockContext.Provider>
	);
}

// function App() {
// 	return <MoonRockUi defaultValues={{button: {fontSize: 1}}}>test</MoonRockUi>;
// }

export { MoonRockUi, moonRockContext };

// TODO: the context value with a reducer + types
// TODO: visually hidden
// TODO: disable Animation
// TODO: accent colors
// TODO: isDisabled
// TODO: old-script
// TODO: no-script
// TODO: no-scroll
