import { Suspense } from "react";

import MainLayout from "@app/layout/main-layout/main-layout.tsx";
import Providers from "@app/providers";
import { ReloadPrompt } from "@entities/reloadPrompt";
import { Loader } from "@shared/ui/loader";

const Layout = () => {
	return (
		<Providers>
			<main>
				<ReloadPrompt />
				<Suspense fallback={<Loader />}>
					<MainLayout />
				</Suspense>
			</main>
		</Providers>
	);
};

export default Layout;
