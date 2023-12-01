import { createContext, useState } from "react";

import buttonPropsT from "../../../types/buttonPropsT.ts";

type contextT = {
	button?: buttonPropsT;
};

type MoonRockUiProviderPropsT = {
	children: React.ReactNode;
};

const MOON_ROCK_UI = createContext<contextT | undefined>(undefined);

function MoonRockUi({ children }: MoonRockUiProviderPropsT) {
	// const [CONTEXT, setContext] = useState<contextT>({button: b});

	return (
		<MOON_ROCK_UI.Provider value={undefined}>
			<div>{children}</div>
		</MOON_ROCK_UI.Provider>
	);
}

function App() {
	return <MoonRockUi>test</MoonRockUi>;
}

export default MoonRockUi;

// TODO: the context value with a reducer + types
// TODO: visually hidden
// TODO: disable Animation
// TODO: accent colors
// TODO: isDisabled
// TODO: old-script
// TODO: no-script
// TODO: no-scroll
