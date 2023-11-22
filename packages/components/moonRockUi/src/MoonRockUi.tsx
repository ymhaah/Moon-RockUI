import { createContext } from "react";

type MoonRockUiProviderPropsT = {
	children: React.ReactNode;
};

type MoonRockUiContextT = {
	test: string;
};

const MOON_ROCK_UI = createContext<MoonRockUiContextT | undefined>(undefined);

function MoonRockUi({ children }: MoonRockUiProviderPropsT) {
	return <MOON_ROCK_UI.Provider value={undefined}>{children}</MOON_ROCK_UI.Provider>;
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
