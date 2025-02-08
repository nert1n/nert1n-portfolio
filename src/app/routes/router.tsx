import Layout from "@app/layout";
import { ErrorPage } from "@pages/error";
import { HomePage } from "@pages/home";
import { NotFoundPage } from "@pages/not-found";

export const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage errorText={"Error with router!"} />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
];
