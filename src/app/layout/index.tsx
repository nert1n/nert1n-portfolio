import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Providers from "@app/providers";
import { ReloadPrompt } from "@entities/reloadPrompt";
import { Loader } from "@shared/ui/loader";

const Layout = () => {
	return (
		<Providers>
			<main>
				<ReloadPrompt />
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
		</Providers>
	);
};

export default Layout;
