import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Loader } from "@shared/ui/loader";

import { routes } from "./router.tsx";

const router = createBrowserRouter(routes);

export const AppRouter = () => {
	return (
		<RouterProvider
			fallbackElement={<Loader />}
			future={{ v7_startTransition: true }}
			router={router}
		/>
	);
};
