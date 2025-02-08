import { lazy } from "react";

export const ErrorPage = lazy(() =>
	import("./ui/error.tsx").then(module => ({ default: module.ErrorPage }))
);
