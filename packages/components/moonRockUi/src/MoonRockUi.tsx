import { createContext, ComponentProps } from "react";

import { I18nProvider, I18nProviderProps, OverlayProvider } from "react-aria";

type OverlayProviderProps = ComponentProps<typeof OverlayProvider>;
type MoonRockUiProviderPropsT = Omit<OverlayProviderProps, "children"> & {
	children: React.ReactNode;
	// ? The locale to apply to the children -default "en-US"-
	locale?: I18nProviderProps["locale"];
};

type MoonRockUiContextT = {
	test: string;
};

const MOON_ROCK_UI = createContext<MoonRockUiContextT | undefined>(undefined);

function MoonRockUi({ children, locale = "en-US", ...otherProps }: MoonRockUiProviderPropsT) {
	return (
		<I18nProvider locale={locale}>
			<OverlayProvider {...otherProps}>
				<MOON_ROCK_UI.Provider value={undefined}>{children}</MOON_ROCK_UI.Provider>
			</OverlayProvider>
		</I18nProvider>
	);
}

export default MoonRockUi;

// TODO: the context value with a reducer + types
