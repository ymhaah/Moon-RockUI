import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
			copyDtsFiles: true,
		}),
	],

	build: {
		outDir: "dist",
		minify: false,
		manifest: true,
		lib: {
			entry: resolve(__dirname, "packages/index.ts"),
			name: "moon-rockUi",
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime", "react-aria"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react-aria": "react-aria",
				},
				entryFileNames: "[name].js",
				chunkFileNames: "[name].js",
				assetFileNames: "[name].[ext]",
			},
		},
	},
});
