import { lazy } from "react";

export const HomePage = lazy(() =>
	import("./ui/home.tsx").then(module => ({ default: module.Home }))
);
