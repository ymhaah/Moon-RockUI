import { createContext, useState, useReducer } from "react";

import buttonPropsT from "../../../types/buttonPropsT.ts";

type contextT = {
	button?: buttonPropsT;
};

const moonRockContext = createContext<contextT | undefined>(undefined);

type MoonRockUiProviderPropsT = {
	children?: React.ReactNode;
	defaultValues?: contextT;
};

function defaultValuesReducer(state: contextT | undefined, action) {
	return state;
}

function MoonRockUi({ children, defaultValues = undefined }: MoonRockUiProviderPropsT) {
	const [CONTEXT, dispatchContext] = useReducer(defaultValuesReducer, defaultValues);

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
